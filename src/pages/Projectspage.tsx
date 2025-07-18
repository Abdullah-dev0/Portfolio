import SEOHead from "@/components/seo/SEOHead";
import Posts from "@/components/shared/posts";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
	const [currentPage, setCurrentPage] = React.useState(1);
	const projectsPerPage = 6;

	// Create a new reversed array without mutating the original
	const reversedProjects = [...projects].reverse();
	const displayedProjects = reversedProjects.slice(0, currentPage * projectsPerPage);
	const hasMore = currentPage * projectsPerPage < projects.length;
	const projectsPageStructuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Projects by Abdullah",
		description: "A collection of projects showcasing my development skills and creativity",
		url: "https://abdullahtech.me/projects",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: projects.map((project, index) => ({
				"@type": "SoftwareApplication",
				position: index + 1,
				name: project.slug,
				description: project.description,
				url: `https://abdullahtech.me/projects/${project.slug}`,
				applicationCategory: "WebApplication",
				operatingSystem: "Web Browser",
			})),
		},
	};

	return (
		<>
			<SEOHead
				title="Projects | Abdullah - Full Stack Developer"
				description="Explore my portfolio of web development projects. A collection showcasing React, Node.js, TypeScript applications and creative solutions to real-world problems."
				keywords={[
					"Abdullah Projects",
					"Web Development Projects",
					"React Projects",
					"Node.js Projects",
					"Full Stack Projects",
					"TypeScript Projects",
					"Portfolio",
					"Software Development",
				]}
				url="/projects"
				type="website"
				structuredData={projectsPageStructuredData}
			/>
			<div className="space-y-12">
				{/* Header */}
				<div className="text-center space-y-4 fade-in">
					<h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						A collection of projects showcasing my development skills and creativity
					</p>
				</div>

				{/* Projects Grid */}
				<div className="space-y-8">
					{displayedProjects.map((project, index) => (
						<div key={project.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
							<Link to={`${project.slug}`}>
								<Posts slug={project.slug} description={project.description} />
							</Link>
						</div>
					))}
				</div>

				{/* Load More / End Message */}
				<div className="text-center">
					{hasMore ? (
						<Button onClick={() => setCurrentPage((prev) => prev + 1)} variant="outline" size="lg" className="group">
							Load More Projects
						</Button>
					) : (
						<div className="space-y-4">
							<p className="text-muted-foreground">🎉 You've seen all my projects!</p>
							<p className="text-sm text-muted-foreground">Stay tuned for more amazing projects coming soon! 🚀</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
