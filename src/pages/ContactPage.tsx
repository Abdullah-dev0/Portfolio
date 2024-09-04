import { socialLinks } from "@/constants";
import { useForm as useFormSpree } from "@formspree/react";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Zod schema for form validation
const formSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactPage = () => {
	const [state, handleSubmitSpree] = useFormSpree("xqazjbed");
	const [redirect, setRedirect] = useState(false);

	// For handling form with react-hook-form and zod validation
	const {
		register,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
	});

	useEffect(() => {
		if (state.succeeded) {
			const timer = setTimeout(() => {
				setRedirect(true);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [state.succeeded]);

	if (redirect) {
		return <Navigate to="/" replace={true} />;
	}

	if (state.succeeded) {
		return <p className="grid place-content-center h-[50vh] text-2xl">Thanks for a message !</p>;
	}

	if (state.errors) {
		toast.error("An error occurred, please try again later.");
		return <Navigate to="/" replace={true} />;
	}

	return (
		<section className="space-y-4 w-full max-w-screen-lg justify-center mx-auto px-8 lg:px-0">
			<p className="text-center text-2xl">Let's connect and build something cool together!</p>
			<div className="grid lg:grid-cols-2 justify-center items-center gap-6 max-sm:gap-y-12 grid-cols-1 ">
				<div className="">
					<form
						onSubmit={handleSubmitSpree}
						action="https://formspree.io/f/xqazjbed"
						method="post"
						className="space-y-4">
						<div>
							<Label htmlFor="name">Name</Label>
							<Input id="name" type="text" disabled={state.submitting} {...register("name")} />
							{errors.name && <p className="text-red-500 text-sm mt-1"></p>}
						</div>

						<div>
							<Label htmlFor="email">Email Address</Label>
							<Input id="email" type="email" disabled={state.submitting} {...register("email")} name="email" />
							{errors.email && <p className="text-red-500 text-sm mt-1">{errors.root?.message}</p>}
						</div>

						<div>
							<Label htmlFor="message">Message</Label>
							<Textarea id="message" {...register("message")} name="text" disabled={state.submitting} />
							{errors.message && <p className="text-red-500 text-sm mt-1">{errors.root?.message}</p>}
						</div>

						<Button type="submit" disabled={state.submitting} className="mt-4 w-full">
							Submit
						</Button>
					</form>
				</div>
				<div className="flex gap-5 flex-wrap justify-center max-w-[22rem] mx-auto">
					{socialLinks.map((link) => (
						<Link key={link.id} to={link.url} target="_blank">
							<button className="z-0 group relative box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 text-small gap-unit-2 [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none  data-[hover=true]:opacity-hover border backdrop-blur-2xl dark:bg-zinc-800/30 bg-zinc-900/85 text-white border-neutral-800  rounded-xl flex justify-center items-center p-5">
								<span className="flex gap-4 justify-center items-center text-lg">
									<img src={link.icon} alt={link.name} className={`h-7 w-7 ${link.className}`} />
									{link.name}
								</span>
							</button>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
