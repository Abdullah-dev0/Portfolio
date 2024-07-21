import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<>
			<div className="grid min-h-[65vh] place-content-center gap-5 lg:p-0 px-5">
				<h1 className="sm:text-3xl text-xl">404 | Page Not Found</h1>
				<Button className=" hover:opacity-80">
					<Link to="/" className="text-lg">
						Go back to Home
					</Link>
				</Button>
			</div>
		</>
	);
};

export default ErrorPage;
