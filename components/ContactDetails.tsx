import { contactDetails } from "@/constants";
import Image from "next/image";

const ContactDetails = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-sky-100 py-16 relative overflow-hidden">
			<div className="container">
				<h2
					className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose md:leading-loose lg:leading-normal  font-semibold mb-2 text-center text-primary`}
				>
					Reach us anytime
				</h2>
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{contactDetails.map(
						({ icon, details, title, name }, index) => (
							<div
								key={index}
								className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 py-8 rounded-2xl group"
							>
								<Image
									src={icon}
									alt={`${name} Icon`}
									width={1000}
									height={1000}
									className="w-12 h-12 mt-10"
								/>
								<h4 className="uppercase text-primary font-semibold text-base leading-loose mt-8">
									{title}
								</h4>
								<div className="flex flex-wrap items-center justify-start gap-4">
									{details.map((detail, idx) => (
										<a
											href={
												index + 1 === 2
													? `tel:${detail}`
													: index + 1 === 3
													? `mailto:${detail}`
													: "#"
											}
											key={idx}
											className="group-hover:text-secondary transition-all text-xs font-medium leading-loose text-gray-900 mt-2 break-words"
										>
											{detail}
										</a>
									))}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;
