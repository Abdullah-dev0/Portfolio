import Loader from "@/components/shared/Loader";
import Model from "@/components/shared/Model";
import Posts from "@/components/shared/Posts";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/gql";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fetcher = async (p0: string, limit: number, after = null) => {
	const response: any = await getAllPosts(limit, after);
	return response.publication.posts;
};

const BlogsPage = () => {
	const [show, setShow] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [cursors, setCursors] = useState<any[]>([""]);

	const limit = 5;

	// SWR hook to fetch blogs based on current endCursor
	const { data, error, isLoading } = useSWR(
		["posts", limit, cursors[currentPage - 1]],
		([, limit, after]) => fetcher("posts", limit, after),
		{ revalidateOnFocus: false, revalidateIfStale: false },
	);

	// Extract relevant data from the SWR response
	const blogs = data?.edges || [];
	const endCursor = data?.pageInfo?.endCursor;
	const hasNextPage = data?.pageInfo?.hasNextPage;

	// Handle page navigation
	const handlePage = (page: string) => {
		if (page === "next" && hasNextPage) {
			setCurrentPage((prevPage) => prevPage + 1);
			if (!cursors.includes(endCursor)) {
				setCursors([...cursors, endCursor]);
			}
		} else if (page === "pre" && currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	useEffect(() => {
		const hasVisitedBefore = localStorage.getItem("email");

		window.onbeforeunload = () => {
			localStorage.removeItem("email");
		};

		if (!hasVisitedBefore) {
			setTimeout(() => {
				setShow(true);
				localStorage.setItem("email", "true");
			}, 2000);
		}
	}, []);

	return (
		<>
			<Model
				title="Subscribe to our newsletter"
				type="newsletter"
				show={show}
				handle={() => {
					setShow(false);
				}}
				description="Get the latest news and updates on our products"
			/>
			<h1 className="text-4xl font-bold">Blogs</h1>
			{isLoading ? (
				<Loader />
			) : error ? (
				<div>Error loading posts</div>
			) : (
				<div className="flex flex-col mt-8">
					{blogs.map((blog: any) => (
						<Link key={blog.node?.id} to={`${blog.node?.slug}`}>
							<Posts key={blog.node?.id} slug={blog.node.title} description={blog.node.brief} />
						</Link>
					))}
				</div>
			)}
			<div className="flex justify-between mt-6">
				<Button disabled={currentPage === 1} onClick={() => handlePage("pre")}>
					Previous
				</Button>
				<Button
					className={`${!hasNextPage ? "cursor-not-allowed" : "cursor-pointer"}`}
					disabled={!hasNextPage}
					onClick={() => handlePage("next")}>
					Next
				</Button>
			</div>
			{!hasNextPage && (
				<p className="text-center mt-10 text-gray-500">
					🎉 You've reached the end! No more blogs to show for now. Stay tuned for more amazing content! 🚀
				</p>
			)}
		</>
	);
};

export default BlogsPage;
