import { createContext, ReactNode, useContext, useState } from "react";

export interface contextBlogPost {
	id: number;
	title: string;
	description: string;
	published_timestamp: string;
	slug: string;
	url: string;
	cover_image: string;
	body_markdown: string;
}

interface BlogContextType {
	blogs: contextBlogPost[] | [];
	setBlogs: (blogs: contextBlogPost[]) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
	const [blogs, setBlogs] = useState<contextBlogPost[]>([]);

	const value = {
		blogs,
		setBlogs,
	};

	return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export function useBlog() {
	const context = useContext(BlogContext);
	if (!context) {
		throw new Error("useBlog must be used within BlogProvider");
	}
	return context;
}
