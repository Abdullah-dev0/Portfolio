import Loader from "@/components/shared/Loader";
import Model from "@/components/shared/Model";
import Posts from "@/components/shared/Posts";
import { useGetAllPosts } from "@/Hooks/useResquests";
import Layout from "@/Layout";
import { subscribeToNewsletter } from "@/lib/requests";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

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

   const handleSubmit = async (email:string) => {
      try {
         const res: any = await subscribeToNewsletter(email);
         if (res) {
            toast.success(
               "please comfirm your email to subscribe to our newsletter"
            );
         }
      } catch (error: any) {
         if (error.response.errors[0].message === "Email already subscribed") {
            toast.error("Email already subscribed");
         }
      }
   };

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
            handleSubmit={(email) => handleSubmit(email)}
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
