import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import React, { useEffect } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import initializeGA from "./lib/analytics";
import ReactGA from "react-ga4";

const Layout = (props: React.PropsWithChildren<Record<string, unknown>>) => {
	const location = useLocation();

	useEffect(() => {
		initializeGA();
		ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
	}, [location]);
	return (
		<>
			<Navbar />
			<main className="max-w-screen-sm mx-auto mt-32 lg:p-0 px-5 min-h-[60vh]">
				{props.children}
				<Toaster position="top-center" richColors />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
