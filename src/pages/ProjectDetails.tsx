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
		<div className="space-y-12">
			{/* Navigation */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 fade-in">
				<Button variant="outline" onClick={() => navigate("/projects")} className="group">
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
				<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{project.description}</p>
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
							className="px-4 py-2 border border-slate-300/10 rounded-full text-base font-medium text-primary hover:bg-primary/20 transition-colors duration-200 scale-in"
							style={{ animationDelay: `${index * 0.1}s` }}>
							{tech}
						</div>
					))}
				</div>
			</div>{" "}
			{/* Features */}
			<div className="space-y-8 slide-up">
				<div className="text-center space-y-4">
					<h2 className="text-section-title">✨ Key Features</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Discover the powerful capabilities and innovative solutions that make this project unique
					</p>
				</div>

				<div className="grid gap-6 md:gap-8">
					{project.features.map((feature, index) => (
						<div
							key={feature.id}
							className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 scale-in overflow-hidden"
							style={{ animationDelay: `${index * 0.15}s` }}>
							{/* Decorative elements */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700"></div>
							<div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>

							{/* Main content */}
							<div className="relative">
								<div className="flex items-start gap-5">
									{/* Feature number badge */}
									<div className="relative">
										<div className="w-14 h-14 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/10">
											<span className="text-primary font-bold text-lg group-hover:text-primary/90 transition-colors duration-300">
												{String(index + 1).padStart(2, "0")}
											</span>
										</div>
										{/* Pulse effect */}
										<div className="absolute inset-0 w-14 h-14 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
									</div>

									{/* Feature content */}
									<div className="flex-1 space-y-2">
										{/* Feature header */}
										<div className="space-y-2">
											<div className="flex items-center gap-3">
												<div className="flex items-center gap-2">
													<div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
													<div className="w-1 h-1 bg-primary/60 rounded-full group-hover:scale-125 transition-transform duration-300 delay-75"></div>
													<div className="w-0.5 h-0.5 bg-primary/40 rounded-full group-hover:scale-150 transition-transform duration-300 delay-150"></div>
												</div>
												<span className="text-sm font-semibold text-primary/80 uppercase tracking-wider letter-spacing-wide group-hover:text-primary transition-colors duration-300">
													Feature Highlight
												</span>
											</div>
										</div>

										{/* Feature description */}
										<div className="space-y-3">
											<p className="text-foreground/90 leading-relaxed text-base md:text-lg font-medium group-hover:text-foreground transition-colors duration-300">
												{feature.description}
											</p>
										</div>

										{/* Progress indicator */}
										<div className="flex items-center gap-2 pt-2">
											<div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
												<div
													className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transform origin-left transition-all duration-1000 group-hover:scale-x-100 scale-x-0"
													style={{ transitionDelay: `${index * 100 + 200}ms` }}></div>
											</div>
											<span className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
												{index + 1} of {project.features.length}
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Hover glow effect */}
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>
					))}
				</div>
			</div>
			{/* Call to Action */}
			<div className="text-center space-y-6 card-padding card-subtle slide-up border p-12 rounded-2xl">
				<h3 className="text-2xl font-semibold">Interested in this project?</h3>
				<p className="text-muted-foreground">Check out the source code or see it in action</p>
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
	);
};

export default ProjectDetails;
