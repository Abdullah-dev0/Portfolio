import { projects } from "@/constants";
import { Link } from "react-router-dom";
import Posts from "./posts";
import { Button } from "../ui/button";
import { ArrowRight, FolderOpen } from "lucide-react";

const ProjectSection = () => {
	return (
		<section className="content-spacing">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 fade-in">
				<div className="space-y-2">
					<div className="inline-flex items-center gap-3 mb-2">
						<FolderOpen className="h-6 w-6 text-primary" />
						<h2 className="text-section-title">Featured Projects</h2>
					</div>
					<p className="text-muted-foreground">
						Recent work showcasing my development skills and creativity
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
					.map((project, index) => (
						<div key={project.id} className="slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
							<Link to={`projects/${project.slug}`}>
								<Posts 
									slug={project.slug} 
									description={project.description} 
								/>
							</Link>
						</div>
					))}
			</div>
		</section>
	);
};

export default ProjectSection;