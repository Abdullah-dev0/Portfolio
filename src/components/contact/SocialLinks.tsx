import { socialLinks } from "@/constants";
import { Link } from "react-router-dom";

const SocialLinks = () => {
	return (
		<div className="space-y-8 slide-up" style={{ animationDelay: "0.2s" }}>
			<div className="space-y-2 text-center max-w-xl mx-auto">
				<p className="text-muted-foreground text-sm md:text-base">
					Bring your sparks; I’ll bring the coffee. Drop a hello on any platform and let’s make something we’re proud
					of.
				</p>
			</div>

			<div className="grid lg:grid-cols-2 gap-6 w-full">
				{socialLinks.map((link) => (
					<Link key={link.id} to={link.url} target="_blank">
						<div className="flex items-center gap-4 p-4 border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover group">
							<div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
								<img src={link.icon} alt={link.name} className={`h-6 w-6 ${link.className || ""}`} />
							</div>
							<div>
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
