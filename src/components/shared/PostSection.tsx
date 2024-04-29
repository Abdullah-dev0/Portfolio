import { useGetAllPosts } from "@/Hooks/useGetPosts";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const PostSection = () => {
   const { blogs, loading } = useGetAllPosts();

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
               <div className="text-center"> Loading...</div>
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
