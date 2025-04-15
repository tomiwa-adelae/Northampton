import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";

const OurStory = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
			<div className="lg:col-span-3 flex items-start justify-center flex-col">
				<SectionHeader
					description={
						"For years, accessing affordable healthcare has been a challenge. Northampton Healthcare Facility was established to change that. We believe that no one should struggle to find quality medical professionals or medications. That’s why we provide seamless, cost-effective healthcare solutions tailored to individuals, businesses, and medical institutions."
					}
					title={"Our Story"}
					position={"left"}
					container={false}
				/>
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
