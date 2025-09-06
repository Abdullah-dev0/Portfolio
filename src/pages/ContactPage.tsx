import SEOHead from "@/components/seo/SEOHead";
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

	const contactPageStructuredData = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact Abdullah",
		description:
			"Get in touch with Abdullah - Full Stack Developer. Available for freelance projects, job opportunities, and collaboration.",
		url: "https://abdullahtech.me/contact",
		mainEntity: {
			"@type": "Person",
			name: "Abdullah",
			jobTitle: "Full Stack Developer",
			contactPoint: {
				"@type": "ContactPoint",
				contactType: "Professional",
				availableLanguage: ["English"],
			},
		},
	};

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
			<SEOHead
				title="Contact Abdullah - Full Stack Developer"
				description="Get in touch with Abdullah - Full Stack Developer. Available for freelance projects, job opportunities, and collaboration."
				keywords={[
					"Contact Abdullah",
					"Hire Full Stack Developer",
					"Web Developer Contact",
					"Freelance Developer",
					"React Developer Hire",
					"Node.js Developer Contact",
					"Software Engineer Contact",
				]}
				url="/contact"
				type="website"
				structuredData={contactPageStructuredData}
			/>
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
