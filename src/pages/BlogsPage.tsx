import Loader from "@/components/shared/Loader";
import Model from "@/components/shared/Model";
import Posts from "@/components/shared/Posts";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/gql";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsPage = () => {
	const [show, setShow] = useState<boolean>(false);
	const [blogs, setBlogs] = useState<[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [endCursor, setEndCursor] = useState<any>("");
	const [hasNextPage, setHasNextPage] = useState<boolean>(false);
	const [cursors, setCursors] = useState<any[]>([""]);

	const fetchBlogs = async (after = null) => {
		setLoading(true);
		try {
			const response: any = await getAllPosts(5, after);
			const { edges, pageInfo } = response.publication.posts;
			setBlogs(edges);
			setEndCursor(pageInfo.endCursor);
			setHasNextPage(pageInfo.hasNextPage);
			if (after && !cursors.includes(after)) {
				setCursors([...cursors, after]);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	const handlePage = (page: string) => {
		if (page === "next") {
			fetchBlogs(endCursor);
			setCurrentPage((prevPage) => prevPage + 1);
		} else if (page === "pre" && currentPage > 1) {
			const previousCursor = cursors[currentPage - 2];
			fetchBlogs(previousCursor);
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
			{loading ? (
				<Loader />
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
					className={`
               ${!hasNextPage ? "cursor-not-allowed" : "cursor-pointer"}
            `}
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
