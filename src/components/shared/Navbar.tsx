import { navLinks } from "@/constants";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="fixed z-50 text-white bg-gray-900  top-0 w-full px-5 p-3 lg:px-0">
			<div className=" flex justify-between gap-4 max-w-screen-sm items-center pt-6 mx-auto sm:text-lg flex-wrap max-sm:justify-center">
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
