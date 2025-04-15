import { contactDetails } from "@/constants";
import Image from "next/image";

const ContactDetails = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-sky-100 py-16 relative overflow-hidden">
			<div className="container">
				<h2
					className={`uppercase text-2xl md:text-3xl font-semibold mb-2 text-center text-primary`}
				>
					Reach us anytime
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{contactDetails.map(
						({ icon, details, title, name }, index) => (
							<div
								key={index}
								className="bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 py-8 rounded-2xl group"
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
								<div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-0 text-wrap break-words">
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
											className="group-hover:text-primary transition-all text-sm font-medium leading-loose text-gray-900 mt-0.5 break-words block text-wrap"
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
