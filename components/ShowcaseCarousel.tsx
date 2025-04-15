"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { ColourfulText } from "./ui/colourful-text";
import { whatsappNumber } from "@/constants";

const ShowcaseCarousel = () => {
	return (
		<div className="bg-white flex items-center justify-center">
			<Swiper
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[Autoplay]}
				className="flex items-center justify-center mySwiper"
			>
				{homeCarousel.map(
					({ headline, description, cta, image }, index) => (
						<SwiperSlide
							key={index}
							className="flex items-center justify-center pt-16 lg:pt-0 pb-16"
						>
							<div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
								<div className="flex flex-col items-center justify-center">
									<h1 className="text-4xl lg:text-5xl font-semibold uppercase">
										{headline}
									</h1>
									<p className="text-base my-4">
										{description}.
									</p>

									<div className="flex flex-wrap w-full items-center justify-start gap-4">
										{cta?.map(
											({ slug, title }, btnIndex) => (
												<Button
													variant={
														btnIndex === 0
															? "default"
															: "outline"
													}
													key={btnIndex}
													asChild
													className={`w-full md:w-auto ${
														btnIndex !== 0 &&
														"text-primary"
													}`}
													size="lg"
												>
													<Link href={slug}>
														{title}
													</Link>
												</Button>
											)
										)}
									</div>
								</div>
								<Image
									src={image}
									alt={`${headline}'s image`}
									width={1000}
									height={1000}
									className="size-full object-cover"
								/>
							</div>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</div>
	);
};

export default ShowcaseCarousel;

const homeCarousel = [
	{
		headline: (
			<>
				Bringing Healthcare <ColourfulText text={"Closer"} />
			</>
		),
		description:
			"We provide licensed doctors, nurses, and pharmaceuticals at lower costs, helping hospitals, clinics, and individuals access quality healthcare without expensive retainership fees.",
		cta: [
			{
				title: "Explore our services",
				slug: "/services",
			},
			{
				title: "Call us now",
				slug: `https://wa.me/${whatsappNumber}`,
			},
		],
		image: "/assets/images/nurse.png",
	},
	{
		headline: (
			<>
				Your Reliable Partner for <ColourfulText text={"Medications"} />
			</>
		),
		description:
			"With our nationwide pharmacy network, you can access high-quality, affordable medications delivered to your home or hospital.",
		cta: [
			{
				title: "Read more",
				slug: "/about",
			},
		],
		image: "/assets/images/nurse-three.png",
	},
	{
		headline: (
			<>
				Bringing Quality Healthcare to Your{" "}
				<ColourfulText text={"Doorstep"} />
			</>
		),
		description:
			"From expert medical staffing to seamless pharmacy deliveries. NHFHL ensures you receive top-tier healthcare without the hassle.",
		cta: [
			{
				title: "Explore our Services",
				slug: "/services",
			},
		],
		image: "/assets/images/nurse-two.png",
	},
	{
		headline: (
			<>
				Healthcare Solutions for{" "}
				<ColourfulText text={"Businesses & HMOs"} />
			</>
		),
		description:
			"Reduce costs and improve healthcare access for your employees or enrollees with NHFHL’s seamless corporate and HMO partnerships.",
		cta: [
			{
				title: "Contact us now",
				slug: "/contact",
			},
		],
		image: "/assets/images/nurse-five.png",
	},
	{
		headline: (
			<>
				Expert Medical Staffing, <ColourfulText text={"On Demand"} />
			</>
		),
		description:
			"NHFHL provides qualified doctors, nurses, and caregivers for hospitals, clinics, and individuals—whenever you need them.",
		image: "/assets/images/nurse-three.png",
	},
	{
		headline: (
			<>
				We Make Healthcare Easy & <ColourfulText text={"Stress-Free"} />
			</>
		),
		description:
			"Whether you need a prescription refill, medical staff, or corporate healthcare solutions. NHFHL is your trusted partner for accessible healthcare.",
		cta: [
			{
				title: "Get started today",
				slug: "/contact",
			},
		],
		image: "/assets/images/nurse-four.png",
	},
];
