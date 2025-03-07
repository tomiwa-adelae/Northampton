import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";

const OurServices = () => {
	return (
		<div className="bg-white py-16 relative">
			<Spotlight />
			<SectionHeader
				description={
					"We are committed to making healthcare more accessible, affordable, and efficient by offering flexible solutions tailored to hospitals, clinics, and individuals."
				}
				title={"Quality Healthcare, Made Affordable"}
				subTitle={"Our services"}
				position={"center"}
			/>
			<div className="grid grid-col-1 md:grid-cols-2 container mt-16 gap-8">
				<div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl text-center overflow-hidden group">
					<Image
						src={"/assets/images/services-img-one.jpg"}
						alt={"Medical Staffing image"}
						width={1000}
						height={1000}
						className="aspect-video object-cover h-auto w-auto group-hover:scale-105 transition-all"
					/>
					<div className="p-8">
						<h4 className="uppercase text-secondary font-medium text-base leading-loose">
							Medical Staffing 👨‍⚕️
						</h4>
						<p className="text-sm leading-loose text-gray-900 mt-2">
							Get access to licensed doctors and nurses for
							hospitals, clinics, and private care.
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center container mt-10">
				<Button variant={"secondary"} size={"lg"} asChild>
					<Link href="/about">Explore our services</Link>
				</Button>
			</div>
		</div>
	);
};

export default OurServices;
