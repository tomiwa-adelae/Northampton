import { coreValues } from "@/constants";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";

const CoreValues = () => {
	return (
		<div className="container pt-4 md:pt-16 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
			<Spotlight />
			<div className="lg:col-span-2 flex items-center justify-center order-2">
				<Image
					src={"/assets/icons/shield.svg"}
					alt={"Shield Icon"}
					width={1000}
					height={1000}
					className="w-60 h-60"
				/>
			</div>
			<div className="lg:col-span-3 order-1 md:order-2">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose text-primary font-semibold mt-4 mb-6`}
				>
					Our Core Values
				</h2>
				<div className="grid gap-6">
					{coreValues.map(({ icon, name, details }, index) => (
						<div
							key={index}
							className="text-sm flex items-center justify-start gap-4"
						>
							<Image
								src={icon}
								alt={name}
								width={1000}
								height={1000}
								className="w-6 h-6"
							/>
							<h4>{details}</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
