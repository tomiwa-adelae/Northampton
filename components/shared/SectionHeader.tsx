import React from "react";

const SectionHeader = ({
	title,
	subTitle,
	description,
}: {
	title: string;
	subTitle: string;
	description: string | React.ReactNode;
}) => {
	return (
		<div className="container text-center">
			<h4 className="uppercase text-sm lg:text-base font-medium">
				{subTitle}
			</h4>
			<h2 className="uppercase text-xl md:text-2xl lg:text-3xl leading-loose text-primary font-semibold mt-4 mb-6">
				{title}
			</h2>
			<p className="text-sm leading-loose">{description}</p>
		</div>
	);
};

export default SectionHeader;
