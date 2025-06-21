import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star } from "lucide-react";

type Params = {
	slug: string;
};

const ProjectDetails = () => {
	const navigate = useNavigate();
	const params = useParams();
	const { slug } = params as Params;

	const project = projects.find((project) => project.slug === slug);

	if (!project) {
		return (
			<div className="section-spacing">
				<div className="container-custom max-w-4xl text-center">
					<h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
					<p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
					<Button onClick={() => navigate("/projects")}>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Projects
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="section-spacing">
			<div className="container-custom max-w-6xl">
				<div className="content-spacing">
					{/* Navigation */}
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 fade-in">
						<Button
							variant="outline"
							onClick={() => navigate("/projects")}
							className="group"
						>
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to Projects
						</Button>
						
						<div className="flex gap-3">
							<Link to={project.githubUrl} target="_blank">
								<Button variant="outline" className="group">
									<Github className="mr-2 h-4 w-4" />
									Source Code
									<ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							{project.liveLink && (
								<Link to={project.liveLink} target="_blank">
									<Button className="group">
										Live Demo
										<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
							)}
						</div>
					</div>

					{/* Project Header */}
					<div className="text-center space-y-6 slide-up">
						<h1 className="text-4xl md:text-5xl font-bold">{project.slug}</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							{project.description}
						</p>
					</div>

					{/* Project Image */}
					{project.img && (
						<div className="relative overflow-hidden rounded-2xl shadow-2xl scale-in">
							<img 
								src={project.img} 
								alt={`${project.slug} preview`}
								className="w-full h-auto object-cover"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
						</div>
					)}

					{/* Project Stats */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 slide-up">
						<div className="text-center card-spacing card-subtle">
							<Star className="h-6 w-6 text-primary mx-auto mb-2" />
							<div className="text-2xl font-bold">Featured</div>
							<div className="text-sm text-muted-foreground">Project</div>
						</div>
						<div className="text-center card-spacing card-subtle">
							<Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
							<div className="text-2xl font-bold">2024</div>
							<div className="text-sm text-muted-foreground">Year</div>
						</div>
						<div className="text-center card-spacing card-subtle">
							<Users className="h-6 w-6 text-primary mx-auto mb-2" />
							<div className="text-2xl font-bold">Solo</div>
							<div className="text-sm text-muted-foreground">Developer</div>
						</div>
						<div className="text-center card-spacing card-subtle">
							<Github className="h-6 w-6 text-primary mx-auto mb-2" />
							<div className="text-2xl font-bold">Open</div>
							<div className="text-sm text-muted-foreground">Source</div>
						</div>
					</div>

					{/* Tech Stack */}
					<div className="space-y-6 slide-up">
						<h2 className="text-section-title text-center">🚀 Technology Stack</h2>
						<div className="flex flex-wrap justify-center gap-3">
							{project.techStack.map((tech, index) => (
								<div 
									key={tech}
									className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors duration-200 scale-in"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									{tech}
								</div>
							))}
						</div>
					</div>

					{/* Features */}
					<div className="space-y-8 slide-up">
						<h2 className="text-section-title text-center">✨ Key Features</h2>
						<div className="grid gap-6 md:grid-cols-2">
							{project.features.map((feature, index) => (
								<div 
									key={feature.id}
									className="card-padding card-subtle card-hover scale-in"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="flex items-start gap-4">
										<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
											<span className="text-primary font-semibold text-sm">{index + 1}</span>
										</div>
										<p className="text-sm leading-relaxed">{feature.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Call to Action */}
					<div className="text-center space-y-6 card-padding card-subtle slide-up">
						<h3 className="text-2xl font-semibold">Interested in this project?</h3>
						<p className="text-muted-foreground">
							Check out the source code or see it in action
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link to={project.githubUrl} target="_blank">
								<Button variant="outline" size="lg" className="group">
									<Github className="mr-2 h-5 w-5" />
									View Source Code
									<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							{project.liveLink && (
								<Link to={project.liveLink} target="_blank">
									<Button size="lg" className="group">
										Try Live Demo
										<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Button>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;