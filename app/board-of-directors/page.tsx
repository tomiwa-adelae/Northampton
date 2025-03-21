import OurTeams from "@/components/OurTeams";
import Contact from "@/components/shared/Contact";
import Showcase from "@/components/shared/Showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Northampton Board of Directors | Meet Our Leadership Team",
	description:
		"Meet the Board of Directors at Northampton Healthcare Facility—the experts driving strategic healthcare solutions and corporate growth.",
	keywords:
		"Healthcare leadership, NHFHL board members, medical governance, trusted healthcare provider, corporate healthcare management, prof akinteye ademola, ademola, akinteye, simon akinteye",
};

const page = () => {
	return (
		<div>
			<Showcase
				headline="Meet Our Board of Directors"
				description="Northampton Healthcare Facility is governed by a dedicated Board of Directors committed to ensuring excellence in healthcare service delivery. Their leadership drives our mission to provide affordable, high-quality medical solutions for individuals, businesses, and healthcare institutions."
				bgImage="/assets/images/contact-showcase-bg-img.jpg"
			/>
			<OurTeams />
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
