import React from "react";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";
import { whoWeAre } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";

const WhoWeAre = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-sky-100 py-16 relative overflow-hidden">
			<Spotlight
				gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 80%, .02) 50%, hsla(0, 0%, 70%, 0) 80%)"
				gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .06) 0, hsla(0, 0%, 80%, .02) 80%, transparent 100%)"
				gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 85%, .02) 80%, transparent 100%)"
			/>
			<SectionHeader
				description={
					" Northampton Healthcare Facility Handlers Limited (NHFHL) is a leading healthcare provider dedicated to ensuring easy access to medical professionals, pharmaceutical supplies, and healthcare referrals. We simplify healthcare by connecting individuals, families, and businesses with trusted medical solutions—without the need for expensive hospital retainerships."
				}
				title={"Your trusted healthcare partner"}
				subTitle={"Who we are"}
				position={"center"}
			/>
			<div className="grid grid-col-1 md:grid-cols-2 container mt-16 gap-8">
				{whoWeAre.map(({ title, icon, name, description }, index) => (
					<div
						key={index}
						className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-2xl"
					>
						<div className="flex items-center justify-start gap-4">
							<Image
								src={icon}
								alt={`${name} icon`}
								width={1000}
								height={1000}
								className="w-16 h-1w-16"
							/>
							<h4 className="uppercase text-primary font-medium text-base leading-loose">
								{title}
							</h4>
						</div>
						<p className="text-sm leading-loose text-gray-900 mt-2">
							{description}
						</p>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center container mt-10">
				<Button size={"lg"} asChild>
					<Link href="/about">Learn more about us</Link>
				</Button>
			</div>
		</div>
	);
};

export default WhoWeAre;
