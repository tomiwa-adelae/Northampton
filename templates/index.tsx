import { email, websiteURL } from "@/constants";
import { formatDate } from "@/lib/utils";

export const generateUserContactEmail = (contact: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { background: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
        h2 { color: #2d89ef; }
        p { font-size: 16px; color: #333; }
        .button { background-color: #2d89ef; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
    </style>
</head>
<body>

<div class="container">
    <h2>✅ Thank You, ${contact.name}!</h2>
    <p>We have received your message and will get back to you as soon as possible.</p>

    <p><strong>Your Message:</strong></p>
    <p>📩 <strong>Subject:</strong> ${contact.subject}</p>
    <p>💬 <strong>Message:</strong> ${contact.message}</p>

    <p>📅 <strong>Sent On:</strong> ${formatDate(contact.createdAt)}</p>

    <p>Our team will review your inquiry and respond shortly. If your message is urgent, feel free to reach out to us directly at <a href="mailto:${email}">${email}</a>.</p>

    <p>Meanwhile, stay updated with the latest conference news:</p>
    <a href="${websiteURL}" class="button">Visit Northampton Healthcare Website</a>

    <p>Best regards,</p>
    <p><strong>Northampton Healthcare Team</strong></p>
</div>

</body>
</html>`;

export const generateAdminContactEmail = (contact: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
        .container { background: #ffffff; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; }
        h2 { color: #d9534f; }
        p { font-size: 16px; color: #333; }
        .button { background-color: #d9534f; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
    </style>
</head>
<body>

<div class="container">
    <h2>New Contact Form Submission</h2>
    <p>A new inquiry has been received via the Northampton Healthcare Facility contact form.</p>

    <p><strong>User Details:</strong></p>
    <p>👤 <strong>Name:</strong> ${contact.name}</p>
    <p>📧 <strong>Email:</strong> ${contact.email}</p>
    <p>📞 <strong>Phone:</strong> ${contact.phoneNumber}</p>

    <p><strong>Message Details:</strong></p>
    <p>📩 <strong>Subject:</strong> ${contact.subject}</p>
    <p>💬 <strong>Message:</strong> ${contact.message}</p>

    <p>📅 <strong>Received On:</strong> ${formatDate(contact.createdAt)}</p>

    <p>🔍 View more details in the admin panel:</p>
    <a href="${websiteURL}" class="button">View in Admin Panel</a>

    <p>Best regards,</p>
 <p><strong>Northampton Healthcare Team</strong></p>
</div>

</body>
</html>`;
