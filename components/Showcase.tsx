"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { homeCarousel } from "@/constants";
import { Autoplay } from "swiper/modules";

const Showcase = () => {
	return (
		<div
			style={{
				backgroundImage: "url(/assets/images/showcase-bg-img.jpg)",
			}}
			className="flex items-center justify-center bg-no-repeat bg-center bg-cover relative"
		>
			<Swiper
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				modules={[Autoplay]}
				className="flex items-center justify-center mySwiper text-white"
			>
				{homeCarousel.map(
					({ headline, description, cta, image }, index) => (
						<SwiperSlide key={index}>
							<div
								className={`grid grid-cols-1 ${
									image && "lg:grid-cols-2"
								} gap-10 container`}
							>
								<div className="flex flex-col items-start justify-center">
									<h1 className="text-3xl md:text-4xl md:leading-loose leading-loose font-bold">
										{headline}
									</h1>
									<p className="text-sm md:text-base md:leading-loose leading-loose text-gray-100 my-6">
										{description}
									</p>
									<div className="flex items-center justify-start gap-4">
										{cta &&
											cta.map(
												({ slug, title }, index) => (
													<Button
														variant={
															index + 1 !== 1
																? "secondary"
																: "default"
														}
														key={index}
														asChild
														size={"lg"}
													>
														<Link href={slug}>
															{title}
														</Link>
													</Button>
												)
											)}
									</div>
								</div>
								{image && (
									<Image
										src={image}
										alt={headline}
										width={1000}
										height={1000}
										className="w-auto h-auto"
									/>
								)}
							</div>
						</SwiperSlide>
					)
				)}
			</Swiper>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default Showcase;
