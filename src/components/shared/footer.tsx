import { ModeToggle } from "./modeToggle";

const footer = () => {
	return (
		<footer className="w-full max-w-screen-sm mx-auto py-8 px-4 lg:px-0 mt-auto">
			<div className="flex justify-between items-center">
				<div>© 2025 | Abdullah</div>
				<div>
					<ModeToggle />
				</div>
			</div>
		</footer>
	);
};

export default footer;
