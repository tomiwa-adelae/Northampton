import React from "react";
import SectionHeader from "./shared/SectionHeader";
import { Spotlight } from "./ui/spotlight-new";
import Image from "next/image";

const WhatWeOffer = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-white py-16 relative overflow-hidden">
			{/* <Spotlight /> */}
			<SectionHeader
				description={
					"Northampton Healthcare provides comprehensive healthcare solutions, high-quality medical staffing, pharmaceutical supplies, home healthcare, and corporate healthcare partnerships tailored to your needs."
				}
				title={"What we offer"}
				position={"center"}
			/>
			<div className="container">
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-2 flex items-center justify-center order-2">
						<Image
							src={"/assets/icons/doctor.svg"}
							alt={"Doctor Icon"}
							width={1000}
							height={1000}
							className="w-60 h-60"
						/>
					</div>
					<div className="lg:col-span-3 order-1 md:order-2 flex items-start justify-center flex-col">
						<SectionHeader
							description={
								"NHFHL provides qualified, licensed, and highly skilled healthcare professionals to hospitals, clinics, businesses, and individuals. Whether you need temporary, full-time, or emergency medical staff, we ensure you get the best talent for your healthcare needs."
							}
							title={"Medical Staffing"}
							position={"left"}
							container={false}
						/>
					</div>
				</div>
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-3 flex items-start justify-center flex-col">
						<SectionHeader
							description={
								"We ensure access to high-quality, affordable medications and medical supplies for individuals, pharmacies, and healthcare institutions. NHFHL partners with trusted manufacturers and suppliers to deliver only genuine pharmaceutical products."
							}
							title={"Pharmaceutical Supply"}
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
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-2 flex items-center justify-center order-2">
						<Image
							src={"/assets/icons/house.svg"}
							alt={"House Icon"}
							width={1000}
							height={1000}
							className="w-60 h-60"
						/>
					</div>
					<div className="lg:col-span-3 order-1 md:order-2 flex items-start justify-center flex-col">
						<SectionHeader
							description={
								"NHFHL provides professional nursing and caregiving services to patients who need medical attention at home. Whether it's for elderly care, post-surgery recovery, or chronic illness management, our experienced healthcare providers ensure patients receive the best care."
							}
							title={"Home Healthcare Services"}
							position={"left"}
							container={false}
						/>
					</div>
				</div>
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-3 flex items-start justify-center flex-col">
						<SectionHeader
							description={
								"NHFHL provides customized healthcare solutions for businesses, HMOs, and corporate organizations. Our cost-effective healthcare plans help companies ensure their employees receive quality medical care while reducing long-term healthcare expenses."
							}
							title={"Corporate Healthcare Partnerships"}
							position={"left"}
							container={false}
						/>
					</div>
					<div className="lg:col-span-2 flex items-center justify-center">
						<Image
							src={"/assets/icons/hospital.svg"}
							alt={"Hospital Icon"}
							width={1000}
							height={1000}
							className="w-60 h-60"
						/>
					</div>
				</div>
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-2 flex items-center justify-center order-2">
						<Image
							src={"/assets/icons/clipboard.svg"}
							alt={"Clipboard Icon"}
							width={1000}
							height={1000}
							className="w-60 h-60"
						/>
					</div>
					<div className="lg:col-span-3 order-1 md:order-2 flex items-start justify-center flex-col">
						<SectionHeader
							description={
								"We work with trusted hospitals, diagnostic centers, and HMOs to ensure patients get the specialized care they need without delays. Whether you need a referral for advanced medical treatment or insurance guidance, NHFHL simplifies the process."
							}
							title={"Healthcare Referrals & HMO Support"}
							position={"left"}
							container={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
