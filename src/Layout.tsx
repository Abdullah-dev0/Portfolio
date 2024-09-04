import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./index.css";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Layout = () => {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<main
				className={twMerge(
					clsx(
						"mx-auto mt-32 max-sm:mt-40 lg:p-0 px-5 min-h-[60vh]",
						location.pathname === "/contact" ? "max-w-screen-lg" : "max-w-screen-sm",
					),
				)}>
				<Outlet />
				<Toaster position="top-center" richColors />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
