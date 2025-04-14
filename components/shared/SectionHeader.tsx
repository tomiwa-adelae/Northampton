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
			<h4 className="uppercase text-sm md:text-base font-medium">
				{subTitle}
			</h4>
			<h2
				className={`uppercase text-2xl md:text-3xl ${
					color === "primary" ? "text-primary" : "text-secondary"
				} font-semibold mt-2 lg:mt-2.5 mb-3.5`}
			>
				{title}
			</h2>
			<p className="text-base">{description}</p>
		</div>
	);
};

export default SectionHeader;
