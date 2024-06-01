import { ModeToggle } from "./mode-toggle";

const footer = () => {
   return (
      <footer className="flex justify-between  items-center max-w-screen-sm mx-auto py-8 px-4 lg:px-0">
         <div>© 2024 | Abdullah</div>
         <div>
            <ModeToggle />
         </div>
      </footer>
   );
};

export default footer;
