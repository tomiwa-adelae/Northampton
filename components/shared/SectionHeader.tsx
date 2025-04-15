import React from "react";

const SectionHeader = ({
	title,
	subTitle,
	description,
	position = "left",
	color = "primary",
	container = true,
}: {
	title: string;
	subTitle?: string;
	description?: string | React.ReactNode;
	position?: string;
	color?: string;
	container?: boolean;
}) => {
	return (
		<div
			className={`${container && "container"} ${
				color === "white" && "text-white"
			} ${position === "center" && "text-center"}`}
		>
			<h4 className="uppercase text-sm md:text-base font-medium">
				{subTitle}
			</h4>
			<h2
				className={`uppercase text-2xl md:text-3xl ${
					color === "primary"
						? "text-primary"
						: color === "white"
						? "text-white"
						: "text-secondary"
				} font-semibold mb-3.5`}
			>
				{title}
			</h2>
			<p className="text-base">{description}</p>
		</div>
	);
};

export default SectionHeader;
