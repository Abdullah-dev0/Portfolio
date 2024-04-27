import PostSection from "@/components/shared/PostSection";

import ProjectSection from "@/components/shared/ProjectSection";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect } from "react";
import Layout from "../Layout";

const HomePage = () => {
   useEffect(() => {
      setTimeout(() => {
         return document.getElementById("open")?.click();
      }, 3000);
   }, []);
   return (
      <Layout>
         <Dialog>
            <DialogTrigger id="open"></DialogTrigger>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                     This action cannot be undone. This will permanently delete
                     your account and remove your data from our servers.
                  </DialogDescription>
               </DialogHeader>
            </DialogContent>
         </Dialog>
         <div
            className="flex gap-8 flex-col w-full"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
         >
            <h2 className="text-lg">Hi, I'm Abdullah 👋🏻</h2>
            <p className="sm:text-lg">
               I'm a Full stack developer with almost 2 years of experience. I
               am very passionate about implementing Full Stack Application.
            </p>
         </div>
         <div
            className="mt-16 text-lg  flex flex-col justify-between items-center"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
         >
            <PostSection />
            <div
               className="w-full"
               data-aos="zoom-in-up"
               data-aos-offset="200"
               data-aos-delay="100"
               data-aos-duration="800"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
            >
               <ProjectSection />
            </div>
         </div>
      </Layout>
   );
};

export default HomePage;
