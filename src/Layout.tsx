import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import "./index.css";

const Layout = (props: React.PropsWithChildren<Record<string, unknown>>) => {
   AOS.init();
   return (
      <>
         <Navbar />
         <main className="max-w-screen-sm mx-auto mt-32 lg:p-0 px-5" id="top">
            {props.children}
         </main>
         <Footer />
      </>
   );
};

export default Layout;
