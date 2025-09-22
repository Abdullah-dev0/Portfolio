import EmailCTA from "@/components/contact/EmailCTA";
import SocialLinks from "@/components/contact/SocialLinks";
import SEOHead from "@/components/seo/SEOHead";

const ContactPage = () => {
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
			<div className="container-custom max-w-5xl">
				<div className="space-y-20">
					<EmailCTA />
					<SocialLinks />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
