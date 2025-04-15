import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const Contact = ({
	title,
	description,
	cta,
}: {
	title: string;
	description: React.ReactNode;
	cta?: any;
}) => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-sky-100 pt-16 md:pt-8">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex items-start flex-col justify-center">
					<SectionHeader
						description={description}
						title={title}
						position="left"
						container={false}
					/>
					<div className="mt-6 flex md:flex-col lg:flex-row items-center justify-start gap-4">
						{cta.map(
							(
								action: { slug: string; title: string },
								index: number
							) => (
								<Button
									variant={
										index === 0 ? "default" : "secondary"
									}
									asChild
									size={"lg"}
									key={index}
									className="w-full"
								>
									<Link href={action.slug}>
										{action.title}
									</Link>
								</Button>
							)
						)}
					</div>
				</div>
				<div className="flex items-center justify-center md:justify-end">
					<Image
						src={"/assets/images/contact-man.png"}
						alt={"A man with a headphone like a customer service"}
						width={1000}
						height={1000}
						className="w-auto h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
