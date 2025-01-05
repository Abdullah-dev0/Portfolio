import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ThemeProvider } from "./components/shared/theme-provider.tsx";
import "./index.css";
import Layout from "./Layout";
import AboutMe from "./pages/AboutMe.tsx";
import BlogsDetails from "./pages/BlogsDetails.tsx";
import BlogsPage from "./pages/BlogsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectDetails from "./pages/ProjectDetails.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import { BlogProvider } from "./context/blog.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} loader={() => <div>loading</div>} />
			<Route path="blogs" element={<BlogsPage />} loader={() => <div>loading</div>} />
			<Route path="blogs/:slug" element={<BlogsDetails />} />
			<Route path="projects" element={<ProjectsPage />} />
			<Route path="projects/:slug" element={<ProjectDetails />} />
			<Route path="contact" element={<ContactPage />} />
			<Route path="about" element={<AboutMe />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>,
	),
);

const App = () => {
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<BlogProvider>
				<RouterProvider router={router} />
			</BlogProvider>
		</ThemeProvider>
	);
};

export default App;
