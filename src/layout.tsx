import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<Navbar />
			<main className="flex-1 pt-24">
				<Outlet />
				<Toaster position="top-center" richColors />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;