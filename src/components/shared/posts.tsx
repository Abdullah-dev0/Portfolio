import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

type Post = {
	slug: string;
	description: string;
	date?: string;
	isExternal?: boolean;
};

const Posts = ({ slug, description, date, isExternal }: Post) => {
	return (
		<article className="group card-spacing card-subtle card-hover relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
			
			<div className="relative flex justify-between items-start gap-4">
				<div className="flex-1 space-y-3">
					<div className="flex items-start justify-between gap-2">
						<h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-200">
							{slug}
						</h3>
						{isExternal && (
							<ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
						)}
					</div>
					
					<p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
						{description}
					</p>
					
					{date && (
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<Calendar className="h-3 w-3" />
							{date}
						</div>
					)}
				</div>
				
				<ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1" />
			</div>
		</article>
	);
};

export default Posts;