import { getAllPosts } from "@/lib/api";
import { ArrowRight, BookOpen } from "lucide-react";
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
				<p className="text-destructive">Error loading articles</p>
			</div>
		);
	}

	if (!data) {
		return <Loader />;
	}

	setBlogs(data);

	return (
		<section className="content-spacing">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 fade-in">
				<div className="space-y-2">
					<div className="inline-flex items-center gap-3 mb-2">
						<BookOpen className="h-6 w-6 text-primary" />
						<h2 className="text-section-title">Latest Articles</h2>
					</div>
					<p className="text-muted-foreground">
						Thoughts and insights on web development and technology
					</p>
				</div>
				<Link to="/blogs">
					<Button variant="outline" className="group">
						View All Articles
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>
			<div className="flex flex-col gap-6 mt-4">
				{isLoading ? (
					<div className="col-span-full flex justify-center py-12">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
					</div>
				) : (
					data.map((post: contextBlogPost) => (
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