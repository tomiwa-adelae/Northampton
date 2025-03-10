import ServiceCategories from "@/components/ServiceCategories";
import Showcase from "@/components/shared/Showcase";
import WhatWeOffer from "@/components/WhatWeOffer";
import { whatsappNumber } from "@/constants";

const page = () => {
	return (
		<div>
			<Showcase
				headline="Our Services – Quality Healthcare, Made Affordable"
				description="At Northampton Healthcare Facility, we provide expert medical staffing, pharmaceutical supply, home healthcare, and corporate healthcare solutions. Our goal is to bridge healthcare gaps, making high-quality services accessible to all."
				bgImage="/assets/images/showcase-bg-img.jpg"
				cta={[
					{ title: "Get Started", slug: "/contact" },
					{
						title: "Chat us now",
						slug: `https://wa.me/${whatsappNumber}`,
					},
				]}
			/>
			<WhatWeOffer />
			{/* <ServiceCategories /> */}
		</div>
	);
};

export default page;
