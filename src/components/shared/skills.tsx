import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { skills } from "@/constants";
import { Code2 } from "lucide-react";

const Skills = () => {
	return (
		<section className="w-full mt-20">
			<div className="text-center space-y-6 fade-in">
				<div className="inline-flex items-center gap-3 mb-2">
					<div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
						<Code2 className="h-5 w-5 text-primary" />
					</div>
					<h2 className="text-section-title">Skills & Technologies</h2>
				</div>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
					Technologies I work with to bring ideas to life
				</p>
			</div>

			<TooltipProvider delayDuration={200}>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
					{skills.map((skill, index) => (
						<Tooltip key={skill.id}>
							<TooltipTrigger asChild>
								<div
									className="group relative flex flex-col items-center justify-center p-8 card-subtle glow-effect interactive-hover scale-in"
									style={{ animationDelay: `${index * 0.1}s` }}>
									{/* Skill Icon */}
									<div className="relative mb-3">
										<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-background to-muted/50 border border-border/50 group-hover:border-primary/30 transition-all duration-300">
											<img
												src={skill.icon}
												alt={skill.name}
												loading="lazy"
												width={26}
												height={26}
												className={`object-contain transition-all duration-300 group-hover:scale-110 ${
													skill.className === "invert" ? "dark:invert" : skill.className || ""
												}`}
											/>
										</div>
										{/* Animated background glow */}
										<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10 scale-150" />
									</div>

									{/* Skill Name */}
									<span className="text-xs font-medium text-foreground/80 text-center transition-all duration-300 group-hover:text-foreground group-hover:font-semibold">
										{skill.name}
									</span>

									{/* Progress indicator */}
									<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-muted rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-primary to-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
									</div>
								</div>
							</TooltipTrigger>
							<TooltipContent side="top" className="bg-card/95 backdrop-blur-sm border-border/50">
								<p className="text-sm font-medium text-foreground">{skill.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
			</TooltipProvider>
		</section>
	);
};

export default Skills;
