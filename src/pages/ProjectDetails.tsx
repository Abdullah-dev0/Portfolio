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
            <div key={project.id}>
               <Link to="/projects">
                  <Button variant={"outline"} className="text-lg">
                     Back to Projects
                  </Button>
               </Link>
               <div className="mt-12 space-y-8 max-md:px-5">
                  <h1 className="max-sm:text-xl text-3xl font-bold mt-3">
                     {project.slug}
                  </h1>
                  <div className="flex gap-2 items-center text-xl">
                     <Link
                        to={project.githubUrl}
                        target="_blank"
                        className="underline"
                     >
                        Github link
                     </Link>
                     <div className="h-5 bg-slate-100 w-[2px] rotate-12"></div>
                     <Link
                        to={project.liveLink}
                        target="_blank"
                        className="underline"
                     >
                        Live link
                     </Link>
                  </div>

                  <img src={project.img} className="w-full h-full" alt="Img" />

                  <p className="mt-3 text-lg capitalize">
                     {project.description}
                  </p>
                  <div className="space-y-2">
                     <h1 className="text-lg sm:text-2xl">🚀 Tech Stack</h1>
                     <ul className="flex list-disc flex-wrap gap-5">
                        {project.techStack.map((tech) => (
                           <li key={tech} className="mx-2 text-lg">
                              {tech}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="space-y-4">
                     <h1 className="text-lg sm:text-2xl">🔋 Features</h1>
                     <ul className="flex list-disc flex-col gap-5">
                        {project.features.map((feature) => (
                           <li key={feature.id} className="text-base">
                              {feature.description}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         ))}
      </Layout>
   );
};

export default BlogsDeatils;
