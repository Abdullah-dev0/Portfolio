import { projects } from "@/constants";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const PostSection = () => {
   return (
      <section className="w-full mt-12">
         <div className="flex text-[18px] max-sm:text-[15px] justify-between flex-wrap">
            <h1 className="">Latest Projects</h1>
            <Link to="/projects" className="underline">
               See all Projects
            </Link>
         </div>
         <div>
            {projects.slice(0, 2).map((project) => (
               <Link to={`projects/${project.slug}`} key={project.id}>
                  <Posts
                     key={project.id}
                     slug={project.slug}
                     description={project.description}
                  />
               </Link>
            ))}
         </div>
      </section>
   );
};

export default PostSection;
