import { whyTrustUs } from "@/constants";
import Image from "next/image";

const WhyTrust = () => {
	return (
		<div className="py-16 bg-gray-100">
			<div className="container">
				<h2
					className={`uppercase text-2xl md:text-3xl text-primary font-semibold mb-2 md:mb-3`}
				>
					Why Trust Northampton Healthcare Pharmacy?
				</h2>
				<p className="text-base">
					We provide high-quality medical staffing, pharmaceutical
					supplies, home healthcare, and corporate healthcare
					partnerships tailored to your needs.
				</p>
				<div className="grid grid-col-1 md:grid-cols-2 mt-8 gap-8">
					{whyTrustUs.map(
						({ title, name, icon, description }, index) => (
							<div
								key={index}
								className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 rounded-2xl"
							>
								<div className="flex items-center justify-start gap-4">
									<Image
										src={icon}
										alt={`${name} icon`}
										width={1000}
										height={1000}
										className="w-16 h-1w-16"
									/>
									<h4 className="uppercase text-primary font-medium text-base md:text-lg">
										{title}
									</h4>
								</div>
								<p className="text-base text-muted-foreground mt-2">
									{description}
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default WhyTrust;
