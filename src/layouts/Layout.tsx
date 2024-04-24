import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "../index.css";

const Layout = (props: React.PropsWithChildren<Record<string, unknown>>) => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <ThemeProvider defaultTheme="system"  storageKey="vite-ui-theme">
         <Navbar />
         <main className="max-w-screen-sm mx-auto mt-28 lg:p-0 px-5" id="top">
            {props.children}
         </main>
         <Footer />
      </ThemeProvider>
   );
};

export default Layout;
