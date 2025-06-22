import { seoConfig } from "@/config/seo";

/**
 * Generate canonical URL for a given path
 */
export const generateCanonicalUrl = (path: string): string => {
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	return `${seoConfig.baseUrl}${cleanPath}`;
};

/**
 * Generate Open Graph image URL
 */
export const generateOGImageUrl = (imagePath?: string): string => {
	const defaultImage = seoConfig.defaultMeta.image;
	const image = imagePath || defaultImage;

	if (image.startsWith("http")) {
		return image;
	}

	return `${seoConfig.baseUrl}${image}`;
};

/**
 * Generate page title with branding
 */
export const generatePageTitle = (title?: string): string => {
	if (!title || title === seoConfig.defaultMeta.title) {
		return seoConfig.defaultMeta.title;
	}

	if (title.includes("Abdullah")) {
		return title;
	}

	return `${title} | Abdullah - Full Stack Developer`;
};

/**
 * Truncate description to optimal length for meta descriptions
 */
export const truncateDescription = (description: string, maxLength: number = 160): string => {
	if (description.length <= maxLength) {
		return description;
	}

	return description.substring(0, maxLength - 3).trim() + "...";
};

/**
 * Generate JSON-LD structured data for articles/blog posts
 */
export const generateArticleStructuredData = (article: {
	title: string;
	description: string;
	url: string;
	image?: string;
	publishedTime: string;
	modifiedTime?: string;
	author?: string;
}) => {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: article.title,
		description: article.description,
		image: generateOGImageUrl(article.image),
		url: generateCanonicalUrl(article.url),
		datePublished: article.publishedTime,
		dateModified: article.modifiedTime || article.publishedTime,
		author: {
			"@type": "Person",
			name: article.author || seoConfig.defaultMeta.author,
			url: seoConfig.baseUrl,
		},
		publisher: {
			"@type": "Person",
			name: seoConfig.defaultMeta.author,
			url: seoConfig.baseUrl,
		},
	};
};

/**
 * Generate JSON-LD structured data for software projects
 */
export const generateSoftwareProjectStructuredData = (project: {
	name: string;
	description: string;
	url: string;
	image?: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}) => {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: project.name,
		description: project.description,
		url: generateCanonicalUrl(project.url),
		image: generateOGImageUrl(project.image),
		applicationCategory: "WebApplication",
		operatingSystem: "Web Browser",
		author: {
			"@type": "Person",
			name: seoConfig.defaultMeta.author,
			url: seoConfig.baseUrl,
		},
		programmingLanguage: project.technologies,
		codeRepository: project.githubUrl,
		downloadUrl: project.liveUrl,
	};
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string; url: string }>) => {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((breadcrumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: breadcrumb.name,
			item: generateCanonicalUrl(breadcrumb.url),
		})),
	};
};

/**
 * Generate FAQ structured data
 */
export const generateFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
};

/**
 * Validate and sanitize meta description
 */
export const sanitizeMetaDescription = (description: string): string => {
	// Remove HTML tags and extra whitespace
	const cleanDescription = description
		.replace(/<[^>]*>/g, "") // Remove HTML tags
		.replace(/\s+/g, " ") // Replace multiple whitespace with single space
		.trim();

	return truncateDescription(cleanDescription);
};

/**
 * Generate keywords array from a string or array
 */
export const generateKeywords = (keywords: string | string[]): string[] => {
	if (Array.isArray(keywords)) {
		return keywords;
	}

	return keywords.split(",").map((keyword) => keyword.trim());
};

/**
 * Check if URL is external
 */
export const isExternalUrl = (url: string): boolean => {
	return url.startsWith("http://") || url.startsWith("https://");
};
