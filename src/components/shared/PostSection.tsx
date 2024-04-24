import { posts } from "@/constants";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const PostSection = () => {
   return (
      <section className="w-full">
         <div className="flex text-[18px] max-sm:text-[15px] justify-between flex-wrap">
            <h1 className="">Latest Posts</h1>
            <Link to="/blogs" className="underline">
               See all posts
            </Link>
         </div>
         <div>
            {posts.slice(0, 3).map((post) => (
               <Link to={`blogs/${post.slug}`} key={post.id}>
                  <Posts
                     key={post.id}
                     slug={post.slug}
                     description={post.description}
                  />
               </Link>
            ))}
         </div>
      </section>
   );
};

export default PostSection;
