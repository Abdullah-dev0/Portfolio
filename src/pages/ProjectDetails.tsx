import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import { Link, useParams } from "react-router-dom";
type Params = {
	slug: string;
};

const BlogsDeatils = () => {
	const params = useParams();
	const { slug } = params as Params;

	const filterProject = projects.filter((post) => post.slug === slug);

	return (
		<>
			{filterProject.map((project) => (
				<div key={project.id}>
					<Link to="/projects">
						<Button variant={"outline"} className="text-lg">
							Back to Projects
						</Button>
					</Link>
					<div className="mt-12 space-y-8 max-md:px-5">
						<h1 className="max-sm:text-xl text-3xl font-bold mt-3">{project.slug}</h1>
						<div className="flex gap-4 max-sm:flex-col  sm:items-center text-xl">
							<Link to={project.githubUrl} target="_blank" className="underline">
								<Button>Github link</Button>
							</Link>

							{project.liveLink && (
								<Link to={project.liveLink} target="_blank" className="underline">
									<Button>Live link</Button>
								</Link>
							)}
						</div>

						{project.img && <img src={project.img} className="w-full h-full" alt="Img" />}

						<p className="mt-3 text-lg capitalize">{project.description}</p>
						<div className="space-y-4">
							<h1 className="max-sm:text-2xl text-3xl">🚀 Tech Stack</h1>
							<ul className="flex list-disc flex-wrap gap-5">
								{project.techStack.map((tech) => (
									<button className="z-0 group relative box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 text-small gap-unit-2 [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover border backdrop-blur-2xl dark:bg-zinc-800/30 bg-zinc-900/85 border-neutral-800 rounded-xl flex justify-center items-center text-white p-3 hover:opacity-80">
										{tech}
									</button>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-6 py-6 px-8 max-sm:px-4 rounded-lg">
							<h1 className="text-2xl sm:text-3xl font-bold dark:text-white mb-4">🔋 Features</h1>
							<ul className="flex flex-col gap-4">
								{project.features.map((feature) => (
									<li
										key={feature.id}
										className="text-base dark:text-gray-950 flex items-center dark:bg-white  dark:bg-opacity-70 p-3 bg-gray-700/80 text-white rounded-lg shadow-sm dark:hover:bg-opacity-90 transition duration-300">
										<span className="flex-grow">{feature.description}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default BlogsDeatils;
