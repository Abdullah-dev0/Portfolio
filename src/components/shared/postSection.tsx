import { getAllPosts } from "@/lib/api";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { Button } from "../ui/button";
import Loader from "./loader";
import Posts from "./posts";
import { contextBlogPost, useBlog } from "@/context/blog";

const BlogSection = () => {
	const { setBlogs } = useBlog();
	const { data, error, isLoading } = useSWR("posts", getAllPosts, {
		revalidateOnFocus: false,
		revalidateIfStale: false,
		refreshInterval: 0,
		errorRetryCount: 0,
	});

	if (error) {
		return (
			<div className="text-center py-12">
				<p className="text-destructive">Error loading blogs</p>
			</div>
		);
	}

	if (!data) {
		return <Loader />;
	}

	setBlogs(data as contextBlogPost[]);

	return (
		<section className="space-y-12">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
				<div className="space-y-2">
					<h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
					<p className="text-muted-foreground">
						Thoughts and insights on web development
					</p>
				</div>
				<Link to="/blogs">
					<Button variant="outline" className="group">
						View All Articles
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>
			
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{isLoading ? (
					<div className="col-span-full flex justify-center py-12">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
					</div>
				) : (
					data.map((post: any) => (
						<Link to={`blogs/${post.slug}`} key={post.id}>
							<Posts 
								key={post.id} 
								slug={post.title} 
								description={post.description} 
							/>
						</Link>
					))
				)}
			</div>
		</section>
	);
};

export default BlogSection;