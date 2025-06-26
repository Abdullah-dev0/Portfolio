import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar, Github, TrendingUp } from "lucide-react";

export default function GithubContribution() {
	const currentYear = new Date().getFullYear();
	const [selectedYear, setSelectedYear] = useState<number>(currentYear);

	const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];

	return (
		<div className="flex-col w-full mt-20 rounded-lg shadow-sm md:flex hidden">
			<div className="flex items-center gap-2 mb-4">
				<Github size={20} className="text-primary" />
				<h3 className="md:text-2xl text-lg font-semibold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
					GitHub Contributions
				</h3>
			</div>

			<div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/50 rounded-lg slide-up">
				{years.map((year) => (
					<Button
						key={year}
						variant={selectedYear === year ? "default" : "ghost"}
						size="sm"
						onClick={() => setSelectedYear(year)}
						className="transition-all duration-200">
						<Calendar className="mr-2 h-4 w-4" />
						{year}
					</Button>
				))}
			</div>

			<div className="flex justify-center scale-in py-6">
				<div key={selectedYear} className="w-full max-w-5xl overflow-x-auto card-spacing card-subtle">
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<TrendingUp className="h-4 w-4" />
							<span>Contributions in {selectedYear}</span>
						</div>
						<a
							href="https://github.com/Abdullah-dev0"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-primary hover:underline">
							View on GitHub
						</a>
					</div>
					<GitHubCalendar
						username="Abdullah-dev0"
						fontSize={12}
						blockSize={12}
						blockRadius={3}
						year={selectedYear}
						colorScheme="dark"
					/>
				</div>
			</div>
		</div>
	);
}
