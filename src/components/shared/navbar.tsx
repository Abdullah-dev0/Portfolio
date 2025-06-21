import { navLinks } from "@/constants";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./modeToggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
				? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
				: "bg-transparent"
		}`}>
			<div className="container-custom">
				<div className="flex justify-between items-center py-6">
					{/* Enhanced Logo */}
					<Link 
						to="/" 
						className="group flex items-center space-x-2"
					>
						<div className="relative">
							<span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
								Abdullah
							</span>
							<div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
						</div>
					</Link>
					
					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						<ul className="flex gap-8">
							{navLinks.map((link) => (
								<li key={link.id}>
									<NavLink
										to={link.path}
										className={({ isActive }) =>
											`text-sm font-medium transition-all duration-200 hover:text-primary relative group ${
												isActive ? "text-primary" : "text-muted-foreground"
											}`
										}
									>
										{({ isActive }) => (
											<>
												{link.name}
												<span className={`absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
													isActive ? "w-full" : "w-0 group-hover:w-full"
												}`} />
											</>
										)}
									</NavLink>
								</li>
							))}
						</ul>
						
						<ModeToggle />
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-4">
						<ModeToggle />
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="relative"
						>
							<Menu className={`h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
							<X className={`h-5 w-5 absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className={`md:hidden transition-all duration-300 overflow-hidden ${
					isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
				}`}>
					<div className="py-4 space-y-2 border-t border-border">
						{navLinks.map((link) => (
							<NavLink
								key={link.id}
								to={link.path}
								onClick={() => setIsMobileMenuOpen(false)}
								className={({ isActive }) =>
									`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
										isActive 
											? "text-primary bg-primary/10" 
											: "text-muted-foreground hover:text-primary hover:bg-muted"
									}`
								}
							>
								{link.name}
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;