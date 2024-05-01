import { gql, request } from "graphql-request";

const endPoint: string = import.meta.env.VITE_HASHNODE_URL;
const publicationId: string = import.meta.env.VITE_HASHNODE_USER_ID;

if (!endPoint || !publicationId) {
   throw new Error("Environment variables not found");
}

const getPosts = async (slug: string) => {
   const query = gql`
    query GetUserArticles( $publicationId: ObjectId!) {
  publication(id:  $publicationId) {
    title
    descriptionSEO
    url
    post(slug: "${slug}") {
      id
      url
      publishedAt
       coverImage{
        url
      }
      title
      updatedAt
     brief
      content {
        
         markdown
      }
    }
  }
}
  `;

   const respose = await request(endPoint, query, { publicationId });

   return respose;
};

const getAllPosts = async () => {
   const number = 8;
   const query = gql`
      query GetUserArticles($publicationId: ObjectId!) {
         publication(id: $publicationId) {
            posts(first: ${number}) {
               edges {
                  node {
                     id
                     slug
                     title
                     brief
                  }
               }
            }
         }
      }
   `;

   const response = await request(endPoint, query, { publicationId });

   return response;
};

export async function subscribeToNewsletter(email: string) {
   const mutation = gql`
      mutation subscribeToNewsletter(
         $publicationId: ObjectId!
         $email: String!
      ) {
         subscribeToNewsletter(
            input: { email: $email, publicationId: $publicationId }
         ) {
            status
         }
      }
   `;

   const response = await request(endPoint, mutation, {
      publicationId,
      email,
   });

   return response;
}

export { getAllPosts, getPosts };
