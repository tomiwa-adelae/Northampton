import React from "react";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { whoWeAre } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const WhoWeAre = () => {
	return (
		<div className="bg-blue-900 py-16 relative overflow-hidden">
			<SectionHeader
				description={
					" Northampton Healthcare Facility Handlers Limited (NHFHL) is a leading healthcare provider dedicated to ensuring easy access to medical professionals, pharmaceutical supplies, and healthcare referrals. We simplify healthcare by connecting individuals, families, and businesses with trusted medical solutions without the need for expensive hospital retainerships."
				}
				title={"Your trusted healthcare partner"}
				position={"left"}
				color="white"
			/>
			<div className="grid grid-col-1 md:grid-cols-2 container mt-8 gap-4">
				{whoWeAre.map(({ title, icon, name, description }, index) => (
					<div
						key={index}
						className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-8 rounded-2xl"
					>
						<div className="flex items-center justify-start gap-4">
							<Image
								src={icon}
								alt={`${name} icon`}
								width={1000}
								height={1000}
								className="w-16 h-1w-16"
							/>
							<h4 className="uppercase text-primary font-medium text-base md:text-lg">
								{title}
							</h4>
						</div>
						<p className="text-base text-muted-foreground mt-2">
							{description}
						</p>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center container mt-8">
				<Button variant={"white"} size={"lg"} asChild>
					<Link href="/about">Learn more about us</Link>
				</Button>
			</div>
		</div>
	);
};

export default WhoWeAre;
