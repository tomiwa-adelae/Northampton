import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { Spotlight } from "./ui/spotlight-new";
import Image from "next/image";

const WhatWeOffer = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-white py-16 relative overflow-hidden">
			<Spotlight />
			<SectionHeader
				description={
					"We provide high-quality medical staffing, pharmaceutical supplies, home healthcare, and corporate healthcare partnerships tailored to your needs."
				}
				title={"Comprehensive Healthcare Solutions"}
				subTitle={"What we offer"}
				position={"center"}
			/>
			<div>
				<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-3">
						<h2
							className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose text-primary font-semibold mt-4 mb-6`}
						>
							Medical Staffing
						</h2>
						<p className="text-sm leading-loose">
							NHFHL provides qualified, licensed, and highly
							skilled healthcare professionals to hospitals,
							clinics, businesses, and individuals. Whether you
							need temporary, full-time, or emergency medical
							staff, we ensure you get the best talent for your
							healthcare needs.
						</p>
					</div>
					<div className="lg:col-span-2 flex items-center justify-center">
						<Image
							src={"/assets/icons/medicine.svg"}
							alt={"Medicine Icon"}
							width={1000}
							height={1000}
							className="w-60 h-60"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
