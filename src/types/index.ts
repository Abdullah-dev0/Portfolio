export type Post = {
   id: string;
   url: string;
   publishedAt: string;
   title: string;
   updatedAt: string;
   brief: string;
   coverImage: {
      url: string;
   };
};

export type Feature = {
   id: string;
   description: string;
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
};
