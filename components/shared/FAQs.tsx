import SectionHeader from "./SectionHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { Spotlight } from "../ui/spotlight-new";

const FAQs = () => {
	return (
		<div className="bg-gray-100 py-16 relative overflow-hidden">
			<SectionHeader
				description={
					"We understand that choosing the right healthcare partner is an important decision. That’s why we’ve answered some of the most common questions about our services, pricing, and processes. Whether you’re an individual looking for a doctor, a business in need of medical staff, or a pharmacy partner, we’re here to provide clarity and support"
				}
				title={"Have Questions? We’ve Got Answers!"}
				position={"left"}
			/>
			<div className="container mt-4">
				<Accordion type="single" collapsible className="w-full">
					{faqs.map(({ question, answer }, index) => (
						<AccordionItem value={`${index}`} key={index}>
							<AccordionTrigger>{question}</AccordionTrigger>
							<AccordionContent>{answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

export default FAQs;
