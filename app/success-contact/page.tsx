import Showcase from "@/components/shared/Showcase";
import { ColourfulText } from "@/components/ui/colourful-text";
import { email } from "@/constants";
import { getContactDetails } from "@/lib/actions/contact.actions";
import { redirect } from "next/navigation";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Message Received | Northampton Healthcare Facility",
	description:
		"Thank you for reaching out! Our team will get back to you soon. Stay tuned for updates on Northampton Healthcare Facility",
	keywords:
		"message received, inquiry confirmation, Pharmacy in Nigeria, buy medicine online, prescription fulfillment, pharmacy delivery service, pharmaceutical supplier, HMO pharmacy, affordable medications, prof akinteye ademola, ademola, akinteye, simon akinteye",
};

interface PageProps {
	searchParams: { id?: string };
}

const page = async ({ searchParams }: PageProps) => {
	const id = searchParams?.id; // ✅ Extract 'id' from searchParams

	if (!id) {
		return <p className="text-center text-red-500">Invalid contact ID</p>;
	}

	const res = await getContactDetails(id);

	if (res.status === 400) redirect("/not-found");

	return (
		<div>
			<Showcase
				headline={
					<>
						Message <ColourfulText text="Received!" />
					</>
				}
				description={
					<>
						Thank you for reaching out to us! Your message has been
						successfully submitted, and our team will get back to
						you as soon as possible. If your inquiry is urgent, feel
						free to contact us directly at{" "}
						<a className="hover:underline" href={`mailto:${email}`}>
							{email}
						</a>
						.
					</>
				}
				fullScreen={true}
				bgImage="/assets/images/about-showcase-bg-img.jpg"
				cta={[{ slug: "/", title: "Go back home" }]}
			/>
		</div>
	);
};

export default page;
