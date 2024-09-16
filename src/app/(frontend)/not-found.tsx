import Link from "next/link";

import { Button } from "@/components/ui/button";
import LayoutContainer from "@/components/layout-container";

const NotFound = () => {
	return (
		<LayoutContainer>
			<div className="py-64">
				<div className="prose max-w-none">
					<h1 style={{ marginBottom: 0 }}>404</h1>
					<p className="mb-4">The page you are looking for could not be found.</p>
				</div>

				<Button asChild variant="default">
					<Link href="/">Go Home</Link>
				</Button>
			</div>
		</LayoutContainer>
	);
};

export default NotFound;
