import Posts from "@/components/shared/Posts";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
	const [currentPage, setCurrentPage] = React.useState(1);

	// Create a new reversed array without mutating the original
	const reversedProjects = [...projects].reverse().slice(0, currentPage * 3);

	return (
		<>
			<h1 className="text-4xl font-bold">Projects</h1>
			<div className="flex flex-col mt-8">
				{reversedProjects.map((project) => (
					<Link key={project.id} to={`${project.slug}`}>
						<Posts key={project.id} slug={project.slug} description={project.description} />
					</Link>
				))}

				<div className="text-center">
					{currentPage * 3 > projects.length ? (
						<p className="text-center mt-10 text-gray-500">
							🎉 You've reached the end! No more Projects to show for now. Stay tuned for more amazing Projects! 🚀
						</p>
					) : (
						<Button
							onClick={() => setCurrentPage((prev) => prev + 1)}
							variant="ghost"
							size="lg"
							className="text-md underline mt-2">
							Load more
						</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default ProjectsPage;
