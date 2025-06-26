import GithubContribution from "@/components/shared/githubContributions";
import BlogSection from "@/components/shared/blogSection";
import ProjectSection from "@/components/shared/projectSection";
import Skills from "@/components/shared/skills";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
	const handleDownloadResume = () => {
		const resumeUrl = "/Abdullah.pdf";
		const link = document.createElement("a");
		link.href = resumeUrl;
		link.download = "Abdullah_Resume.pdf"; // You can specify the downloaded file name
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const homePageStructuredData = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: {
			"@type": "Person",
			name: "Abdullah",
			jobTitle: "Full Stack Developer",
			description:
				"Full Stack Developer crafting exceptional digital experiences with modern technologies. Passionate about building scalable applications that make a difference.",
			url: "https://abdullahtech.me",
			image: "https://abdullahtech.me/images/abdullah-profile.jpg",
			knowsAbout: [
				"JavaScript",
				"TypeScript",
				"React",
				"Node.js",
				"Express.js",
				"MongoDB",
				"PostgreSQL",
				"AWS",
				"Docker",
				"Git",
			],
			hasOccupation: {
				"@type": "Occupation",
				name: "Full Stack Developer",
			},
		},
	};

	return (
		<>
			<SEOHead
				title="Abdullah | Full Stack Developer"
				description="Full Stack Developer crafting exceptional digital experiences with modern technologies. Passionate about building scalable applications that make a difference."
				keywords={[
					"Abdullah",
					"Full Stack Developer",
					"React Developer",
					"Node.js Developer",
					"TypeScript",
					"JavaScript",
					"Web Developer",
					"Portfolio",
					"Software Engineer",
				]}
				url="/"
				type="profile"
				structuredData={homePageStructuredData}
			/>

			<div className="relative">
				<div className="space-y-6 text-center">
					<div className="inline-flex items-center animate-pulse gap-2 px-4 py-2 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
						<Sparkles className="h-4 w-4 text-green-600" />
						Available for new opportunities
					</div>

					<h1 className="text-hero">
						Hi, I'm{" "}
						<span className="text-gradient relative">
							Abdullah
							<div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10"></div>
						</span>
					</h1>

					<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						Full Stack Developer crafting exceptional digital experiences with modern technologies. Passionate about
						building scalable applications that make a difference.
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
					<Button onClick={handleDownloadResume} variant="outline" size="lg" className="group">
						<Download className="mr-2 h-4 w-4" />
						Download Resume
					</Button>
				</div>

				{/* Quick Stats */}
				<div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-12">
					<div className="text-center">
						<div className="text-2xl font-bold">2+</div>
						<div className="text-sm text-muted-foreground">Years Experience</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold ">15+</div>
						<div className="text-sm text-muted-foreground">Projects Built</div>
					</div>
					<div className="text-center">
						<div className="text-2xl font-bold">5+</div>
						<div className="text-sm text-muted-foreground">Technologies</div>
					</div>
				</div>
			</div>
			<div className="mt-16 text-lg  flex flex-col justify-between items-center gap-8">
				<BlogSection />
				<Skills />
				<ProjectSection />
				<GithubContribution />
			</div>
		</>
	);
};

export default HomePage;
