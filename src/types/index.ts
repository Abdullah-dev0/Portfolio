export type Post = {
	id: string;
	url: string;
	published_at: string;
	title: string;
	updatedAt: string;
	brief: string;
	cover_image: string;
};

export type Feature = {
	id: string;
	description: string;
};

export type ProjectStat = {
	id: string;
	icon: string;
	label: string;
	value: string;
};

export type Project = {
	id: string;
	slug: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveLink: string;
	img: string;
	features: Feature[];
	stats: ProjectStat[];
};
