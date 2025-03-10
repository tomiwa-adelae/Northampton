import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Showcase = ({
	bgImage,
	headline,
	description,
	cta,
	image,
}: {
	bgImage: string;
	headline: string;
	description: string;
	cta?: any;
	image?: string;
}) => {
	return (
		<div
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
			className="flex items-center justify-center bg-no-repeat bg-center bg-cover min-h-screen relative text-white"
		>
			<div
				className={`grid grid-cols-1 ${
					image && "md:grid-cols-2"
				}  gap-10 container`}
			>
				<div className="flex flex-col items-start justify-center mt-20 z-50">
					<h1 className="text-3xl md:text-4xl md:leading-loose leading-loose font-bold">
						{headline}
					</h1>
					<p className="text-sm md:text-base md:leading-loose leading-loose text-gray-100 my-6">
						{description}
					</p>
					<div className="flex items-center justify-start gap-4">
						{cta?.map(
							(
								{
									slug,
									title,
								}: { slug: string; title: string },
								index: number
							) => (
								<Button
									variant={
										index === 0 ? "default" : "secondary"
									}
									key={index}
									asChild
									size="lg"
								>
									<Link href={slug}>{title}</Link>
								</Button>
							)
						)}
					</div>
				</div>
				{image && (
					<div className="flex items-center justify-center md:justify-end">
						<Image
							src={image}
							alt={headline}
							width={1000}
							height={1000}
							className="w-auto h-auto object-cover"
						/>
					</div>
				)}
			</div>
			<div className="absolute inset-0 bg-black/50" />
		</div>
	);
};

export default Showcase;
