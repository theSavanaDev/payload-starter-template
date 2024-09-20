import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import ThemeProvider from "@/providers/theme";

import "@/frontend/global.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("flex h-screen flex-col font-sans antialiased", fontSans.variable)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<header className="text-center">Header Goes Here</header>

					<main>{children}</main>

					<footer className="mt-auto text-center">Footer Goes Here</footer>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
