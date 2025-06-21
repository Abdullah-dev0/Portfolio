import { Button } from "@/components/ui/button";
import { contextBlogPost, useBlog } from "@/context/blog";
import { convertTimestampToReadableDate } from "@/lib/utils";
import { ArrowLeft, Calendar, ExternalLink, ImageIcon, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
	const navigate = useNavigate();
	const params = useParams();
	const { blogs } = useBlog();

	const blog = blogs.find((blog) => blog.slug === params.slug) as contextBlogPost;

	if (!blog) {
		return (
			<div className="section-spacing">
				<div className="container-custom max-w-4xl text-center">
					<h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
					<p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
					<Button onClick={() => navigate("/blogs")}>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blogs
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			{/* Navigation */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 fade-in">
				<Button variant="outline" onClick={() => navigate(-1)} className="group">
					<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
					Back to Blogs
				</Button>

				<Link to={blog.url} target="_blank">
					<Button className="group">
						Read Original
						<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>

			{/* Blog Header */}
			<div className="space-y-6 slide-up">
				<div className="space-y-4">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{blog.title}</h1>

					{/* Blog Meta */}
					<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							<span>{convertTimestampToReadableDate(blog.published_timestamp)}</span>
						</div>
						<div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
						<div className="flex items-center gap-2">
							<Clock className="h-4 w-4" />
							<span>5 min read</span>
						</div>
						<div className="w-1 h-1 bg-muted-foreground/50 rounded-full"></div>
						<div className="flex items-center gap-2">
							<User className="h-4 w-4" />
							<span>Abdullah</span>
						</div>
					</div>
				</div>
			</div>

			{/* Blog Cover Image */}
			<div className="relative overflow-hidden rounded-2xl shadow-2xl scale-in">
				{blog.cover_image ? (
					<>
						<img
							src={blog.cover_image}
							alt="Blog Cover"
							className="w-full h-auto max-h-[500px] object-cover"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
					</>
				) : (
					<div className="flex justify-center items-center h-[300px] w-full bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl">
						<div className="text-center space-y-3">
							<ImageIcon className="h-12 w-12 text-muted-foreground mx-auto" />
							<p className="text-muted-foreground">No cover image available</p>
						</div>
					</div>
				)}
			</div>

			{/* Blog Content */}
			<div className="slide-up">
				<div className="backdrop-blur-sm">
					<div className="prose prose-lg dark:prose-invert max-w-none">
						<ReactMarkdown>{blog.body_markdown}</ReactMarkdown>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<div className="text-center space-y-6 backdrop-blur-sm border border-border/50 rounded-2xl p-8 slide-up">
				<h3 className="text-2xl font-semibold">Enjoyed this article?</h3>
				<p className="text-muted-foreground">Read the full article on the original platform</p>
				<Link to={blog.url} target="_blank">
					<Button size="lg" className="group mt-5">
						Read Original Article
						<ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default BlogDetails;
