import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { skills } from "@/constants";
import { Code2 } from "lucide-react";

const Skills = () => {
  return (
    <div className="content-spacing">
      <div className="text-center space-y-4 fade-in">
        <div className="inline-flex items-center gap-3 mb-2">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-section-title">Skills & Technologies</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>
      </div>
      
      <TooltipProvider delayDuration={100}>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Tooltip key={skill.id}>
              <TooltipTrigger asChild>
                <div 
                  className="group relative flex flex-col items-center justify-center card-spacing card-subtle card-hover scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      loading="lazy"
                      width={32}
                      height={32}
                      className={`w-8 h-8 object-contain transition-all duration-300 group-hover:scale-125 ${skill.className || ""}`}
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
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