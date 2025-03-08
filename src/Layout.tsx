import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="mx-auto mt-32 max-sm:mt-40 lg:p-0 px-5 min-h-[60vh] max-w-screen-sm">
				<Outlet />
				<Toaster position="top-center" richColors />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
