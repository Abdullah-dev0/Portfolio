import { socialLinks } from "@/constants";
import { Link } from "react-router-dom";

const SocialLinks = () => {
	return (
		<div className="space-y-8 slide-up" style={{ animationDelay: "0.2s" }}>
			<div className="space-y-2">
				<h2 className="text-2xl font-semibold">Connect With Me</h2>
				<p className="text-muted-foreground">Find me on these platforms or reach out directly.</p>
			</div>

			<div className="grid gap-4">
				{socialLinks.map((link) => (
					<Link key={link.id} to={link.url} target="_blank">
						<div className="flex items-center gap-4 p-4 border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover group">
							<div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
								<img src={link.icon} alt={link.name} className={`h-6 w-6 ${link.className || ""}`} />
							</div>
							<div className="flex-1">
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
