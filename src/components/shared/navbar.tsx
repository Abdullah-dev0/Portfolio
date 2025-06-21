import { navLinks } from "@/constants";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./modeToggle";
import { useState, useEffect } from "react";

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
		<nav className={`fixed z-50 top-0 w-full transition-all duration-300 ${
			isScrolled 
				? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
				: "bg-transparent"
		}`}>
			<div className="container-custom">
				<div className="flex justify-between items-center py-6">
					<Link 
						to="/" 
						className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
					>
						Abdullah
					</Link>
					
					<div className="flex items-center gap-8">
						<ul className="hidden md:flex gap-8">
							{navLinks.map((link) => (
								<li key={link.id}>
									<NavLink
										to={link.path}
										className={({ isActive }) =>
											`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
												isActive ? "text-primary" : "text-muted-foreground"
											}`
										}
									>
										{({ isActive }) => (
											<>
												{link.name}
												{isActive && (
													<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
												)}
											</>
										)}
									</NavLink>
								</li>
							))}
						</ul>
						
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;