import { getAllPosts } from "@/lib/gql";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const PostSection = () => {
   const [blogs, setBlogs] = useState([]);
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

   return (
      <section className="w-full">
         <div className="flex text-[18px] max-sm:text-[15px] justify-between flex-wrap">
            <h1 className="">Latest Posts</h1>
            <Link to="/blogs" className="underline">
               See all posts
            </Link>
         </div>
         <div>
            {loading ? (
               <div className="text-center mt-3"> Loading...</div>
            ) : (
               blogs.slice(0, 2).map((post: any) => (
                  <Link to={`blogs/${post.node.slug}`} key={post.node.id}>
                     <Posts
                        key={post.node.id}
                        slug={post.node.title}
                        description={post.node.brief}
                     />
                  </Link>
               ))
            )}
         </div>
      </section>
   );
};

export default PostSection;
