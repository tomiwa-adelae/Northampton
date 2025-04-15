import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";

const OurVision = () => {
	return (
		<div className="container pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
			<div className="lg:col-span-3 flex items-start justify-center flex-col">
				<SectionHeader
					description={
						"To be the provider of choice for healthcare delivery in Africa."
					}
					title={"Our Vision"}
					position={"left"}
					container={false}
				/>
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
