export const navLinks = [
	{
		id: "0",
		name: "About",
		path: "/about",
	},
	{
		id: "1",
		name: "Blogs",
		path: "/blogs",
	},
	{
		id: "2",
		name: "Projects",
		path: "/projects",
	},
	{
		id: "3",
		name: "Contact",
		path: "/contact",
	},
];

export const projects = [
	{
		id: "1",
		slug: "JusTalk",
		description:
			"enterprise-ready video conferencing app in hours using Next.js 14, Shad cn , Stream, and Tailwind CSS.",
		techStack: ["next.js", "TypeScript", "Tailwind CSS", "Clerk", "getstream"],
		githubUrl: "https://github.com/Abdullah-dev0/JusTalk",
		liveLink: "https://jus-talk.vercel.app",
		img: "/images/justalk.png",
		features: [
			{
				id: "1",

				description:
					" Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.",
			},
			{
				id: "2",

				description: "Quickly start a new meeting, configuring camera and microphone settings before joining.",
			},
			{
				id: "3",

				description:
					"Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share)",
			},
			{
				id: "4",

				description: "Participants can leave a meeting, or creators can end it for all attendees.",
			},
			{
				id: "5",
				description:
					"Input meeting details (date, time) to schedule future meetings, accessible on the Upcoming Meetings page for sharing the link or immediate start.",
			},
			{
				id: "6",
				description: "Access a list of previously held meetings, including details and metadata.",
			},
			{
				id: "7",
				description: "Access recordings of past meetings for review or reference..",
			},
			{
				id: "8",
				description:
					" Users have a personal room with a unique meeting link for instant meetings, shareable with others.",
			},
		],
	},
	{
		id: "2",
		slug: "NowTalk",
		description:
			" built a robust real-time chat application utilizing Supabase's comprehensive functionalities. This platform empowers real-time communication, enabling seamless interaction and fostering dynamic online communities.",
		techStack: ["React", "Tailwind CSS", "supabase", "shadcn", "next.js", "typescript"],

		githubUrl: "https://github.com/Abdullah-dev0/NowTalk",
		liveLink: "https://now-talk-omega.vercel.app",
		img: "/images/nowtalk.png",
		features: [
			{
				id: "1",
				description:
					"The core aspect of a real-time chat app is the ability for users to see messages instantly as they're sent and receive instant notifications.",
			},
			{
				id: "2",
				description:
					"A well-designed interface is crucial for a chat app, allowing users to easily navigate between chat rooms, manage their profiles, and access features intuitively.",
			},
			{
				id: "3",
				description:
					"Implementing robust security measures like encryption and user authentication is essential to protect user data and ensure a safe chat environment.",
			},
		],
	},
	{
		id: "3",
		slug: "Effortless-Events",
		description:
			"Build an event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk, and Stripe.",
		techStack: ["React", "Next.js", "Node.js", "shad cn", "Tailwind CSS", "MongoDB", "Clerk", "Stripe", "typescript"],
		githubUrl: "https://github.com/Abdullah-dev0/Effortless-Events",
		liveLink: "https://effortless-events.vercel.app",
		img: "/images/event.png",
		features: [
			{
				id: "1",
				description: "User management through Clerk, ensuring secure and efficient authentication.",
			},
			{
				id: "2",
				description:
					"Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.",
			},
			{
				id: "3",
				description:
					"Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.",
			},
			{
				id: "4",
				description:
					"Smartly connects events that are related and displaying on the event details page, making it more engaging for users",
			},
			{
				id: "5",
				description:
					"Efficient organization of events, ensuring a structured and user-friendly display for the audience, i.e., showing events created by the user on the user profile",
			},
			{
				id: "6",
				description:
					"Dynamic categorization allows for the seamless addition of new event categories, keeping your platform adaptable.",
			},
		],
	},
	{
		id: "4",
		slug: "Next Auth v5 - Advanced Guide (2024)",
		description:
			"I've crafted a robust and secure authentication starter pack for Next.js, leveraging the latest features in Next Auth v5. This starter pack simplifies the integration of authentication in your Next.js applications, ensuring a seamless and secure user experience.",
		techStack: ["Next.js", "Tailwind CSS", "Auth.js", "TypeScript"],
		githubUrl: "https://github.com/Abdullah-dev0/Authjs-starter-pack",
		features: [
			{
				id: "1",
				description: "🔐 Next-auth v5 (Auth.js)",
			},
			{
				id: "2",
				description: "🚀 Next.js 14 with server actions",
			},
			{
				id: "3",
				description: "🔑 Credentials Provider",
			},
			{
				id: "4",
				description: "🌐 OAuth Provider (Social login with Google & GitHub)",
			},
			{
				id: "5",
				description: "🔒 Forgot password functionality",
			},
			{
				id: "6",
				description: "✉️ Email verification",
			},
			{
				id: "7",
				description: "🔓 Login component (Opens in redirect or modal)",
			},
			{
				id: "8",
				description: "📝 Register component",
			},
			{
				id: "9",
				description: "🤔 Forgot password component",
			},
			{
				id: "10",
				description: "✅ Verification component",
			},
			{
				id: "11",
				description: "⚠️ Error component",
			},
			{
				id: "12",
				description: "🔘 Login button",
			},
			{
				id: "13",
				description: "🚪 Logout button",
			},
		],
	},
];

