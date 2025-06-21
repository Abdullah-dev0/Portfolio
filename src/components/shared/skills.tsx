import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>
      </div>
      
      <TooltipProvider delayDuration={100}>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Tooltip key={skill.id}>
              <TooltipTrigger asChild>
                <div className="group relative flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    width={40}
                    height={40}
                    className={`w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 ${skill.className || ""}`}
                  />
                  <span className="text-xs font-medium text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm font-medium">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Skills;