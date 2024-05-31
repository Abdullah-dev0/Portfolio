import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/constants";
import "devicon";

const Skills = () => {
   return (
      <div className="mt-8">
         <h1 className="uppercase text-center py-5  font-medium max-sm:text-xl text-4xl">
            My Skills
         </h1>
         <p>
            Skilled in creating responsive and user-friendly web interfaces.
            Proficient in Reactjs , Nextjs and modern web technologies,
            dedicated to crafting visually appealing and performant digital
            experiences.
         </p>
         <TooltipProvider delayDuration={200}>
            <div className="flex gap-7 mt-10 flex-wrap justify-center items-center">
               {skills.map((skill) => (
                  <Tooltip key={skill.id}>
                     <TooltipTrigger asChild>
                        <button className="z-0 group relative box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 text-small gap-unit-2 [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground data-[hover=true]:opacity-hover border backdrop-blur-2xl dark:bg-zinc-800/30 bg-zinc-900/85 border-neutral-800 rounded-xl flex justify-center items-center h-20 w-20">
                           <img
                              src={skill.icon}
                              alt={skill.name}
                              loading="lazy"
                              width={50}
                              height={50}
                              className={`w-15 h-15 object-contain ${skill.className}`}
                           />
                        </button>
                     </TooltipTrigger>
                     <TooltipContent className="mb-2">
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
