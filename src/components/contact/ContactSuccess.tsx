import { Mail } from "lucide-react";

const ContactSuccess = () => {
	return (
		<div className="section-spacing">
			<div className="container-custom max-w-2xl text-center space-y-6">
				<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto border-2 border-green-600">
					<Mail className="w-8 h-8 text-green-600" />
				</div>
				<h1 className="text-3xl font-bold">Message Sent!</h1>
				<p className="text-lg text-muted-foreground">Thanks for reaching out! I'll get back to you soon.</p>
			</div>
		</div>
	);
};

export default ContactSuccess;
