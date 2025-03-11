import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WhatsappIcon from "@/components/shared/WhatsappIcon";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Northampton Healthcare Facility | Affordable Medical & Pharmacy Services",
	description:
		"NHFHL provides affordable healthcare solutions, including medical staffing, pharmaceutical supply, and HMO support. Get expert care, quality medications, and seamless health solutions today!",
	keywords:
		"Healthcare services, medical staffing, pharmacy delivery, corporate healthcare, HMO support, home healthcare, trusted healthcare provider in Nigeria, prof akinteye ademola, ademola, akinteye, simon akinteye",
	openGraph: {
		images: "/assets/images/opengraph.jpg",
	},
	metadataBase: new URL("https://northampton-theta.vercel.app"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta property="og:image" content="/opengraph.jpg" />
				<meta
					property="og:image"
					content="/assets/images/opengraph.jpg"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
			</Head>
			<body className={montserrat.className}>
				<Header />
				{children}
				<WhatsappIcon />
				<Footer />
			</body>
		</html>
	);
}
