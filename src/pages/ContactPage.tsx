import Form from "@/components/shared/Form";
import Layout from "@/layouts/Layout";

const ContactPage = () => {
   return (
      <Layout>
         <section>
            <div className="px-4 lg:p-0 text-base">
               <Form />
            </div>
         </section>
      </Layout>
   );
};

export default ContactPage;
