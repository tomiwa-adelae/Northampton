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
					"We provide high-quality medical staffing, pharmaceutical supplies, home healthcare, and corporate healthcare partnerships tailored to your needs."
				}
				title={"Comprehensive Healthcare Solutions"}
				subTitle={"What we offer"}
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
						<h2
							className={`uppercase text-2xl md:text-3xl text-primary font-semibold mt-4 mb-2`}
						>
							Medical Staffing
						</h2>
						<p className="text-base">
							NHFHL provides qualified, licensed, and highly
							skilled healthcare professionals to hospitals,
							clinics, businesses, and individuals. Whether you
							need temporary, full-time, or emergency medical
							staff, we ensure you get the best talent for your
							healthcare needs.
						</p>
					</div>
				</div>
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-3 flex items-start justify-center flex-col">
						<h2
							className={`uppercase text-2xl md:text-3xl text-primary font-semibold mt-4 mb-2`}
						>
							Pharmaceutical Supply
						</h2>
						<p className="text-base">
							We ensure access to high-quality, affordable
							medications and medical supplies for individuals,
							pharmacies, and healthcare institutions. NHFHL
							partners with trusted manufacturers and suppliers to
							deliver only genuine pharmaceutical products.
						</p>
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
						<h2
							className={`uppercase text-2xl md:text-3xl text-primary font-semibold mt-4 mb-2`}
						>
							Home Healthcare Services
						</h2>
						<p className="text-base">
							NHFHL provides professional nursing and caregiving
							services to patients who need medical attention at
							home. Whether it's for elderly care, post-surgery
							recovery, or chronic illness management, our
							experienced healthcare providers ensure patients
							receive the best care.
						</p>
					</div>
				</div>
				<div className="pt-10 md:pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative overflow-hidden">
					<div className="lg:col-span-3 flex items-start justify-center flex-col">
						<h2
							className={`uppercase text-2xl md:text-3xl text-primary font-semibold mt-4 mb-2`}
						>
							Corporate Healthcare Partnerships
						</h2>
						<p className="text-base">
							NHFHL provides customized healthcare solutions for
							businesses, HMOs, and corporate organizations. Our
							cost-effective healthcare plans help companies
							ensure their employees receive quality medical care
							while reducing long-term healthcare expenses.
						</p>
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
						<h2
							className={`uppercase text-2xl md:text-3xl text-primary font-semibold mt-4 mb-2`}
						>
							Healthcare Referrals & HMO Support
						</h2>
						<p className="text-base">
							We work with trusted hospitals, diagnostic centers,
							and HMOs to ensure patients get the specialized care
							they need without delays. Whether you need a
							referral for advanced medical treatment or insurance
							guidance, NHFHL simplifies the process.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
