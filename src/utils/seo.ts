// Sitemap generation utility
interface SitemapEntry {
	url: string;
	lastmod?: string;
	changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
	priority?: number;
}

export const generateSitemap = (baseUrl: string): string => {
	const pages: SitemapEntry[] = [
		{
			url: "",
			lastmod: new Date().toISOString().split("T")[0],
			changefreq: "weekly",
			priority: 1.0,
		},
		{
			url: "/about",
			lastmod: new Date().toISOString().split("T")[0],
			changefreq: "monthly",
			priority: 0.8,
		},
		{
			url: "/projects",
			lastmod: new Date().toISOString().split("T")[0],
			changefreq: "weekly",
			priority: 0.9,
		},
		{
			url: "/blogs",
			lastmod: new Date().toISOString().split("T")[0],
			changefreq: "weekly",
			priority: 0.9,
		},
		{
			url: "/contact",
			lastmod: new Date().toISOString().split("T")[0],
			changefreq: "monthly",
			priority: 0.7,
		},
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>`;

	return sitemap;
};

export const generateRobotsTxt = (baseUrl: string): string => {
	return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Disallow crawling of API endpoints
Disallow: /api/

# Disallow crawling of admin areas
Disallow: /admin/

# Allow crawling of important pages
Allow: /
Allow: /about
Allow: /projects
Allow: /blogs
Allow: /contact`;
};
