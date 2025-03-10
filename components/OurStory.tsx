import Image from "next/image";
import React from "react";
import { Spotlight } from "./ui/spotlight-new";

const OurStory = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
			<Spotlight />
			<div className="lg:col-span-3">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose text-primary font-semibold mt-4 mb-6`}
				>
					Our Story
				</h2>
				<p className="text-sm leading-loose">
					For years, accessing affordable healthcare has been a
					challenge. Northampton Healthcare Facility was established
					to change that. We believe that no one should struggle to
					find quality medical professionals or medications. That’s
					why we provide seamless, cost-effective healthcare solutions
					tailored to individuals, businesses, and medical
					institutions.
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
	);
};

export default OurStory;
