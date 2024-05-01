import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/Layout";

const ContactPage = () => {
   return (
      <Layout>
         <section>
            <div className="px-4 lg:p-0 text-base">
               <form className="flex flex-col gap-5">
                  <div>
                     <label
                        htmlFor="email"
                        className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
                     >
                        Your email
                     </label>
                     <Input
                        type="email"
                        name="email"
                        className="dark:bg-gray-700"
                        placeholder="yourname@.com"
                        required
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="Name"
                        className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                     >
                        Name
                     </label>
                     <Input
                        type="text"
                        id="Name"
                        name="name"
                        className="dark:bg-gray-700"
                        placeholder="Let us know how we can help you"
                        required
                     />
                  </div>
                  <div className="sm:col-span-2">
                     <label
                        htmlFor="message"
                        className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
                     >
                        Your message
                     </label>
                     <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="dark:bg-gray-700 "
                        placeholder="Leave a comment..."
                     ></Textarea>
                  </div>
                  <Button type="submit" className="sm:w-fit">
                     Send message
                  </Button>
               </form>
            </div>
         </section>
      </Layout>
   );
};

export default ContactPage;
