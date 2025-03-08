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

	const { data, error, isLoading } = useSWR<BlogPost[]>(
		[`posts-${currentPage}`, currentPage, postsPerPage],
		() => getAllPosts(currentPage, postsPerPage),
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
		},
	);

	useEffect(() => {
		setBlogs(data as contextBlogPost[]);
	}, [data]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		navigate(`/blogs?page=${newPage}`, { replace: true });
	};

	useEffect(() => {
		setCurrentPage(pageFromUrl);
	}, [pageFromUrl]);

	if (isLoading) return <Loader />;
	if (error) return <div>Error loading posts</div>;
	if (!data) return <div>No posts found</div>;

	return (
		<div className="container mx-auto px-4 py-8">
			{data.map((blog: BlogPost) => (
				<Link
					key={blog.id}
					to={`/blogs/${blog.slug}?fromPage=${currentPage}`}
					className="transition-transform hover:scale-105">
					<Posts key={blog.id} slug={blog.slug} description={blog.description} />
				</Link>
			))}
			{data.length < postsPerPage && (
				<p className="text-center mt-10 text-gray-500">
					🎉 You've reached the end! No more blogs to show for now. Stay tuned for more amazing Blogs! 🚀
				</p>
			)}

			<div className="flex justify-between items-center mx-5 mt-8">
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
