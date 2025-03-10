import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="bg-blue-900 py-8 text-center text-white font-medium uppercase text-xs lg:text-sm">
			<div className="container">
				<p>
					&copy; {year} Northhampton Healthcare. All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
