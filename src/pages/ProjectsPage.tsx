import Posts from "@/components/shared/Posts";
import { projects } from "@/constants";
import Layout from "@/layouts/Layout";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
   return (
      <Layout>
         <h1 className="text-4xl font-bold">Projects</h1>
         <div className="flex flex-col mt-8">
            {projects.map((project) => (
               <Link to={`${project.slug}`}>
                  <Posts
                     key={project.id}
                     slug={project.slug}
                     description={project.description}
                  />
               </Link>
            ))}
         </div>
      </Layout>
   );
};

export default ProjectsPage;
