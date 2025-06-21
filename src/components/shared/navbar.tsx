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
			<div className="flex justify-between gap-4 max-w-screen-sm items-center mx-auto sm:text-lg flex-wrap max-sm:justify-center">
				<div className="leading-5">
					<Link to="/">Abdullah</Link>
					<div className="bg-green-500 w-full h-1 rotate-2"></div>
				</div>
				<div className="justify-end">
					<ul className="flex gap-4 flex-wrap">
						{navLinks.map((link) => (
							<li key={link.id}>
								<NavLink
									to={link.path}
									className={({ isActive }) =>
										`${isActive ? "opacity-65 animate-pulse transition-all" : null} underline hover:opacity-70 `
									}>
									{link.name}
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
