import PostSection from "@/components/shared/PostSection";

import ProjectSection from "@/components/shared/ProjectSection";

import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import Layout from "../Layout";

const HomePage = () => {
   const [show, setShow] = useState<boolean>(false);

   useEffect(() => {
      const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

      window.onbeforeunload = () => {
         localStorage.removeItem("hasVisitedBefore");
      };

      if (!hasVisitedBefore) {
         setTimeout(() => {
            setShow(true);
            localStorage.setItem("hasVisitedBefore", "true");
         }, 2000);
      }
   }, []);

   return (
      <Layout>
         <Dialog open={show} onOpenChange={() => setShow(false)}>
            <DialogContent>
               <DialogDescription className="sm:text-xl mt-4 text-sm">
                  This webiste is still under development. Please be patient.
               </DialogDescription>
               <DialogClose asChild className="mt-4">
                  <Button
                     type="button"
                     variant="secondary"
                     className="focus:outline-none focus:ring-0 focus-visible:ring-offset-0 border-primary focus-visible:ring-transparent focus:border-none  focus:border-transparent"
                  >
                     Close
                  </Button>
               </DialogClose>
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
