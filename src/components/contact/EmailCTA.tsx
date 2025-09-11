import { Button } from "@/components/ui/button";
import { contactEmail } from "@/constants";
import { Mail } from "lucide-react";

const EmailCTA = () => {
	return (
		<div className="relative overflow-hidden border border-border rounded-2xl p-8 bg-gradient-to-br from-background via-background to-primary/5 group">
			<div
				className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
				style={{ background: "radial-gradient(circle at 30% 30%, rgba(var(--primary-rgb),0.15), transparent 70%)" }}
			/>
			<div className="relative space-y-6 text-center">
				<h2 className="text-3xl font-bold tracking-tight">Let’s Build Something</h2>
				<p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
					Whether it’s an idea, an opportunity, or an exciting project — I’d love to hear from you. Let’s connect and
					make it happen!
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button asChild size="lg" className="gap-2">
						<a href={`mailto:${contactEmail}`} aria-label="Send me an email">
							<Mail className="h-5 w-5" /> Email Me
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EmailCTA;
