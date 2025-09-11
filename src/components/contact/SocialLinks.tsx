import { socialLinks } from "@/constants";
import { Link } from "react-router-dom";

const SocialLinks = () => {
	return (
		<div className="space-y-8 slide-up" style={{ animationDelay: "0.2s" }}>
			<div className="space-y-2 text-center max-w-xl mx-auto">
				<h2 className="text-3xl font-semibold tracking-tight">Let’s Build Something Great</h2>
				<p className="text-muted-foreground text-sm md:text-base">
					I’m always up for collaborating, chatting about ideas, or just saying hi. Pick a platform you like and drop
					in.
				</p>
			</div>

			<div className="grid lg:grid-cols-2 gap-6  w-full">
				{socialLinks.map((link) => (
					<Link key={link.id} to={link.url} target="_blank">
						<div className="flex items-center gap-4 p-4 border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover group">
							<div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
								<img src={link.icon} alt={link.name} className={`h-6 w-6 ${link.className || ""}`} />
							</div>
							<div className="">
								<h3 className="font-medium group-hover:text-primary transition-colors">{link.name}</h3>
								<p className="text-sm text-muted-foreground">Connect on {link.name}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SocialLinks;
