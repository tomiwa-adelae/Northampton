import OurServices from "@/components/OurServices";
import Showcase from "@/components/Showcase";
import WhoWeAre from "@/components/WhoWeAre";
import React from "react";

const page = () => {
	return (
		<div>
			<Showcase />
			<WhoWeAre />
			<OurServices />
		</div>
	);
};

export default page;
