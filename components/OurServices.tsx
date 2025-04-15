import SectionHeader from "./shared/SectionHeader";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";
import { ourServices } from "@/constants";

const OurServices = () => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader
				description={
					"We are committed to making healthcare more accessible, affordable, and efficient by offering flexible solutions tailored to hospitals, clinics, and individuals."
				}
				title={"Quality Healthcare, Made Affordable"}
				// subTitle={"Our services"}
				position="left"
				color="secondary"
			/>
			<div className="grid grid-col-1 md:grid-cols-2 container mt-8 gap-4">
				{ourServices.map(({ title, description, image }, index) => (
					<div
						key={index}
						className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl text-center overflow-hidden group"
					>
						<Image
							src={image}
							alt={`${title} image`}
							width={1000}
							height={1000}
							className="aspect-video object-cover h-auto w-auto group-hover:scale-105 transition-all"
						/>
						<div className="p-8">
							<h4 className="uppercase text-secondary font-medium text-base md:text-lg">
								{title}
							</h4>
							<p className="text-base text-muted-foreground mt-1">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center container mt-10">
				<Button variant={"secondary"} size={"lg"} asChild>
					<Link href="/services">Explore our services</Link>
				</Button>
			</div>
		</div>
	);
};

export default OurServices;
