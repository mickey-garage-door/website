import { Resend } from "resend";
import { ContactFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@mickeysgaragedoor.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@mickeysgaragedoor.com";

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const subject = `New Service Inquiry — ${data.service} | Mickey's Garage Door`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1e3a5f; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Service Inquiry</h1>
        <p style="color: #93c5fd; margin: 4px 0 0;">Mickey's Garage Door Website</p>
      </div>
      <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Name</td>
            <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td>
            <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">
              <a href="tel:${data.phone}" style="color: #1e3a5f;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
            <td style="padding: 8px 0; color: #1e293b;">
              <a href="mailto:${data.email}" style="color: #1e3a5f;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Service</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.service}</td>
          </tr>
          ${
            data.zip
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">ZIP Code</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.zip}</td>
          </tr>`
              : ""
          }
          ${
            data.message
              ? `<tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; vertical-align: top;">Message</td>
            <td style="padding: 8px 0; color: #1e293b;">${data.message}</td>
          </tr>`
              : ""
          }
        </table>
      </div>
      <div style="background: #1e3a5f; padding: 16px 24px; border-radius: 0 0 8px 8px;">
        <p style="color: #93c5fd; margin: 0; font-size: 12px;">
          Submitted via mickeysgaragedoor.com
        </p>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: data.email,
    subject,
    html,
  });
}
