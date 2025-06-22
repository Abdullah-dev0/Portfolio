// SEO Configuration
export const seoConfig = {
	// Update this with your actual website URL
	baseUrl: "https://abdullahtech.me",

	// Default meta information
	defaultMeta: {
		title: "Abdullah | Full Stack Developer",
		description:
			"Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable applications with clean code and exceptional user experiences.",
		keywords: [
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
		author: "Abdullah",
		twitterHandle: "@your-twitter",
		image: "/images/og-image.jpg",
	},

	// Social media links (update with your actual profiles)
	socialLinks: {
		github: "https://github.com/your-github",
		linkedin: "https://linkedin.com/in/your-linkedin",
		twitter: "https://twitter.com/your-twitter",
		email: "your-email@example.com",
	},

	// JSON-LD structured data templates
	structuredData: {
		person: {
			"@context": "https://schema.org",
			"@type": "Person",
			name: "Abdullah",
			jobTitle: "Full Stack Developer",
			url: "https://abdullahtech.me",
			sameAs: [
				"https://github.com/your-github",
				"https://linkedin.com/in/your-linkedin",
				"https://twitter.com/your-twitter",
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
		},
	},
};

// Page-specific SEO configurations
export const pagesSEO = {
	home: {
		title: "Abdullah | Full Stack Developer",
		description:
			"Full Stack Developer crafting exceptional digital experiences with modern technologies. Passionate about building scalable applications that make a difference.",
		keywords: [
			"Abdullah",
			"Full Stack Developer",
			"React Developer",
			"Node.js Developer",
			"TypeScript",
			"JavaScript",
			"Web Developer",
			"Portfolio",
			"Software Engineer",
		],
	},
	about: {
		title: "About Abdullah | Full Stack Developer",
		description:
			"Learn more about Abdullah - Full Stack Developer passionate about creating exceptional web experiences. I love building interactive and responsive applications using modern technologies.",
		keywords: [
			"About Abdullah",
			"Full Stack Developer",
			"Web Developer",
			"Software Engineer",
			"React Developer",
			"Node.js Developer",
			"Developer Biography",
			"Programming Experience",
		],
	},
	projects: {
		title: "Projects | Abdullah - Full Stack Developer",
		description:
			"Explore my portfolio of web development projects. A collection showcasing React, Node.js, TypeScript applications and creative solutions to real-world problems.",
		keywords: [
			"Abdullah Projects",
			"Web Development Projects",
			"React Projects",
			"Node.js Projects",
			"Full Stack Projects",
			"TypeScript Projects",
			"Portfolio",
			"Software Development",
		],
	},
	blogs: {
		title: "Blogs - Abdullah's Insights",
		description:
			"Dive into my collection of blogs where I share insights, tutorials, and the latest trends in web development, React, Node.js, and more.",
		keywords: [
			"Abdullah Blog",
			"Web Development Blog",
			"React Tutorials",
			"Node.js Articles",
			"Programming Insights",
			"JavaScript Blog",
			"TypeScript Tutorials",
			"Software Engineering",
		],
	},
	contact: {
		title: "Contact Abdullah - Full Stack Developer",
		description:
			"Get in touch with Abdullah - Full Stack Developer. Available for freelance projects, job opportunities, and collaboration.",
		keywords: [
			"Contact Abdullah",
			"Hire Full Stack Developer",
			"Web Developer Contact",
			"Freelance Developer",
			"React Developer Hire",
			"Node.js Developer Contact",
			"Software Engineer Contact",
		],
	},
};
