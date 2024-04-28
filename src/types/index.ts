export type Post = {
   id: string;
   url: string;
   publishedAt: string;
   title: string;
   updatedAt: string;
   coverImage: {
      url: string;
   };
   content: {
      markdown: string;
   };
};
