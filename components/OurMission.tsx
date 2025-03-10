import Image from "next/image";

const OurMission = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
			<div className="lg:col-span-2 flex items-center justify-center order-2">
				<Image
					src={"/assets/icons/hospital.svg"}
					alt={"Hospital Icon"}
					width={1000}
					height={1000}
					className="w-60 h-60"
				/>
			</div>
			<div className="lg:col-span-3 order-1 md:order-2 flex items-start justify-center flex-col">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose text-primary font-semibold mt-4 mb-6`}
				>
					Our Mission
				</h2>
				<p className="text-sm leading-loose">
					At Northampton Healthcare Facility, our mission is to
					provide top-notch, cost-effective healthcare services that
					prioritize quality, accessibility, and innovation. We are
					committed to delivering compassionate and professional
					medical solutions, ensuring that individuals, families, and
					businesses receive the care they deserve without financial
					strain. Through our dedicated team of medical professionals,
					pharmaceutical expertise, and strategic partnerships, we
					strive to make healthcare more affordable, efficient, and
					impactful across Nigeria and beyond.
				</p>
			</div>
		</div>
	);
};

export default OurMission;
