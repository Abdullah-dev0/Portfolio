import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import Layout from "@/Layout";
import { getPosts } from "@/lib/gql";
import { convertTimestampToReadableDate } from "@/lib/utils";
import { Post } from "@/types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
type Params = {
   slug: string;
};

const BlogsDeatils = () => {
   const params = useParams();
   const { slug } = params as Params;
   const [loading, setLoading] = useState(true);
   const [blogs, setBlogs] = useState<Post>({
      id: "",
      url: "",
      title: "",
      publishedAt: "",
      updatedAt: "",
      brief: "",
      coverImage: {
         url: "",
      },
   });

   useEffect(() => {
      const Posts = async () => {
         try {
            const res: any = await getPosts(slug);
            setBlogs(res.publication.post);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      Posts();
   }, [slug]);

   if (loading)
      return (
         <Layout>
            <Loader />
         </Layout>
      );

   return (
      <Layout>
         <div key={blogs?.id}>
            <Link to="/blogs">
               <Button variant={"outline"} className="text-lg">
                  Back to Blogs
               </Button>
            </Link>
            <div className="mt-12 flex flex-col gap-6">
               <div className="font-medium">
                  <p>
                     <span>Published At : </span>
                     {convertTimestampToReadableDate(blogs.publishedAt)}
                  </p>
                  <p>
                     <span>Updated At : </span>
                     {convertTimestampToReadableDate(blogs.updatedAt)}
                  </p>
               </div>

               <div className="w-full">
                  <img src={blogs.coverImage.url} alt="Blog Image" />
               </div>
               <h1 className="max-sm:text-xl text-3xl font-bold mt-3">
                  {blogs.title}
               </h1>
               <p className="text-md">{blogs.brief}</p>
               <Link to={blogs.url} target="_blank">
                  <Button className="text-lg">Read More</Button>
               </Link>
            </div>
         </div>
      </Layout>
   );
};

export default BlogsDeatils;
