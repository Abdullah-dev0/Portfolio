import { Building2, GraduationCapIcon, MapPin, Calendar } from "lucide-react";

const AboutMe = () => {
	return (
		<div className="section-spacing">
			<div className="container-custom max-w-4xl">
				<div className="space-y-16">
					{/* Header */}
					<div className="text-center space-y-6 fade-in">
						<h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							I'm a <span className="text-primary font-semibold">Full Stack Developer</span> passionate about 
							creating exceptional web experiences. I love building interactive and responsive applications 
							using modern technologies.
						</p>
					</div>

					{/* Mission Statement */}
					<div className="bg-card border border-border rounded-xl p-8 slide-up">
						<p className="text-lg leading-relaxed text-center">
							I am targeting <span className="text-primary font-semibold">Full Stack Developer</span> roles 
							with organizations of high repute, seeking opportunities for continuous learning and 
							<span className="text-primary font-semibold"> career growth</span> while contributing to 
							innovative projects.
						</p>
					</div>

					{/* Work Experience */}
					<section className="space-y-8">
						<h2 className="text-3xl font-bold text-center">Work Experience</h2>
						
						<div className="space-y-6">
							{/* Current Role */}
							<div className="bg-card border border-border rounded-xl p-6 card-hover">
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
									<div className="space-y-4 flex-1">
										<h3 className="text-xl font-semibold">Full Stack Engineer</h3>
										<div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
											<div className="flex items-center gap-2">
												<Building2 className="h-4 w-4" />
												<a 
													href="https://bizofdev.com/" 
													target="_blank" 
													rel="noopener noreferrer"
													className="hover:text-primary transition-colors"
												>
													Biz of Dev
												</a>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4" />
												<span>Islamabad, Pakistan</span>
											</div>
										</div>
									</div>
									<div className="space-y-2 lg:text-right">
										<span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
											Full Time
										</span>
										<div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end">
											<Calendar className="h-4 w-4" />
											<span>January 2025 - Present</span>
										</div>
									</div>
								</div>
							</div>

							{/* Previous Role */}
							<div className="bg-card border border-border rounded-xl p-6 card-hover">
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
									<div className="space-y-4 flex-1">
										<h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
										<div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
											<div className="flex items-center gap-2">
												<Building2 className="h-4 w-4" />
												<span>DevelopersHub Corporation</span>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4" />
												<span>Islamabad, Pakistan</span>
											</div>
										</div>
									</div>
									<div className="space-y-2 lg:text-right">
										<span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
											Internship
										</span>
										<div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end">
											<Calendar className="h-4 w-4" />
											<span>Sep 2024 - Nov 2024</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Education */}
					<section className="space-y-8">
						<h2 className="text-3xl font-bold text-center">Education</h2>
						
						<div className="bg-card border border-border rounded-xl p-6 card-hover">
							<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
								<div className="space-y-4 flex-1">
									<h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
									<div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
										<div className="flex items-center gap-2">
											<GraduationCapIcon className="h-4 w-4" />
											<span>University of Gujrat</span>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-4 w-4" />
											<span>Pakistan</span>
										</div>
									</div>
								</div>
								<div className="space-y-2 lg:text-right">
									<span className="inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full">
										Full Time
									</span>
									<div className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end">
										<Calendar className="h-4 w-4" />
										<span>Sep 2021 - August 2025</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;