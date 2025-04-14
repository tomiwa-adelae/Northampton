import { Spotlight } from "./ui/spotlight-new";
import Image from "next/image";
import { ourTeams } from "@/constants";

const OurTeams = () => {
	return (
		<div className="bg-gradient-to-r from-blue-100 to-white py-16 relative overflow-x-hidden">
			<div className="container">
				<h2 className="uppercase text-2xl md:text-3xl text-primary font-semibold mt-4 mb-6 text-center">
					Our Leadership Team
				</h2>
				<div className="mt-8 grid gap-8 relative">
					{ourTeams.map(({ image, title, name, bio }, index) => (
						<div
							className="flex flex-col md:flex-row items-start justify-start gap-8 relative min-h-[500px]"
							key={index}
						>
							<Image
								src={image}
								alt={`${name} image`}
								width={1000}
								height={1000}
								className={`shadow-[0_3px_10px_rgb(0,0,0,0.2)] sticky top-10 left-0 rounded-full object-cover w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-8 border-white ${
									index + 1 === 2
										? "md:order-2"
										: index + 1 === 4
										? "md:order-2"
										: ""
								}`}
							/>
							<div
								className={`${
									index + 1 === 2 ? "order-1" : ""
								}`}
							>
								<h4 className="uppercase text-primary font-medium text-base md:text-lg">
									{name}
								</h4>
								<p className="text-sm uppercase text-muted-foreground mt-1">
									{title}
								</p>
								<p className="text-base text-gray-900 mt-3">
									{bio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurTeams;
