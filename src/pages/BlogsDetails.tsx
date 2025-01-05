import { Button } from "@/components/ui/button";
import { contextBlogPost, useBlog } from "@/context/blog";
import { convertTimestampToReadableDate } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const blogDetails = () => {
	const navigate = useNavigate();
	const params = useParams();
	const { blogs } = useBlog();

	const blog = blogs.find((blog) => blog.slug === params.slug) as contextBlogPost;

	return (
		<>
			<div key={blog?.id}>
				<div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-start">
					<Button
						variant={"outline"}
						onClick={() => {
							navigate(-1);
						}}
						className="text-lg">
						Back to blog
					</Button>
					<Link to={blog.url} target="_blank">
						<Button className="text-lg">Go to Blog</Button>
					</Link>
				</div>
				<div className="mt-12 flex flex-col gap-6">
					<div className="font-medium">
						<p>
							<span>Published At : </span>
							{convertTimestampToReadableDate(blog.published_timestamp)}
						</p>
					</div>
					<div className="w-full">
						{blog.cover_image ? (
							<img src={blog.cover_image} alt="Blog Image" />
						) : (
							<span className="flex justify-center items-center h-[300px] w-full bg-gray-200 dark:bg-gray-800 gap-5">
								No image Found <ImageIcon />
							</span>
						)}
					</div>

					<h1 className="max-sm:text-xl text-3xl font-bold mt-3">{blog.title}</h1>
					<div className="prose dark:prose-invert lg:prose-lg ">
						<ReactMarkdown>{blog.body_markdown}</ReactMarkdown>
					</div>
				</div>
			</div>
		</>
	);
};

export default blogDetails;
