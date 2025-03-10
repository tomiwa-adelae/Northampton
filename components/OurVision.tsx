import Image from "next/image";

const OurVision = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
			<div className="lg:col-span-3 flex items-start justify-center flex-col">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose text-primary font-semibold mt-4 mb-6`}
				>
					Our Vision
				</h2>
				<p className="text-sm leading-loose">
					At Northampton Healthcare Facility, our vision is to become
					the leading force in healthcare delivery across Africa,
					ensuring that quality medical services are accessible,
					affordable, and patient-centered. We aim to revolutionize
					healthcare by leveraging innovation, strategic partnerships,
					and a commitment to excellence. Our goal is to bridge
					healthcare gaps, empower medical professionals, and create
					sustainable solutions that enhance the well-being of
					individuals, families, and businesses. Through continuous
					growth and advancement, we strive to set new standards in
					healthcare accessibility and efficiency.
				</p>
			</div>
			<div className="lg:col-span-2 flex items-center justify-center">
				<Image
					src={"/assets/icons/world-map.svg"}
					alt={"World map Icon"}
					width={1000}
					height={1000}
					className="w-60 h-60"
				/>
			</div>
		</div>
	);
};

export default OurVision;
