import Contact from "@/components/shared/Contact";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/shared/Showcase";
import WhatWeOffer from "@/components/WhatWeOffer";
import { whatsappNumber } from "@/constants";

const page = () => {
	return (
		<div>
			<Showcase
				headline="Our Services – Quality Healthcare, Made Affordable"
				description="At Northampton Healthcare Facility, we provide expert medical staffing, pharmaceutical supply, home healthcare, and corporate healthcare solutions. Our goal is to bridge healthcare gaps, making high-quality services accessible to all."
				bgImage="/assets/images/contact-showcase-bg-img.jpg"
				cta={[
					{ title: "Get Started", slug: "/contact" },
					{
						title: "Chat us now",
						slug: `https://wa.me/${whatsappNumber}`,
					},
				]}
			/>
			<WhatWeOffer />
			<FAQs />
			<Contact
				title={"Let's connect"}
				description={
					<>
						We will love to connect with you. For your health needs,
						inquiries, suggestions or feedback simply hit the{" "}
						<b>‘Get in touch’</b> button let’s connect.
					</>
				}
				cta={[{ title: "Get in Touch", slug: "/contact" }]}
			/>
		</div>
	);
};

export default page;
