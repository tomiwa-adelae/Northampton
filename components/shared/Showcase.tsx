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
			className={`flex items-center justify-center bg-no-repeat bg-center bg-cover relative text-white ${
				!image && "min-h-screen"
			}`}
		>
			<div
				className={`grid grid-cols-1 ${
					image && "md:grid-cols-2"
				}  gap-10 container`}
			>
				<div className="flex flex-col items-start justify-center mt-20 md:mb-20 z-50">
					<h1 className="text-4xl lg:text-5xl font-semibold uppercase">
						{headline}
					</h1>
					<p className="text-base my-4">{description}</p>
					<div className="flex flex-wrap w-full items-center justify-start gap-4">
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
									className="w-full md:w-auto"
								>
									<Link href={slug}>{title}</Link>
								</Button>
							)
						)}
					</div>
				</div>
				{image && (
					<div className="flex items-center justify-center md:justify-end z-50">
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
