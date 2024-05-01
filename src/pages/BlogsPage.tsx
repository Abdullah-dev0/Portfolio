import Loader from "@/components/shared/Loader";
import Model from "@/components/shared/Model";
import Posts from "@/components/shared/Posts";
import { useGetAllPosts } from "@/Hooks/useResquests";
import Layout from "@/Layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsPage = () => {
   const { blogs, loading } = useGetAllPosts();
   const [show, setShow] = useState<boolean>(false);

   useEffect(() => {
      const hasVisitedBefore = localStorage.getItem("email");

      window.onbeforeunload = () => {
         localStorage.removeItem("email");
      };

      if (!hasVisitedBefore) {
         setTimeout(() => {
            setShow(true);
            localStorage.setItem("email", "true");
         }, 2000);
      }
   }, []);

   return (
      <Layout>
         <Model
            title="Subscribe to our newsletter"
            type="newslettter"
            show={show}
            handle={() => {
               setShow(false);
            }}
            description="Get the latest news and updates on our products"
         />
         <h1 className="text-4xl font-bold">Blogs</h1>
         <div className="flex flex-col mt-8">
            {loading && <Loader />}
            {blogs.map((blog: any) => (
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
