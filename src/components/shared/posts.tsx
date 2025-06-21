import { ArrowRight, Calendar } from "lucide-react";

type Post = {
	slug: string;
	description: string;
	date?: string;
};

const Posts = ({ slug, description, date }: Post) => {
	return (
		<article className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover">
			<div className="flex justify-between items-start gap-4">
				<div className="flex-1 space-y-3">
					<h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-200">
						{slug}
					</h3>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
						{description}
					</p>
					{date && (
						<div className="flex items-center gap-2 text-xs text-muted-foreground">
							<Calendar className="h-3 w-3" />
							{date}
						</div>
					)}
				</div>
				<ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
			</div>
		</article>
	);
};

export default Posts;