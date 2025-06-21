import { ModeToggle } from "./modeToggle";

const Footer = () => {
	return (
		<footer className="border-t border-border bg-card/50">
			<div className="container-custom py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="text-sm text-muted-foreground">
						© 2025 Abdullah. All rights reserved.
					</div>
					<div className="flex items-center gap-4">
						<span className="text-sm text-muted-foreground">Theme</span>
						<ModeToggle />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;