export const skills = [
	{
		id: "1",
		name: "Html",
		icon: "/icons/html.svg",
	},
	{
		id: "2",
		name: "Css",
		icon: "/icons/css.svg",
	},
	{
		id: "3",
		name: "Javascript",
		icon: "/icons/js.svg",
	},
	{
		id: "4",
		name: "Typescript",
		icon: "/icons/ts.svg",
	},
	{
		id: "5",
		name: "Tailwind CSS",
		icon: "/icons/tailwindcss.svg",
	},
	{
		id: "6",
		name: "React",
		icon: "/icons/react.js.svg",
	},
	{
		id: "7",
		name: "Next.js",
		icon: "/icons/next.js.svg",
		className: "invert",
	},
	{
		id: "8",
		name: "Node.js",
		icon: "/icons/node-js.svg",
	},
	{
		id: "9",
		name: "MongoDB",
		icon: "/icons/mongodb.svg",
	},
	{
		id: "10",
		name: "Git",
		icon: "/icons/git.svg",
	},
	{
		id: "11",
		name: "Express",
		icon: "/icons/express.svg",
		className: "invert",
	},
	{
		id: "12",
		name: "Figma",
		icon: "/icons/figma.svg",
	},
	{
		id: "13",
		name: "Prisma",
		icon: "/icons/prisma.svg",
		className: "invert",
	},
	{
		id: "14",
		name: "Github",
		icon: "/icons/github.svg",
		className: "invert",
	},
	{
		id: "15",
		name: "Docker",
		icon: "/icons/docker.svg",
	},
	{
		id: "16",
		name: "kubernetes",
		icon: "/icons/kubernetes.svg",
	},

	{
		id: "17",
		name: "Redis",
		icon: "/icons/redis.svg",
	},
	{
		id: "18",
		name: "Aws",
		icon: "/icons/aws.svg",
		className: "invert",
	},
];

export const socialLinks = [
	{
		id: "1",
		name: "Github",
		url: "https://github.com/Abdullah-dev0",
		icon: "/icons/github.svg",
		className: "invert",
	},
	{
		id: "2",
		name: "Linkedin",
		url: "https://www.linkedin.com/in/abdullah-devv",
		icon: "/icons/linkedin.svg",
	},
	{
		id: "3",
		name: "Twitter",
		url: "https://twitter.com/Abdul_ah14",
		icon: "/icons/twitter.svg",
		className: "invert",
	},

	{
		id: "4",
		name: "Dev.to",
		url: "https://dev.to/abdullah-dev0",
		icon: "/icons/dev.svg",
		className: "invert",
	},
];
