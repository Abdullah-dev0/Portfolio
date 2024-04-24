const Form = () => {
   return (
      <form
         action="/"
         method="POST"
         name="Contact-Form"
         data-netlify="true"
         className="flex flex-col gap-5"
      >
         <div>
            <label
               htmlFor="email"
               className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
               Your email
            </label>
            <input
               type="email"
               id="email"
               name="email"
               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
               placeholder="jhon@gmail.com"
               required
            />
         </div>
         <div>
            <label
               htmlFor="name"
               className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
            >
               Name
            </label>
            <input
               type="text"
               id="name"
               name="name"
               className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
               placeholder="Let us know how we can help you"
               required
            />
         </div>
         <div className="sm:col-span-2">
            <label
               htmlFor="message"
               className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
               Your message
            </label>
            <textarea
               id="message"
               name="message"
               rows={6}
               className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-primary-500"
               placeholder="Leave a comment..."
            ></textarea>
         </div>
         <button
            type="submit"
            className="px-5  font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600"
         >
            Send message
         </button>
      </form>
   );
};

export default Form;