import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/Layout";

const ContactPage = () => {
   return (
      <Layout>
         <section>
            <div className="px-4 lg:p-0 text-base">
               <form
                  target="_blank"
                  className="flex flex-col gap-5"
                  method="post"
                  name="contant-form"
                  data-netlify="true"
               >
                  <input
                     type="hidden"
                     name="content-form"
                     value="contact-form"
                  />
                  <div>
                     <label
                        htmlFor="email"
                        className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
                     >
                        Your email
                     </label>
                     <Input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                        className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                        className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
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
