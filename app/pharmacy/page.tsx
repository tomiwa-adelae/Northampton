import PharmacyCategories from "@/components/PharmacyCategories";
import Contact from "@/components/shared/Contact";
import FAQs from "@/components/shared/FAQs";
import HaveEnquiry from "@/components/shared/HaveEnquiry";
import Showcase from "@/components/shared/Showcase";
import WhyTrust from "@/components/WhyTrust";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Northampton Pharmacy | Affordable Medications & Nationwide Delivery",
	description:
		"Order affordable, high-quality medications from NHFHL Pharmacy. We offer doorstep delivery, prescription fulfillment, and corporate medical supply solutions across Nigeria.",
	keywords:
		"Pharmacy in Nigeria, buy medicine online, prescription fulfillment, pharmacy delivery service, pharmaceutical supplier, HMO pharmacy, affordable medications, prof akinteye ademola, ademola, akinteye, simon akinteye",
};

const page = () => {
	return (
		<div>
			<Showcase
				headline="Your Trusted Pharmacy Partner for Quality Medications & Medical Supplies"
				description="At Northampton Healthcare Facility, we supply only certified, high-quality medications that meet regulatory standards. Whether you need prescription drugs, over-the-counter medications, or medical equipment, we are your reliable partner for pharmaceutical solutions."
				bgImage="/assets/images/pharmacy-showcase-bg-img.jpg"
			/>
			<PharmacyCategories />
			<WhyTrust />
			<HaveEnquiry />
			<FAQs />
			<Contact
				title={"Let's connect"}
				description={
					<>
						Whether you need medical staffing, pharmaceuticals, or a
						trusted healthcare partner, NHFHL is here for you. Let's
						work together to create a healthier future.
					</>
				}
				cta={[
					{ title: "Explore our services", slug: "/services" },
					{ title: "Contact us", slug: "/contact" },
				]}
			/>
		</div>
	);
};

export default page;
