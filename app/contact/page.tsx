import ContactDetails from "@/components/ContactDetails";
import { ContactForm } from "@/components/forms/ContactForm";
import Contact from "@/components/shared/Contact";
import Showcase from "@/components/shared/Showcase";
import { whatsappNumber } from "@/constants";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
	ssr: false,
});

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Northampton | Get in Touch for Healthcare & Pharmacy Solutions",
	description:
		"Need help? Contact Northampton Healthcare Facility for medical staffing, pharmacy orders, corporate healthcare, and HMO support. Call, email, or visit us today!",
	keywords:
		"Contact NHFHL, healthcare support, medical inquiries, pharmacy orders, get healthcare assistance, call NHFHL, medical services in Nigeria, prof akinteye ademola, ademola, akinteye, simon akinteye",
};

const page = () => {
	return (
		<div>
			<Showcase
				headline="Get in Touch with Us"
				description="Whether you're an individual seeking medical care, a business looking for healthcare solutions, or a partner looking to collaborate, we’re here to assist you. Reach out to us today!"
				bgImage="/assets/images/contact-showcase-bg-img.jpg"
				cta={[
					{
						slug: `https://wa.me/${whatsappNumber}`,
						title: "Chat on Whatsapp",
					},
				]}
				image="/assets/images/contact-man.png"
			/>
			<ContactDetails />
			<ContactForm />
			<LeafletMap />
			<Contact
				title={"Join Us in Transforming Healthcare"}
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
