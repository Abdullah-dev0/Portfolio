import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink, RefreshCw } from "lucide-react";
import { useState } from "react";

const ResumePage = () => {
	const [isDownloading, setIsDownloading] = useState(false);
	const [iframeKey, setIframeKey] = useState(0);

	const handleDownload = () => {
		setIsDownloading(true);
		const link = document.createElement("a");
		link.href = "/Abdullah.pdf";
		link.download = "Abdullah_Resume.pdf";
		link.click();
		setTimeout(() => setIsDownloading(false), 1000);
	};

	const handleReset = () => {
		setIframeKey((prevKey) => prevKey + 1);
	};

	return (
		<>
			<SEOHead
				title="Resume | Abdullah - Full Stack Developer"
				description="View and download Abdullah's professional resume - Full Stack Developer"
				url="/resume"
			/>

			{/* Header */}
			<div className="text-center space-y-4 mb-8">
				<div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full text-sm font-medium text-primary/90">
					<FileText className="h-4 w-4" />
					Updated • Sep 2025
				</div>

				<h1 className="text-2xl md:text-3xl font-bold">
					My <span className="text-gradient">Resume</span>
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Turning ideas into clean, reliable code — here's the paper trail.
				</p>

				<div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
					<a href="/Abdullah.pdf" target="_blank" rel="noopener noreferrer">
						<Button variant="outline" className="group">
							<ExternalLink className="mr-2 h-4 w-4" />
							Open in New Tab
						</Button>
					</a>
					<Button onClick={handleDownload} disabled={isDownloading} className="glow-effect">
						<Download className="mr-2 h-4 w-4" />
						{isDownloading ? "Downloading..." : "Download Resume"}
					</Button>
				</div>
			</div>

			<div className="mb-4 mx-auto flex justify-center">
				<Button onClick={handleReset} size={"sm"} variant="secondary">
					<RefreshCw className="mr-2 h-4 w-4" />
					Reset View
				</Button>
			</div>
			<iframe
				key={iframeKey}
				src="/Abdullah.pdf#toolbar=0&zoom=125&view=FitH"
				title="Abdullah's Resume"
				className="rounded-lg"
				style={{
					width: "100%",
					height: "600px",
					border: "none",
					pointerEvents: "auto",
					overflow: "hidden",
				}}
			/>

			{/* Mobile helper note */}
			<div className="bg-muted/30 px-4 py-3 text-sm text-muted-foreground text-center sm:hidden">
				Tip: For the best view on mobile, use "Open in New Tab"
			</div>
		</>
	);
};

export default ResumePage;
