import { ArrowRight } from "lucide-react";

type Post = {
   slug: string;
   description: string;
   date?: string;
};
const Posts = ({ slug, description }: Post) => {
   return (
      <section
         className="mt-6 border p-3 rounded-lg hover:bg-slate-900 light: transition-all duration-400 group "
         data-aos="zoom-in-up"
         data-aos-offset="100"
         data-aos-delay="100"
         data-aos-duration="800"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
      >
         <div className="flex justify-between items-center">
            <div className="w-full">
               <h1 className="text-[18px] truncate capitalize">
                  {slug}
               </h1>
               <p className="text-[15px] truncate "> {description} </p>
            </div>
            <ArrowRight
               className="hidden group-hover:block animate-out ease-in-out"
               size={26}
            />
         </div>
      </section>
   );
};

export default Posts;
