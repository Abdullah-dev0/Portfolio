import SEOHead from "@/components/seo/SEOHead";
import Loader from "@/components/shared/loader";
import Posts from "@/components/shared/posts";
import { contextBlogPost, useBlog } from "@/context/blog";
import { getAllPosts } from "@/lib/api";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";

interface BlogPost {
	id: number;
	title: string;
	description: string;
	slug: string;
	url?: string;
	cover_image?: string;
}

const BlogsPage = () => {
	const { setBlogs } = useBlog();
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const pageFromUrl = parseInt(queryParams.get("page") || "1");

	const [currentPage, setCurrentPage] = useState(pageFromUrl);
	const postsPerPage = 3;

	const { data, error, isLoading } = useSWR<contextBlogPost[]>(
		[`posts-${currentPage}`, currentPage, postsPerPage],
		() => getAllPosts(currentPage, postsPerPage),
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		},
	);

	useEffect(() => {
		if (!data) return;
		setBlogs(data);
	}, [data, setBlogs]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		navigate(`/blogs?page=${newPage}`, { replace: true });
	};

	useEffect(() => {
		setCurrentPage(pageFromUrl);
	}, [pageFromUrl]);

	if (isLoading) return <Loader />;
	if (error) {
		return (
			<div className="text-red-500 flex items-center justify-center h-[60vh] text-xl py-5">Error loading Blogs</div>
		);
	}
	if (!data) return <div>No Blogs found</div>;
	// Generate structured data for blog posts
	const blogsPageStructuredData = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Abdullah's Blog",
		description:
			"Insights and tutorials on web development, React, Node.js, and modern programming practices by Abdullah",
		url: "https://abdullahtech.me/blogs",
		author: {
			"@type": "Person",
			name: "Abdullah",
		},
		blogPost:
			data?.map((post) => ({
				"@type": "BlogPosting",
				headline: post.title,
				description: post.description,
				url: `https://abdullahtech.me/blogs/${post.slug}`,
				author: {
					"@type": "Person",
					name: "Abdullah",
				},
				datePublished: post.published_timestamp,
				image: post.cover_image,
			})) || [],
	};

	return (
		<div className="container mx-auto px-4 py-8 space-y-7">
			<SEOHead
				title="Blogs - Abdullah's Insights"
				description="Dive into my collection of blogs where I share insights, tutorials, and the latest trends in web development, React, Node.js, and more."
				keywords={[
					"Abdullah Blog",
					"Web Development Blog",
					"React Tutorials",
					"Node.js Articles",
					"Programming Insights",
					"JavaScript Blog",
					"TypeScript Tutorials",
					"Software Engineering",
				]}
				url={`/blogs?page=${currentPage}`}
				type="website"
				structuredData={blogsPageStructuredData}
			/>
			<div className="flex flex-col gap-6">
				{data.map((blog: BlogPost) => (
					<Link
						key={blog.id}
						to={`/blogs/${blog.slug}?fromPage=${currentPage}`}
						className="transition-transform hover:scale-105">
						<Posts key={blog.id} slug={blog.title} description={blog.description} />
					</Link>
				))}
			</div>
			{data.length < postsPerPage && (
				<p className="text-center mt-10 text-gray-500">
					🎉 You've reached the end! No more blogs to show for now. Stay tuned for more amazing Blogs! 🚀
				</p>
			)}

			<div className="flex justify-between items-center mx-5 mt-auto">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 rounded bg-primary text-white disabled:opacity-50 hover:bg-primary/90">
					Previous
				</button>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={data.length < postsPerPage}
					className="px-4 py-2 rounded bg-primary text-white disabled:opacity-50 hover:bg-primary/90">
					Next
				</button>
			</div>
		</div>
	);
};

export default BlogsPage;
