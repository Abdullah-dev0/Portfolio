import { getAllPosts, getPosts } from "@/lib/requests";
import { Post } from "@/types";
import { useEffect, useState } from "react";

export function useGetPosts(slug: string) {
   const [blogs, setBlogs] = useState<Post>({
      id: "",
      url: "",
      title: "",
      publishedAt: "",
      updatedAt: "",
      coverImage: {
         url: "",
      },
      content: {
         text: "",
      },
   });
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const Posts = async () => {
         try {
            const res: any = await getPosts(slug);
            setBlogs(res.publication.post);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      Posts();
   }, [slug]);

   return { blogs, loading };
}

export const useGetAllPosts = () => {
   const [blogs, setBlogs] = useState<any>(null);
   useEffect(() => {
      const blogs = async () => {
         const response: any = await getAllPosts();

         setBlogs(response.publication.posts.edges);
      };

      blogs();
   }, []);

   return { blogs };
};
