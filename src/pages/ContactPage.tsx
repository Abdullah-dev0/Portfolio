import { socialLinks } from "@/constants";
import { Link } from "react-router-dom";

const ContactPage = () => {
	return (
		<>
			<section className="flex justify-center items-center flex-col gap-7 ">
				<h1 className="text-4xl max-sm:text-2xl ">CONTACT</h1>
				<p className="text-center">Let's connect and build something cool together!</p>
				<div className="flex gap-5 flex-wrap justify-center">
					{socialLinks.map((link) => (
						<Link key={link.id} to={link.url} target="_blank">
							<button className="z-0 group relative box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 text-small gap-unit-2 [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none  data-[hover=true]:opacity-hover border backdrop-blur-2xl dark:bg-zinc-800/30 bg-zinc-900/85 text-white border-neutral-800  rounded-xl flex justify-center items-center p-5">
								<span className="flex gap-4  justify-center items-center text-lg">
									<img src={link.icon} alt={link.name} className={`h-7 w-7 ${link.className}`} />
									{link.name}
								</span>
							</button>
						</Link>
					))}
				</div>
			</section>
		</>
	);
};

export default ContactPage;
