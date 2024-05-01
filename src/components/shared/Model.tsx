import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { subscribeToNewsletter } from "@/lib/requests";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type ModelProps = {
   show: boolean;
   handle: () => void;
   description: string;
   title: string;
   type: "newslettter" | "underMaintenance";
   handleSubmit?: () => void;
};

const Model = ({ show, handle, description, title, type }: ModelProps) => {
   const [email, setEmail] = useState<string>("");

   const handleSubmit = async () => {
      try {
         const res: any = await subscribeToNewsletter(email);
         if (res) {
            toast.success(
               "please comfirm your email to subscribe to our newsletter"
            );
         }
      } catch (error: any) {
         if (error.response.errors[0].message === "Email already subscribed") {
            toast.error("Email already subscribed");
         }
      }
   };

   return (
      <Dialog open={show} onOpenChange={handle}>
         <DialogContent>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <div>
               <p className="max-sm:text-base text-xl">{description}</p>
               {type === "newslettter" && (
                  <form className="mt-2">
                     <Label htmlFor="email" className="mt-4">
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
            <DialogClose asChild className="mt-4">
               {type === "newslettter" ? (
                  <Button
                     type="button"
                     onClick={handleSubmit}
                     variant="secondary"
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
