import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
	title?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	url?: string;
	type?: "website" | "article" | "profile";
	publishedTime?: string;
	modifiedTime?: string;
	author?: string;
	structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
	title = "Abdullah | Full Stack Developer",
	description = "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable applications with clean code and exceptional user experiences.",
	keywords = [
		"Abdullah",
		"Full Stack Developer",
		"React Developer",
		"Node.js Developer",
		"TypeScript",
		"JavaScript",
		"Web Developer",
		"Frontend Developer",
		"Backend Developer",
		"Portfolio",
		"Software Engineer",
	],
	// Default OG/Twitter image (homepage screenshot)
	image = "/images/portfolio.png",
	url = "https://abdullahtech.me",
	type = "website",
	publishedTime,
	modifiedTime,
	author = "Abdullah",
	structuredData,
}) => {
	const fullTitle = title.includes("Abdullah") ? title : `${title} | Abdullah - Full Stack Developer`;
	const fullUrl = url.startsWith("http") ? url : `https://abdullahtech.me${url}`;
	const fullImageUrl = image.startsWith("http") ? image : `https://abdullahtech.me${image}`;

	const defaultStructuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Abdullah",
		jobTitle: "Full Stack Developer",
		description: description,
		url: fullUrl,
		image: fullImageUrl,
		sameAs: [
			"https://github.com/Abdullah-dev0",
			"https://www.linkedin.com/in/abdullah-devv",
			"https://x.com/Abdul_ah14",
			"https://dev.to/abdullah-dev0",
		],
		knowsAbout: [
			"JavaScript",
			"TypeScript",
			"React",
			"Node.js",
			"Express.js",
			"MongoDB",
			"PostgreSQL",
			"AWS",
			"Docker",
			"Kubernetes",
			"Git",
			"Web Development",
			"Software Engineering",
		],
	};

	return (
		<Helmet>
			{/* Basic Meta Tags */}
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords.join(", ")} />
			<meta name="author" content={author} />
			<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
			<meta name="googlebot" content="index, follow" />

			{/* Canonical URL */}
			<link rel="canonical" href={fullUrl} />

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={fullImageUrl} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content={`${author} - Full Stack Developer`} />
			<meta property="og:url" content={fullUrl} />
			<meta property="og:type" content={type} />
			<meta property="og:site_name" content="Abdullah - Full Stack Developer" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={fullImageUrl} />
			<meta name="twitter:image:alt" content={`${author} - Full Stack Developer`} />
			<meta name="twitter:creator" content="@Abdul_ah14" />
			<meta name="twitter:site" content="@Abdul_ah14" />

			{/* Article specific meta tags */}
			{type === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
			{type === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
			{type === "article" && author && <meta property="article:author" content={author} />}

			{/* Additional SEO Meta Tags */}
			<meta name="theme-color" content="#000000" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="application-name" content="Abdullah Portfolio" />
			<meta name="apple-mobile-web-app-title" content="Abdullah Portfolio" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="mobile-web-app-capable" content="yes" />

			{/* Structured Data */}
			<script type="application/ld+json">{JSON.stringify(structuredData || defaultStructuredData)}</script>
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "Abdullah Portfolio",
					url: "https://abdullahtech.me",
					potentialAction: {
						"@type": "SearchAction",
						target: "https://abdullahtech.me/search?q={search_term_string}",
						queryInput: "required name=search_term_string",
					},
				})}
			</script>
		</Helmet>
	);
};

export default SEOHead;
