import { getAllPosts } from "@/lib/api";
import { LoaderCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { Button } from "../ui/button";
import Loader from "./loader";
import Posts from "./posts";
import { contextBlogPost, useBlog } from "@/context/blog";

// Fetcher function for SWR

const BlogSection = () => {
	// Use SWR for fetching and caching posts
	const { setBlogs } = useBlog();
	const { data, error, isLoading } = useSWR("posts", getAllPosts, {
		revalidateOnFocus: false,
		revalidateIfStale: false,
		refreshInterval: 0,
		errorRetryCount: 0,
	});

	if (error) {
		return <div>Error loading posts</div>;
	}

	if (!data) {
		return <Loader />;
	}

	setBlogs(data as contextBlogPost[]);

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
					data.map((post: any) => (
						<Link to={`blogs/${post.slug}`} key={post.id}>
							<Posts key={post.id} slug={post.title} description={post.description} />
						</Link>
					))
				)}
			</div>
		</section>
	);
};

export default BlogSection;
