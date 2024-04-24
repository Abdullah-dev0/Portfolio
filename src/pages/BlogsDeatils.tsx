import { Button } from "@/components/ui/button";
import { posts } from "@/constants";
import Layout from "@/layouts/Layout";
import { Link, useParams } from "react-router-dom";
type Params = {
   slug: string;
};

const BlogsDeatils = () => {
   const params = useParams();
   const { slug } = params as Params;

   const FilterPost = posts.filter((post) => post.slug === slug);
   
   return (
      <Layout>
         {FilterPost.map((post) => (
            <div
               key={post.id}
               data-aos="zoom-in-up"
               data-aos-offset="200"
               data-aos-delay="100"
               data-aos-duration="800"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
            >
               <Link to="/blogs">
                  <Button variant={"outline"} className="text-lg">
                     Back to Blogs
                  </Button>
               </Link>
               <div className="mt-12">
                  <p>{post.date}</p>
                  <h1 className="max-sm:text-xl text-3xl font-bold mt-3">
                     {post.slug}
                  </h1>
                  <p className="mt-3 text-lg">{post.description}</p>
               </div>
            </div>
         ))}
         <div></div>
      </Layout>
   );
};

export default BlogsDeatils;
