import OurServices from "@/components/OurServices";
import Contact from "@/components/shared/Contact";
import FAQs from "@/components/shared/FAQs";
import Showcase from "@/components/Showcase";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChoose from "@/components/WhyChoose";

const page = () => {
	return (
		<div>
			<Showcase />
			<WhoWeAre />
			<OurServices />
			<WhyChoose />
			<FAQs />
			<Contact />
		</div>
	);
};

export default page;
