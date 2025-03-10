import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { Spotlight } from "./ui/spotlight-new";
import Image from "next/image";
import { pharmaceuticalServices } from "@/constants";

const PharmacyCategories = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-sky-100 py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader
				description={
					"At Northampton Healthcare Facility, we provide high-quality medications, seamless prescription fulfillment, and nationwide pharmaceutical distribution. Whether you're an individual, hospital, or business, our pharmacy services ensure you get the right medications, at the right time, with the best convenience. From doorstep deliveries to HMO support, we are committed to making healthcare affordable, accessible, and stress-free for all."
				}
				title={"Our Pharmaceutical Services"}
				subTitle={"Reliable & Affordable"}
				position={"center"}
			/>
			<div className="mt-16 container grid grid-cols-1 md:grid-cols-2 gap-8">
				{pharmaceuticalServices.map(
					({ icon, name, title, description }, index) => (
						<div
							key={index}
							className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-2xl"
						>
							<Image
								src={icon}
								alt={`${name} Icon`}
								width={1000}
								height={1000}
								className="w-32 h-32 mt-10"
							/>
							<h4 className="uppercase text-primary font-medium text-base leading-loose mt-8">
								{title}
							</h4>
							<p className="text-sm leading-loose text-gray-900 mt-2">
								{description}
							</p>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default PharmacyCategories;
