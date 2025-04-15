"use client";
import { email, enquiriesImages, whatsappNumber } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight-new";

const HaveEnquiry = () => {
	return (
		<div className="bg-white py-16 relative overflow-hidden">
			<Spotlight />
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<div className="flex items-center justify-start mb-8">
						{enquiriesImages.map((enquiry, index) => (
							<Image
								src={enquiry}
								alt={"A nurse"}
								width={1000}
								height={1000}
								className={`w-36 h-36 object-cover rounded-full border-8 hover:scale-105 transition-all border-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${
									index + 1 !== 1 && "ml-[-25px]"
								}`}
							/>
						))}
					</div>
					<Button
						className="ml-3"
						size={"lg"}
						variant={"secondary"}
						asChild
					>
						<a href={`tel:${whatsappNumber}`}>Call us now</a>
					</Button>
				</div>
				<div>
					<h2
						className={`uppercase text-2xl md:text-3xl text-secondary font-semibold mb-2 md:mb-3`}
					>
						Have Enquiries?
					</h2>
					<p className="text-base text-muted-foreground">
						Our team is ready to provide the information you need,
						whether it’s about medication orders, bulk purchases,
						pharmacy partnerships, or general inquiries.
					</p>
					<div className="text-xs md:text-sm font-medium mt-8">
						<div className="flex items-center justify-between gap-4">
							<a
								target="_blank"
								href={`https://wa.me/${whatsappNumber}`}
								className="flex items-center justify-center hover:text-secondary transition-all gap-2"
							>
								<Image
									src={"/assets/icons/whatsapp.svg"}
									alt="Whatsapp Icon"
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<span>{whatsappNumber}</span>
							</a>
							<a
								target="_blank"
								href={`tel:${whatsappNumber}`}
								className="flex items-center justify-center hover:text-secondary transition-all gap-2"
							>
								<Image
									src={"/assets/icons/call.svg"}
									alt="Call Icon"
									width={1000}
									height={1000}
									className="w-5 h-5"
								/>
								<span>{whatsappNumber}</span>
							</a>
						</div>
						<a
							target="_blank"
							href={`mailto:${email}`}
							className="flex items-center justify-start mt-4 hover:text-secondary transition-all gap-2"
						>
							<Image
								src={"/assets/icons/email.svg"}
								alt="Email Icon"
								width={1000}
								height={1000}
								className="w-6 h-6"
							/>
							<span>{email}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HaveEnquiry;
