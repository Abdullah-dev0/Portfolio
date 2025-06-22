import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav
			className={`fixed z-50 top-0 w-full transition-all duration-300 p-4 ${
				isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
			}`}>
			{" "}
			<div className="flex justify-between gap-4 max-w-screen-sm items-center mx-auto sm:text-lg flex-wrap max-sm:justify-center">
				<div className="leading-5 relative group">
					<Link to="/" className="relative block">
						<span className="text-xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent hover:from-accent hover:via-primary hover:to-primary transition-all duration-500 transform hover:scale-105">
							Abdullah
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
					</Link>
				</div>{" "}
				<div className="justify-end">
					<ul className="flex gap-6 flex-wrap">
						{navLinks.map((link) => (
							<li key={link.id} className="relative group">
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										`${isActive ? "text-primary font-semibold" : "text-muted-foreground"} 
										relative transition-all duration-300 hover:text-primary font-medium
										before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
										before:bg-gradient-to-r before:from-primary before:to-accent 
										before:transition-all before:duration-300 hover:before:w-full
										${isActive ? "before:w-full" : ""}`
									}>
									{link.name}
									<span className="absolute inset-0 bg-primary/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10 scale-110"></span>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
