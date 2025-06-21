const Footer = () => {
	return (
		<footer className="border-t border-border bg-card/30 backdrop-blur-sm">
			<div className="container-custom py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
						<span>© 2025 Abdullah. All rights reserved.</span>
						<span className="hidden md:block">•</span>
						<span>Built with React & TypeScript</span>
					</div>
					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<span>Made with ❤️ for the web</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;