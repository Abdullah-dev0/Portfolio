import Posts from "@/components/shared/Posts";
import Layout from "@/Layout";
import { getAllPosts } from "@/lib/requests";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsPage = () => {
   const [blogs, setBlogs] = useState<any>(null);
   useEffect(() => {
      const blogs = async () => {
         const response: any = await getAllPosts();

         setBlogs(response.publication.posts.edges);
      };

      blogs();
   }, []);

   return (
      <Layout>
         <h1 className="text-4xl font-bold">Blogs</h1>

         <div className="flex flex-col mt-8">
            {blogs?.map((blog: any) => (
               <Link key={blog.node?.id} to={`${blog.node?.slug}`}>
                  <Posts
                     key={blog.node?.id}
                     slug={blog.node.title}
                     description={blog.node.brief}
                  />
               </Link>
            ))}
         </div>
      </Layout>
   );
};

export default BlogsPage;
