import { projects } from "@/constants";
import { Link } from "react-router-dom";
import Posts from "./posts";
import { Button } from "../ui/button";

const PostSection = () => {
	return (
		<section className="w-full mt-12">
			<div className="flex items-center text-[18px] max-sm:text-[16px] gap-2  justify-between flex-wrap">
				<h1 className="">Latest Projects</h1>
				<Link to="/projects">
					<Button variant={"secondary"}>See All Projects</Button>
				</Link>
			</div>
			<div>
				{projects
					.slice(-2)
					.reverse()
					.map((project) => (
						<Link to={`projects/${project.slug}`} key={project.id}>
							<Posts key={project.id} slug={project.slug} description={project.description} />
						</Link>
					))}
			</div>
		</section>
	);
};

export default PostSection;
