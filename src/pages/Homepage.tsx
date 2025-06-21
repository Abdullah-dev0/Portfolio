import GithubContribution from "@/components/shared/githubContributions";
import BlogSection from "@/components/shared/postSection";
import ProjectSection from "@/components/shared/projectSection";
import Skills from "@/components/shared/skills";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="content-spacing">
			{/* Enhanced Hero Section */}
			<section className="section-spacing relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
				<div className="container-custom relative">
					<div className="max-w-5xl mx-auto text-center content-spacing fade-in">
						<div className="space-y-6">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
								<Sparkles className="h-4 w-4" />
								Available for new opportunities
							</div>
							
							<h1 className="text-hero">
								Hi, I'm{" "}
								<span className="text-gradient relative">
									Abdullah
									<div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10"></div>
								</span>
							</h1>
							
							<p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
								Full Stack Developer crafting exceptional digital experiences with modern technologies. 
								Passionate about building scalable applications that make a difference.
							</p>
						</div>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
							<Link to="/projects">
								<Button size="lg" className="group glow-effect">
									<Code className="mr-2 h-5 w-5" />
									View My Work
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							<Button variant="outline" size="lg" className="group">
								<Download className="mr-2 h-4 w-4" />
								Download Resume
							</Button>
						</div>

						{/* Quick Stats */}
						<div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-12">
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">2+</div>
								<div className="text-sm text-muted-foreground">Years Experience</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">15+</div>
								<div className="text-sm text-muted-foreground">Projects Built</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-primary">5+</div>
								<div className="text-sm text-muted-foreground">Technologies</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="section-spacing bg-card/30">
				<div className="container-custom">
					<Skills />
				</div>
			</section>

			{/* Projects Section */}
			<section className="section-spacing">
				<div className="container-custom">
					<ProjectSection />
				</div>
			</section>

			{/* Blog Section */}
			<section className="section-spacing bg-card/30">
				<div className="container-custom">
					<BlogSection />
				</div>
			</section>

			{/* GitHub Contributions */}
			<section className="section-spacing">
				<div className="container-custom">
					<GithubContribution />
				</div>
			</section>
		</div>
	);
};

export default HomePage;