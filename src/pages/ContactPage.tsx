import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/constants";
import { useForm as useFormSpree } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Send, Mail, MessageSquare } from "lucide-react";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(1, "Name is required").trim(),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	message: z.string().min(3, "Message must be at least 3 characters"),
});

const ContactPage = () => {
	const [state, handleSubmitSpree] = useFormSpree("xqazjbed");
	const [redirect, setRedirect] = useState(false);
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

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
		return (
			<div className="section-spacing">
				<div className="container-custom max-w-2xl text-center space-y-6">
					<div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
						<Mail className="w-8 h-8 text-green-600" />
					</div>
					<h1 className="text-3xl font-bold">Message Sent!</h1>
					<p className="text-lg text-muted-foreground">
						Thanks for reaching out! I'll get back to you soon.
					</p>
				</div>
			</div>
		);
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
					{/* Header */}
					<div className="text-center space-y-6 fade-in">
						<h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Let's connect and build something amazing together! I'm always open to discussing new opportunities and interesting projects.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-start">
						{/* Contact Form */}
						<div className="space-y-8 slide-up">
							<div className="space-y-2">
								<div className="flex items-center gap-3">
									<MessageSquare className="h-6 w-6 text-primary" />
									<h2 className="text-2xl font-semibold">Send a Message</h2>
								</div>
								<p className="text-muted-foreground">
									Fill out the form below and I'll get back to you as soon as possible.
								</p>
							</div>

							<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input 
										id="name" 
										type="text" 
										disabled={state.submitting} 
										{...register("name")}
										className="h-12"
									/>
									{errors.name && (
										<p className="text-destructive text-sm">{errors?.name?.message?.toString()}</p>
									)}
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email Address</Label>
									<Input 
										id="email" 
										type="email" 
										disabled={state.submitting} 
										{...register("email")}
										className="h-12"
									/>
									{errors.email && (
										<p className="text-destructive text-sm">{errors?.email?.message?.toString()}</p>
									)}
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea 
										id="message" 
										{...register("message")} 
										disabled={state.submitting}
										className="min-h-[120px] resize-none"
									/>
									{errors.message && (
										<p className="text-destructive text-sm">{errors?.message?.message?.toString()}</p>
									)}
								</div>

								<Button 
									type="submit" 
									disabled={state.submitting} 
									size="lg"
									className="w-full group"
								>
									{state.submitting ? (
										<>
											<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
											Sending...
										</>
									) : (
										<>
											Send Message
											<Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
										</>
									)}
								</Button>
							</form>
						</div>

						{/* Social Links */}
						<div className="space-y-8 slide-up" style={{ animationDelay: "0.2s" }}>
							<div className="space-y-2">
								<h2 className="text-2xl font-semibold">Connect With Me</h2>
								<p className="text-muted-foreground">
									Find me on these platforms or reach out directly.
								</p>
							</div>

							<div className="grid gap-4">
								{socialLinks.map((link) => (
									<Link key={link.id} to={link.url} target="_blank">
										<div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover group">
											<div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
												<img 
													src={link.icon} 
													alt={link.name} 
													className={`h-6 w-6 ${link.className || ""}`} 
												/>
											</div>
											<div className="flex-1">
												<h3 className="font-medium group-hover:text-primary transition-colors">
													{link.name}
												</h3>
												<p className="text-sm text-muted-foreground">
													Connect on {link.name}
												</p>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;