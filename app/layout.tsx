import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Информационная система театра",
	description: "Курсовая работа",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
		<body className={inter.className}>
		<Providers>
			<Navigation>{children}</Navigation>
		</Providers>
		</body>
		</html>
	);
}
