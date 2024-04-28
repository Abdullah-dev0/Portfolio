import PostSection from "@/components/shared/PostSection";

import ProjectSection from "@/components/shared/ProjectSection";

import Layout from "../Layout";

const HomePage = () => {
   return (
      <Layout>
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
