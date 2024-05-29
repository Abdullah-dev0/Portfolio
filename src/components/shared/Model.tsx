import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { handleSubmit } from "@/actions/HandleSubmit";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
type ModelProps = {
   show: boolean;
   handle: () => void;
   description: string;
   title: string;
   type: "newsletter" | "underMaintenance";
   handleSubmit?: () => void;
};

const Model = ({ show, handle, description, title, type }: ModelProps) => {
   const [email, setEmail] = useState<string>("");

   return (
      <Dialog open={show} onOpenChange={handle}>
         <DialogContent>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <div className="space-y-3">
               <p className="max-sm:text-base text-xl">{description}</p>
               {type === "newsletter" && (
                  <form>
                     <Label htmlFor="email" className="text-lg">
                        Email
                     </Label>
                     <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="mt-4"
                        onChange={(e) => {
                           setEmail(e.target.value);
                        }}
                     />
                  </form>
               )}
            </div>
            <DialogClose asChild className="mt-3">
               {type === "newsletter" ? (
                  <Button
                     onClick={() => handleSubmit(email)}
                     type="button"
                     disabled={!email}
                     className="focus:outline-none focus:ring-0 focus-visible:ring-offset-0 border-primary focus-visible:ring-transparent focus:border-none  focus:border-transparent"
                  >
                     Subscribe
                  </Button>
               ) : (
                  <Button
                     type="button"
                     className="focus:outline-none focus:ring-0 focus-visible:ring-offset-0 border-primary focus-visible:ring-transparent focus:border-none  focus:border-transparent"
                  >
                     Close
                  </Button>
               )}
            </DialogClose>
         </DialogContent>
      </Dialog>
   );
};

export default Model;
