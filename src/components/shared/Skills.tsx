import "devicon";

const Skills = () => {
   return (
      <div className="text-center mt-12">
         <h1 className="uppercase underline max-sm:text-xl text-4xl ">
            My skills
         </h1>
         <div className=" w-full  mt-8">
            <div className="flex gap-4 flex-wrap justify-center items-center">
               <i className="devicon-javascript-plain colored  text-7xl "></i>
               <i className="devicon-typescript-plain colored  text-7xl "></i>
               <i className="devicon-react-plain-wordmark text-7xl  colored "></i>
               <i className="devicon-nextjs-plain-wordmark text-9xl "></i>
               <i className="devicon-mongodb-plain-wordmark text-7xl  colored "></i>
               <i className="devicon-tailwindcss-plain-wordmark text-9xl  colored "></i>
               <i className="devicon-nodejs-plain-wordmark text-7xl  colored "></i>
               <i className="devicon-express-original-wordmark text-7xl   "></i>

               <i className="devicon-prisma-plain-wordmark text-7xl  "></i>
               <i className="devicon-postgresql-plain-wordmark text-7xl  colored"></i>
            </div>
         </div>
      </div>
   );
};

export default Skills;
