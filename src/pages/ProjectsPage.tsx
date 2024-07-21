import Posts from "@/components/shared/Posts";
import { projects } from "@/constants";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
	return (
		<>
			<h1 className="text-4xl font-bold">Projects</h1>
			<div className="flex flex-col mt-8">
				{projects.reverse().map((project) => (
					<Link key={project.id} to={`${project.slug}`}>
						<Posts key={project.id} slug={project.slug} description={project.description} />
					</Link>
				))}
			</div>
		</>
	);
};

export default ProjectsPage;
