import React from "react";

const SectionHeader = ({
	title,
	subTitle,
	description,
	position = "left",
	color = "primary",
}: {
	title: string;
	subTitle: string;
	description: string | React.ReactNode;
	position?: string;
	color?: string;
}) => {
	return (
		<div className={`container ${position === "center" && "text-center"}`}>
			<h4 className="uppercase text-sm lg:text-base font-medium">
				{subTitle}
			</h4>
			<h2
				className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose ${
					color === "primary" ? "text-primary" : "text-secondary"
				} font-semibold mt-4 mb-6`}
			>
				{title}
			</h2>
			<p className="text-sm leading-loose">{description}</p>
		</div>
	);
};

export default SectionHeader;
