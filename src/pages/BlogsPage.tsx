import Loader from "@/components/shared/Loader";
import Model from "@/components/shared/Model";
import Posts from "@/components/shared/Posts";
import { Button } from "@/components/ui/button";
import Layout from "@/Layout";
import { getAllPosts } from "@/lib/gql";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsPage = () => {
   const [show, setShow] = useState<boolean>(false);
   const [blogs, setBlogs] = useState<[]>([]);
   const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState(1);
   const [endCursor, setEndCursor] = useState<any>("");
   const [hasNextPage, setHasNextPage] = useState<boolean>(false);

   const fetchBlogs = async (after = null) => {
      setLoading(true);
      try {
         const response: any = await getAllPosts(5, after);
         const { edges, pageInfo } = response.publication.posts;

         setBlogs(edges);
         setEndCursor(pageInfo.endCursor);
         setHasNextPage(pageInfo.hasNextPage);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchBlogs();
   }, []);

   const handleNextPage = () => {
      fetchBlogs(endCursor);
      setCurrentPage((prevPage) => prevPage + 1);
   };

   const handlePreviousPage = () => {
      if (currentPage > 1) {
         fetchBlogs();
         setCurrentPage(1);
      }
   };

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
            type="newsletter"
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
         <div className="flex justify-between mt-6">
            <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
               Previous
            </Button>
            <Button
               className={`
               ${!hasNextPage ? "cursor-not-allowed" : "cursor-pointer"}
              
               
            `}
               disabled={!hasNextPage}
               onClick={handleNextPage}
            >
               Next
            </Button>
         </div>
         {!hasNextPage && (
            <p className="text-center mt-12 text-gray-500">
               🎉 You've reached the end! No more blogs to show for now. Stay
               tuned for more amazing content! 🚀
            </p>
         )}
      </Layout>
   );
};

export default BlogsPage;
