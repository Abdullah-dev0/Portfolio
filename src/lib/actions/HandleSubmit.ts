import { toast } from "sonner";
import { subscribeToNewsletter } from "../requests";

export const handleSubmit = async (email: string) => {

   if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      return;
   }

   try {
      const res: any = await subscribeToNewsletter(email);
      if (res) {
         toast.success(
            "Please confirm your email to subscribe to our newsletter"
         );
      }
   } catch (error: any) {
      if (error.response.errors[0].message === "Email already subscribed") {
         toast.error("Email already subscribed");
      }
   }
};
