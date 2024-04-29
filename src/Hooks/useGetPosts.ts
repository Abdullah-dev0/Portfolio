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
      brief: "",
      coverImage: {
         url: "",
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
   const [blogs, setBlogs] = useState<[]>([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      const blogs = async () => {
         try {
            const response: any = await getAllPosts();

            setBlogs(response.publication.posts.edges);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      blogs();
   }, []);

   return { blogs, loading };
};
