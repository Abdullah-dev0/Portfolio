import { gql, request } from "graphql-request";

const endPoint: string | undefined = import.meta.env.VITE_HASHNODE_URL;
const userId: string | undefined = import.meta.env.VITE_HASHNODE_USER_ID;

const getPosts = async (slug: string) => {
   const query = gql`
    query GetUserArticles {
  publication(id: "${userId}") {
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

   const respose = await request(endPoint!, query, { userId });

   return respose;
};

const getAllPosts = async () => {
   const query = gql`
      query GetUserArticles {
         publication(id: "${userId}") {
            posts(first: 10) {
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

   const response = await request(endPoint!, query, { userId });

   return response;
};

export { getAllPosts, getPosts };
