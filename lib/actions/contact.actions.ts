"use server";

import { connectToDatabase } from "../database";
import Mailjet from "node-mailjet";
import Contact from "../database/models/contact.model";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const contactUs = async (user: {
	name: string;
	email: string;
	phoneNumber?: string;
	subject: string;
	message?: string;
}) => {
	try {
		await connectToDatabase();

		const newContact = await Contact.create(user);

		if (newContact) {
			const request = mailjet.post("send", { version: "v3.1" }).request({
				Messages: [
					{
						From: {
							Email: `${process.env.SENDER_EMAIL_ADDRESS}`,
							Name: `${process.env.COMPANY_NAME}`,
						},
						To: [
							{
								Email: `${newContact.ADMIN_EMAIL_ADDRESS}`,
								Name: `${process.env.COMPANY_NAME}`,
							},
						],
						Subject: `Welcome to ${newContact.subject}`,
						TextPart: `📩 New Contact Form Submission – Northampton Healthcare Facility`,
						HTMLPart: `<div
										style="
											font-family: Montserrat, sans-serif;
											font-size: 15px;
											padding: 2rem;
										"
									>
										<h2>Dear Admin, </h2>

										<h1>📝 Contact Form Submission Details:</h1>
                                        <ul>
		                                <li>
		                                    <strong>Name:</strong> ${newContact.name}
		                                </li>
		                                <li>
		                                    <strong>Email:</strong> ${newContact.email}
		                                </li>
		                                <li>
		                                    <strong>Phone number:</strong> ${newContact.phoneNumber}
		                                </li>
		                                <li>
		                                    <strong>Subject:</strong> ${newContact.subject}
		                                </li>
		                                <li>
		                                    <strong>Message:</strong> ${newContact.message}
		                                </li>
		                            </ul>
                                    <strong>🚀 Next Steps:</strong>

										<p>Please review the inquiry and respond to the user as soon as possible. If urgent, you may want to follow up via phone or WhatsApp for quicker assistance.</p>


										<p>If you have any questions or need further assistance, feel free to reach out.</p>

										<p>Best regards,</p>
										<p>${process.env.COMPANY_NAME} Team</p>
										<a href='${process.env.WEBSITE_URL}'>Northampton Healthcare Facility</a>
									</div>
							`,
					},
				],
			});

			// Send email
			request
				.then(() => console.log("User sent"))
				.catch((err: any) => {
					return err;
				});
		}
	} catch (error: any) {
		console.error(error);
	}
};
