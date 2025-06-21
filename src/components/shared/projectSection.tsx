import { projects } from "@/constants";
import { Link } from "react-router-dom";
import Posts from "./posts";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ProjectSection = () => {
	return (
		<section className="space-y-12">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div className="space-y-2">
					<h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
					<p className="text-muted-foreground">
						Recent work showcasing my development skills
					</p>
				</div>
				<Link to="/projects">
					<Button variant="outline" className="group">
						View All Projects
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>
			
			<div className="grid gap-6 md:grid-cols-2">
				{projects
					.slice(-2)
					.reverse()
					.map((project) => (
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

export default ProjectSection;