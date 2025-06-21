import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GithubContribution() {
	const currentYear = new Date().getFullYear();
	const [selectedYear, setSelectedYear] = useState<number>(currentYear);

	const selectedStyle = "bg-blue-500 text-white dark:bg-blue-600 shadow-sm";

	return (
		<div className="flex flex-col w-full mt-20 rounded-lg shadow-sm">
			<div className="flex items-center gap-2 mb-4">
				<Github size={20} className="text-primary" />
				<h3 className="md:text-2xl text-lg font-semibold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
					GitHub Contributions
				</h3>
			</div>

			<div className="flex mb-6 bg-muted p-1 justify-between rounded-lg">
				<Button
					variant="ghost"
					onClick={() => setSelectedYear(currentYear - 3)}
					className={`transition-all duration-200 ${
						selectedYear === currentYear - 3 ? selectedStyle : "hover:bg-white/50 dark:hover:bg-slate-800/50"
					}`}>
					<Calendar size={16} className="mr-2" />
					{currentYear - 3}
				</Button>
				<Button
					variant="ghost"
					onClick={() => setSelectedYear(currentYear - 2)}
					className={`transition-all duration-200 ${
						selectedYear === currentYear - 2 ? selectedStyle : "hover:bg-white/50 dark:hover:bg-slate-800/50"
					}`}>
					<Calendar size={16} className="mr-2" />
					{currentYear - 2}
				</Button>
				<Button
					variant="ghost"
					onClick={() => setSelectedYear(currentYear - 1)}
					className={`transition-all duration-200 ${
						selectedYear === currentYear - 1 ? selectedStyle : "hover:bg-white/50 dark:hover:bg-slate-800/50"
					}`}>
					<Calendar size={16} className="mr-2" />
					{currentYear - 1}
				</Button>

				<Button
					variant="ghost"
					onClick={() => setSelectedYear(currentYear)}
					className={cn(
						"transition-all duration-200",
						selectedYear === currentYear ? selectedStyle : "hover:bg-white/50 dark:hover:bg-slate-800/50",
					)}>
					<Calendar size={16} className="mr-2" />
					{currentYear}
				</Button>
			</div>

			<div key={selectedYear} className="w-full overflow-x-auto pb-4 transition-opacity duration-300 ease-in-out">
				<GitHubCalendar
					username="Abdullah-dev0"
					fontSize={14}
					blockSize={12}
					blockRadius={3}
					year={selectedYear}
					colorScheme="dark"
				/>
			</div>
		</div>
	);
}
