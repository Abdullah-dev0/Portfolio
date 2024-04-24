export const navLinks = [
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
];

export const posts = [
   {
      id: "1",
      slug: "Getting Started with React: A Beginner's Guide",
      date: new Date().toDateString(),
      description:
         "Learn the basics of React.js and how to set up your first React application. This comprehensive guide covers everything from installation to creating your first components and understanding React's component-based architecture.",
   },
   {
      id: "2",
      slug: "State Management in React: Understanding useState and useContext",
      date: new Date().toDateString(),
      description:
         "Explore different approaches to state management in React using the useState and useContext hooks. Learn how to manage component state effectively and share state between components using React's built-in state management solutions.",
   },
   {
      id: "3",
      slug: "Routing in React: Using React Router for Single Page Applications",
      date: new Date().toDateString(),
      description:
         "Discover how to implement client-side routing in React applications using React Router. This blog post covers basic routing concepts, creating routes, handling navigation, and passing parameters to components.",
   },
   {
      id: "4",
      slug: "Working with Forms in React: Handling Form Input and Validation",
      date: new Date().toDateString(),
      description:
         "Master the art of form handling in React applications. Learn how to create controlled and uncontrolled form components, handle form submission, perform input validation, and display error messages to users.",
   },
   {
      id: "5",
      slug: "Fetching Data in React: Using useEffect and Axios for Asynchronous Operations",
      date: new Date().toDateString(),
      description:
         "Explore different techniques for fetching data in React applications. From using the useEffect hook to performing asynchronous HTTP requests with Axios, this blog post covers best practices for fetching and handling data in React.",
   },
   {
      id: "6",
      slug: "Styling React Components: CSS-in-JS, Styled Components, and CSS Modules",
      date: new Date().toDateString(),
      description:
         "Learn various approaches to styling React components, including CSS-in-JS libraries like styled-components, CSS Modules, and inline styles. Discover the pros and cons of each method and choose the best approach for your project.",
   },
   {
      id: "7",
      slug: "Optimizing Performance in React: Tips and Best Practices",
      date: new Date().toDateString(),
      description:
         "Improve the performance of your React applications with optimization techniques and best practices. From code splitting and lazy loading to memoization and virtualization, learn how to make your React apps faster and more efficient.",
   },
   {
      id: "8",
      slug: "Testing React Components: Unit Testing with Jest and React Testing Library",
      date: new Date().toDateString(),
      description:
         "Ensure the reliability and maintainability of your React components with comprehensive unit tests. This blog post covers the basics of unit testing in React using Jest and React Testing Library, including testing component rendering, user interactions, and asynchronous behavior.",
   },
   {
      id: "9",
      slug: "Authentication in React Applications: Implementing User Authentication with Firebase",
      date: new Date().toDateString(),
      description:
         "Secure your React applications with user authentication using Firebase Authentication. Learn how to implement login and registration functionality, handle user sessions, and restrict access to authenticated users only.",
   },
   {
      id: "10",
      slug: "Deploying React Apps: Hosting on Netlify Vercel and Heroku",
      date: new Date().toDateString(),
      description:
         "Take your React applications live by deploying them to popular hosting platforms like Netlify Vercel  and Heroku. This blog post guides you through the deployment process, from preparing your app for production to configuring hosting settings and deploying your app.",
   },
];

export const projects = [
   {
      id: "1",
      slug: "React Ecommerce",
      description:
         "A full-stack ecommerce application built with React, Node.js, Express, and MongoDB. This project features a responsive frontend with product listings, shopping cart functionality, user authentication, and order processing.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: `https://github.com/`,
      img: "https://unsplash.com/photos/shallow-focus-photography-of-water-peaTniZsUQs",
      features: [
         {
            id: "1",

            description:
               "Display a list of products with details like name, price, and image.",
         },
         {
            id: "2",

            description:
               "Allow users to add products to a shopping cart and view the total price.",
         },
         {
            id: "3",

            description:
               "Implement user authentication with signup, login, and logout functionality.",
         },
         {
            id: "4",

            description:
               "Enable users to place orders, view order history, and update order status.",
         },
      ],
   },
   {
      id: "2",
      slug: "React Portfolio",
      description:
         "A personal portfolio website built with React and Tailwind CSS. This project showcases my skills, projects, and blog posts in an interactive and visually appealing manner.",
      techStack: ["React", "Tailwind CSS"],

      githubUrl: `https://github.com/`,
      img: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
         {
            id: "1",
            description:
               "Display a list of projects with details like name, description, and image.",
         },
         {
            id: "2",
            description:
               "Showcase skills and technologies used in each project.",
         },
         {
            id: "3",
            description:
               "Provide links to project repositories and live demos.",
         },
         {
            id: "4",
            description:
               "Include a blog section with a list of recent posts and links to individual posts.",
         },
      ],
   },
   {
      id: "3",
      slug: "React Chat App",
      description:
         "A real-time chat application built with React, Socket.io, and Node.js. This project allows users to join chat rooms, send messages, and view online users in real time.",
      techStack: ["React", "Socket.io", "Node.js"],
      Img: `https://unsplash.com/photos/shallow-focus-photography-of-water-peaTniZsUQs`,
      githubUrl: `https://github.com/`,
      features: [
         {
            id: "1",
            description:
               "Create chat rooms where users can join and send messages in real time.",
         },
         {
            id: "2",
            description:
               "Display a list of online users and their status in each chat room.",
         },
         {
            id: "3",
            description:
               "Allow users to send messages, view message history, and receive notifications.",
         },
         {
            id: "4",
            description:
               "Implement user authentication with signup, login, and logout functionality.",
         },
      ],
   },
];
