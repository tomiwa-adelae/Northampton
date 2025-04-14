import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";
import { whyChoose } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";

const WhyChoose = () => {
	return (
		<div className="bg-blue-100 py-16">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
				<Image
					src={"/assets/images/doctors.jpg"}
					alt={"A group a doctors and nurses"}
					width={1000}
					height={1000}
					className="aspect-video object-cover rounded-lg"
				/>
				<div className="flex flex-col items-center justify-center">
					<SectionHeader
						description={
							"At Northampton Healthcare Facility, we are revolutionizing the way individuals and businesses access healthcare. Our goal is to provide high-quality medical staffing, pharmaceutical supplies, and healthcare solutions at cost-effective rates. With a team of experienced professionals and a commitment to excellence, we ensure that healthcare remains accessible, reliable, and tailored to your needs."
						}
						title={"Redefining Healthcare Access"}
						subTitle={"Why Choose Northampton"}
						position="left"
					/>
				</div>
			</div>
			<div className="mt-16 container grid grid-cols-1 md:grid-cols-2 gap-4">
				{whyChoose.map(({ icon, name, title }, index) => (
					<div
						key={index}
						className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center justify-start gap-4 rounded-2xl p-8"
					>
						<Image
							src={icon}
							alt={`${name} icon`}
							width={1000}
							height={1000}
							className="w-10 h-10 lg:w-14 lg:h-14"
						/>
						<h4 className="uppercase font-medium text-base text-primary">
							{title}
						</h4>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center container mt-10">
				<Button size={"lg"} asChild>
					<Link href="/contact">Get started today</Link>
				</Button>
			</div>
		</div>
	);
};

export default WhyChoose;
