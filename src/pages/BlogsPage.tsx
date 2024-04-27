import Loader from "@/components/shared/Loader";
import Posts from "@/components/shared/Posts";
import { useGetAllPosts } from "@/Hooks/useGetPosts";
import Layout from "@/Layout";
import { Link } from "react-router-dom";

const BlogsPage = () => {
   const { blogs, loading } = useGetAllPosts();

   if (loading) return <Loader />;

   return (
      <Layout>
         <h1 className="text-4xl font-bold">Blogs</h1>
         <div className="flex flex-col mt-8">
            {blogs!.map((blog: any) => (
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
