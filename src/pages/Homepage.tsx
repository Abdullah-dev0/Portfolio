import GithubContribution from "@/components/shared/githubContributions";
import BlogSection from "@/components/shared/postSection";
import ProjectSection from "@/components/shared/projectSection";
import Skills from "@/components/shared/skills";

const HomePage = () => {
	return (
		<>
			<div className="flex gap-8 flex-col w-full">
				<h2 className="text-lg">Hi, I'm Abdullah 👋🏻</h2>
				<p className="sm:text-lg">
					I'm a Full stack developer with almost 2 years of experience. I am very passionate about implementing Full
					Stack Application.
				</p>
			</div>
			<div className="mt-16 text-lg  flex flex-col justify-between items-center">
				<BlogSection />
				<Skills />
				<ProjectSection />
				<GithubContribution />
			</div>
		</>
	);
};

export default HomePage;
