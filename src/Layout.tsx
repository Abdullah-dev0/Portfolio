import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import "./index.css";

const Layout = (props: React.PropsWithChildren<Record<string, unknown>>) => {
   return (
      <>
         <Navbar />
         <main className="max-w-screen-sm mx-auto mt-32 lg:p-0 px-5 min-h-[60vh]">
            {props.children}
            <Toaster position="top-center" richColors />
         </main>
         <Footer />
      </>
   );
};

export default Layout;
