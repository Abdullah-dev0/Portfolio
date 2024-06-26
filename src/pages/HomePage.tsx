import PostSection from "@/components/shared/PostSection";

import ProjectSection from "@/components/shared/ProjectSection";

import Model from "@/components/shared/Model";
import Skills from "@/components/shared/Skills";
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
         <Model
            title="Under Maintenance"
            type="underMaintenance"
            description="This webiste is still under development. Please be patient."
            handle={() => setShow(false)}
            show={show}
         />
         <div className="flex gap-8 flex-col w-full">
            <h2 className="text-lg">Hi, I'm Abdullah 👋🏻</h2>
            <p className="sm:text-lg">
               I'm a Full stack developer with almost 2 years of experience. I
               am very passionate about implementing Full Stack Application.
            </p>
         </div>
         <div className="mt-16 text-lg  flex flex-col justify-between items-center">
            <PostSection />
            <Skills />
            <ProjectSection />
         </div>
      </Layout>
   );
};

export default HomePage;
