import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/shared/theme-provider.tsx";
import "./index.css";
import BlogsDeatils from "./pages/BlogsDetails.tsx";
import BlogsPage from "./pages/BlogsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectDetails from "./pages/ProjectDetails.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/blogs",
      element: <BlogsPage />,
      children: [
         {
            path: "./:slug",
            element: <BlogsDeatils />,
         },
      ],
   },
   {
      path: "/blogs/:slug",
      element: <BlogsDeatils />,
   },
   {
      path: "/projects",
      element: <ProjectsPage />,
   },
   {
      path: "/projects/:slug",
      element: <ProjectDetails />,
      children: [
         {
            path: "./:slug",
            element: <ProjectDetails />,
         },
      ],
   },
   {
      path: "/contact",
      element: <ContactPage />,
   },

   {
      path: "*",
      element: <ErrorPage />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
   </ThemeProvider>
);
