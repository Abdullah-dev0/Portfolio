import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar, Github } from "lucide-react";

export default function GithubContribution() {
	const currentYear = new Date().getFullYear();
	const [selectedYear, setSelectedYear] = useState<number>(currentYear);

	const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];

	return (
		<div className="space-y-8">
			<div className="text-center space-y-4">
				<div className="flex items-center justify-center gap-3">
					<Github className="h-6 w-6 text-primary" />
					<h2 className="text-3xl md:text-4xl font-bold">GitHub Activity</h2>
				</div>
				<p className="text-muted-foreground">
					My coding journey visualized through contributions
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/50 rounded-lg">
				{years.map((year) => (
					<Button
						key={year}
						variant={selectedYear === year ? "default" : "ghost"}
						size="sm"
						onClick={() => setSelectedYear(year)}
						className="transition-all duration-200"
					>
						<Calendar className="mr-2 h-4 w-4" />
						{year}
					</Button>
				))}
			</div>

			<div className="flex justify-center">
				<div key={selectedYear} className="w-full max-w-4xl overflow-x-auto p-4 bg-card border border-border rounded-xl">
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