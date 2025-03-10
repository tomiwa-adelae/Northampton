import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Contact = () => {
	return (
		<div className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white pt-16">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex items-start flex-col justify-center">
					<h2
						className={`uppercase text-xl md:text-2xl lg:text-3xl leading-loose  font-semibold mt-4 mb-6`}
					>
						Let's connect
					</h2>
					<p className="text-sm leading-loose text-gray-100 mb-6">
						We will love to connect with you. For your health needs,
						inquiries, suggestions or feedback simply hit the{" "}
						<b>‘Get in touch’</b> button let’s connect.
					</p>
					<Button asChild size={"lg"} variant={"white"}>
						<Link href="/contact">get in touch</Link>
					</Button>
				</div>
				<div className="flex items-center justify-center md:justify-end">
					<Image
						src={"/assets/images/contact-man.png"}
						alt={"A man with a headphone like a customer service"}
						width={1000}
						height={1000}
						className="w-auto h-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
