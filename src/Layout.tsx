import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="max-w-screen-sm mx-auto mt-32 max-sm:mt-40 lg:p-0 px-5 min-h-[60vh]">
				<Outlet />
				<Toaster position="top-center" richColors />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
