"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { homeCarousel } from "@/constants";

const ShowcaseCarousel = () => {
	return (
		<div
			style={{
				backgroundImage: `url(/assets/images/showcase-bg-img.jpg)`,
			}}
			className="flex items-center justify-center bg-no-repeat bg-center bg-cover relative bg-orange-400"
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
								className={`flex items-center justify-center container min-h-[70vh]`}
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
									<div className="flex flex-col items-start justify-center">
										<h1 className="text-4xl lg:text-5xl font-semibold uppercase">
											{headline}
										</h1>
										<p className="text-base my-4">
											{description}
										</p>
										<div className="flex flex-wrap w-full items-center justify-start gap-4">
											{cta?.map(
												({ slug, title }, btnIndex) => (
													<Button
														variant={
															btnIndex === 0
																? "default"
																: "secondary"
														}
														key={btnIndex}
														asChild
														className="w-full md:w-auto"
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
									{image && (
										<div className="flex items-center justify-center lg:justify-end">
											<Image
												src={image}
												alt={headline}
												width={1000}
												height={1000}
												className="w-auto h-auto object-cover aspect-auto"
											/>
										</div>
									)}
								</div>
							</div>
						</SwiperSlide>
					)
				)}
			</Swiper>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default ShowcaseCarousel;
