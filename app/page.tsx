import OurServices from "@/components/OurServices";
import Contact from "@/components/shared/Contact";
import FAQs from "@/components/shared/FAQs";
import HaveEnquiry from "@/components/shared/HaveEnquiry";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChoose from "@/components/WhyChoose";

const page = () => {
	return (
		<div>
			<ShowcaseCarousel />
			<WhoWeAre />
			<OurServices />
			<WhyChoose />
			<HaveEnquiry />
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
