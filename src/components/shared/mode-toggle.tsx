import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/shared/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
   const { setTheme } = useTheme();

   return (
      <div className="flex gap-4 flex-wrap">
         <Button>
            <Sun size={18} onClick={() => setTheme("light")} />
         </Button>
         <Button>
            <Moon size={18} onClick={() => setTheme("dark")} />
         </Button>
      </div>
   );
}
