import React from "react";
import SectionHeader from "./shared/SectionHeader";
import Image from "next/image";

const WhoWeAre = () => {
	return (
		<div className="bg-blue-100 py-16">
			<SectionHeader
				description={
					" Northampton Healthcare Facility Handlers Limited (NHFHL) is a leading healthcare provider dedicated to ensuring easy access to medical professionals, pharmaceutical supplies, and healthcare referrals. We simplify healthcare by connecting individuals, families, and businesses with trusted medical solutions—without the need for expensive hospital retainerships."
				}
				title={"Your trusted healthcare partner"}
				subTitle={"Who we are"}
			/>
			<div className="container">
				<div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
					<div className="flex items-center justify-start gap-4">
						<Image
							src={"/assets/icons/hospital.svg"}
							alt={"Hospital Icon"}
							width={1000}
							height={1000}
							className="w-16 h-1w-16"
						/>
						<h4 className="uppercase text-primary font-medium text-base leading-loose">
							Cost-Effective Healthcare solution
						</h4>
					</div>
					<p className="text-sm leading-loose text-gray-900 mt-2">
						We help hospitals, clinics, and individuals save money
						by providing doctors, nurses, and medical supplies on
						demand.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
