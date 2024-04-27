import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import Layout from "@/Layout";
import { Link, useParams } from "react-router-dom";
type Params = {
   slug: string;
};

const BlogsDeatils = () => {
   const params = useParams();
   const { slug } = params as Params;

   const filterProject = projects.filter((post) => post.slug === slug);

   return (
      <Layout>
         {filterProject.map((project) => (
            <div
               key={project.id}
               data-aos="zoom-in-up"
               data-aos-offset="200"
               data-aos-delay="100"
               data-aos-duration="800"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
            >
               <Link to="/projects">
                  <Button variant={"outline"} className="text-lg">
                     Back to Projects
                  </Button>
               </Link>
               <div className="mt-12 space-y-8">
                  <h1 className="max-sm:text-xl text-3xl font-bold mt-3">
                     {project.slug}
                  </h1>
                  <div className="flex gap-2 items-center text-[17px]">
                     <Link
                        to={project.githubUrl}
                        target="_blank"
                        className="underline"
                     >
                        Github link
                     </Link>
                     <div className="h-5 bg-slate-100 w-[2px] rotate-12"></div>
                     <p>Live link</p>
                  </div>

                  <img
                     src={project.img}
                     height={80}
                     className="h-[300px] w-full"
                     alt="Img"
                  />

                  <p className="mt-3 text-lg">{project.description}</p>
                  <div className="space-y-4">
                     <h1 className="text-2xl">features</h1>
                     {project.features.map((feature) => (
                        <li key={feature.id}>{feature.description}</li>
                     ))}
                  </div>
               </div>
            </div>
         ))}
         <div></div>
      </Layout>
   );
};

export default BlogsDeatils;
