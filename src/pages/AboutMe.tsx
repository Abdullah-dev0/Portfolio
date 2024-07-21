import { Building2, GraduationCapIcon, MapPin } from "lucide-react";

const AboutMe = () => {
	return (
		<div className="space-y-9">
			<h2 className="text-4xl max-sm:text-3xl">About Me</h2>

			<p className="text-lg font-semibold text-white">
				I'm a <span className="text-red-600 px-1">Full Stack Developer</span> based in
				<span className="text-red-600 px-1">Pakistan</span>. I have a passion for
				<span className="text-red-600 px-1">web development</span> and love to create interactive and responsive
				<span className="text-red-600 px-1">websites</span>. I am currently pursuing my
				<span className="text-red-600 px-1">Bachelor's degree</span> in
				<span className="text-red-600 px-1">Information Technology</span>. I am always eager to learn new
				<span className="text-red-600 px-1">technologies</span> and improve my
				<span className="text-red-600 px-1">skills</span>.
				<span className="block mt-3">
					I am <span className="text-red-600 px-1">Targeting</span>
					<span className="text-red-600 px-1">Full Stack Developer</span> roles with an organization of high repute with
					a scope of improving
					<span className="text-red-600 px-1">knowledge</span> and further
					<span className="text-red-600 px-1">career growth</span>.
				</span>
			</p>
			<h1 className="text-4xl max-sm:text-3xl">Work Experience</h1>

			<div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0 sm:space-x-4">
				<div className="space-y-2">
					<h2 className="text-xl sm:text-2xl font-semibold">Intern - Full Stack Developer</h2>
					<div className="flex flex-col sm:flex-row gap-2 text-sm">
						<p className="flex items-center gap-1">
							<Building2 size={18} />
							EchoSoft Solutions
						</p>
						<p className="flex items-center gap-1">
							<MapPin size={18} />
							Gujrat, Pakistan
						</p>
					</div>
				</div>
				<div className="space-y-2 text-right sm:text-left">
					<p className="bg-green-500 text-sm text-white py-1 px-3 rounded-xl w-fit sm:ml-auto">Internship</p>
					<p className="text-sm">Sep 2022 - Mar 2023</p>
				</div>
			</div>
			<h1 className="text-4xl max-sm:text-3xl">Education</h1>

			<div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0 sm:space-x-4">
				<div className="space-y-2">
					<h2 className="text-xl  font-semibold">Bachelor of Science in Imformation Tecnology</h2>
					<div className="flex flex-col sm:flex-row gap-2 text-sm">
						<p className="flex items-center gap-1">
							<GraduationCapIcon size={18} />
							University of Gujrat
						</p>
						<p className="flex items-center gap-1">
							<MapPin size={18} />
							Pakistan
						</p>
					</div>
				</div>
				<div className="space-y-2 text-right sm:text-left">
					<p className="bg-green-500 text-sm text-white py-1 px-3 rounded-xl w-fit sm:ml-auto">Full Time</p>
					<p className="text-sm">Sep 2021 - present</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;