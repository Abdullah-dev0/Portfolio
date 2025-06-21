import GithubContribution from "@/components/shared/githubContributions";
import BlogSection from "@/components/shared/postSection";
import ProjectSection from "@/components/shared/projectSection";
import Skills from "@/components/shared/skills";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="space-y-24">
			{/* Hero Section */}
			<section className="section-spacing">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
						<div className="space-y-4">
							<h1 className="text-5xl md:text-7xl font-bold tracking-tight">
								Hi, I'm{" "}
								<span className="text-gradient">Abdullah</span>
							</h1>
							<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
								Full Stack Developer crafting exceptional digital experiences with modern technologies
							</p>
						</div>
						
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link to="/projects">
								<Button size="lg" className="group">
									View My Work
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							<Button variant="outline" size="lg" className="group">
								<Download className="mr-2 h-4 w-4" />
								Download CV
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="section-spacing bg-card/30">
				<div className="container-custom">
					<div className="max-w-3xl mx-auto text-center space-y-6 slide-up">
						<h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
						<p className="text-lg text-muted-foreground leading-relaxed">
							I'm a passionate Full Stack Developer with almost 2 years of experience building 
							modern web applications. I specialize in React, Next.js, and Node.js, creating 
							scalable solutions that deliver exceptional user experiences.
						</p>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="section-spacing">
				<div className="container-custom">
					<Skills />
				</div>
			</section>

			{/* Projects Section */}
			<section className="section-spacing bg-card/30">
				<div className="container-custom">
					<ProjectSection />
				</div>
			</section>

			{/* Blog Section */}
			<section className="section-spacing">
				<div className="container-custom">
					<BlogSection />
				</div>
			</section>

			{/* GitHub Contributions */}
			<section className="section-spacing bg-card/30">
				<div className="container-custom">
					<GithubContribution />
				</div>
			</section>
		</div>
	);
};

export default HomePage;