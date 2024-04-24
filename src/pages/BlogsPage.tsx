import Posts from "@/components/shared/Posts";
import { posts } from "@/constants";
import Layout from "@/layouts/Layout";
import { Link } from "react-router-dom";

const BlogsPage = () => {
   return (
      <Layout>
         <h1 className="text-4xl font-bold">Blogs</h1>
         <div className="flex flex-col mt-8">
            {posts.map((post) => (
               <Link to={`${post.slug}`}>
                  <Posts
                     key={post.id}
                     slug={post.slug}
                     description={post.description}
                  />
               </Link>
            ))}
         </div>
      </Layout>
   );
};

export default BlogsPage;
