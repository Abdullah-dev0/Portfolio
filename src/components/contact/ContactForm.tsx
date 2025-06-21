import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, MessageSquare } from "lucide-react";
import { z } from "zod";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(1, "Name is required").trim(),
	email: z.string().email("Invalid email address").min(1, "Email is required"),
	message: z.string().min(3, "Message must be at least 3 characters"),
});

interface ContactFormProps {
	onSubmit: (data: z.infer<typeof formSchema>) => Promise<void>;
	isSubmitting: boolean;
}

const ContactForm = ({ onSubmit, isSubmitting }: ContactFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	return (
		<div className="space-y-8 slide-up">
			<div className="space-y-2">
				<div className="flex items-center gap-3">
					<MessageSquare className="h-6 w-6 text-primary" />
					<h2 className="text-2xl font-semibold">Send a Message</h2>
				</div>
				<p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input id="name" type="text" disabled={isSubmitting} {...register("name")} className="h-12" />
					{errors.name && <p className="text-destructive text-sm">{errors?.name?.message?.toString()}</p>}
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">Email Address</Label>
					<Input id="email" type="email" disabled={isSubmitting} {...register("email")} className="h-12" />
					{errors.email && <p className="text-destructive text-sm">{errors?.email?.message?.toString()}</p>}
				</div>

				<div className="space-y-2">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						{...register("message")}
						disabled={isSubmitting}
						className="min-h-[120px] resize-none"
					/>
					{errors.message && <p className="text-destructive text-sm">{errors?.message?.message?.toString()}</p>}
				</div>

				<Button type="submit" disabled={isSubmitting} className="w-full group">
					{isSubmitting ? (
						<>Sending...</>
					) : (
						<>
							Send Message
							<Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</>
					)}
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
