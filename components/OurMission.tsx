import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";

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
				<SectionHeader
					description={
						"To be the trusted name in healthcare delivery, offering real time value for money to our clients."
					}
					title={"Our Mission"}
					position={"left"}
					container={false}
				/>
			</div>
		</div>
	);
};

export default OurMission;
