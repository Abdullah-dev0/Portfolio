import useSWR from "swr";
import { LoaderCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Posts from "./Posts";
import { getAllPosts } from "@/lib/gql";

// Fetcher function for SWR
const fetcher = async () => {
	const response: any = await getAllPosts();
	return response.publication.posts.edges;
};

const PostSection = () => {
	// Use SWR for fetching and caching posts
	const {
		data: blogs,
		error,
		isLoading,
	} = useSWR("posts", fetcher, {
		revalidateOnFocus: false,
		revalidateIfStale: false,
	});

	if (error) {
		console.log(error);
		return <div>Error loading posts</div>;
	}

	return (
		<section className="w-full">
			<div className="flex items-center  text-[18px] max-sm:text-[16px] gap-2 justify-between flex-wrap">
				<h1 className="">Latest Posts</h1>
				<Link to="/blogs">
					<Button variant={"secondary"}>View All</Button>
				</Link>
			</div>
			<div>
				{isLoading ? (
					<div className="flex justify-center h-[25vh] items-center">
						<LoaderCircleIcon className="animate-spin" />
					</div>
				) : (
					blogs.slice(0, 2).map((post: any) => (
						<Link to={`blogs/${post.node.slug}`} key={post.node.id}>
							<Posts key={post.node.id} slug={post.node.title} description={post.node.brief} />
						</Link>
					))
				)}
			</div>
		</section>
	);
};

export default PostSection;
