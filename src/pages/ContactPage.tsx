import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactSuccess from "@/components/contact/ContactSuccess";
import SocialLinks from "@/components/contact/SocialLinks";
import { useForm as useFormSpree } from "@formspree/react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(1, "Name is required").trim(),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	message: z.string().min(3, "Message must be at least 3 characters"),
});

const ContactPage = () => {
	const [state, handleSubmitSpree] = useFormSpree("xqazjbed");
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		if (state.succeeded) {
			const timer = setTimeout(() => {
				setRedirect(true);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [state.succeeded]);

	if (redirect) {
		return <Navigate to="/" replace={true} />;
	}

	if (state.succeeded) {
		return <ContactSuccess />;
	}

	if (state.errors) {
		toast.error("An error occurred, please try again later.");
		return <Navigate to="/" replace={true} />;
	}

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		await handleSubmitSpree(data);
	};

	return (
		<div className="section-spacing">
			<div className="container-custom max-w-4xl">
				<div className="space-y-16">
					<ContactHeader />

					<div className="space-y-12">
						<SocialLinks />
						<ContactForm onSubmit={onSubmit} isSubmitting={state.submitting} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
