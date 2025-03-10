import CoreValues from "@/components/CoreValues";
import OurMission from "@/components/OurMission";
import OurStory from "@/components/OurStory";
import OurVision from "@/components/OurVision";
import Contact from "@/components/shared/Contact";
import Showcase from "@/components/shared/Showcase";

const page = () => {
	return (
		<div>
			<Showcase
				headline="About Northampton Healthcare Facility"
				description="We are a trusted healthcare provider offering innovative solutions that make quality medical care accessible and affordable. Our mission is to bridge the gap in healthcare delivery by providing top-notch medical staffing, pharmaceutical supplies, and healthcare referrals—ensuring that individuals, families, and businesses receive the best care possible."
				bgImage="/assets/images/about-showcase-bg-img.jpg"
			/>
			<OurStory />
			<OurMission />
			<OurVision />
			<CoreValues />
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
