import { Resend } from "resend";
import { ContactFormData } from "@/types";
import { company } from "@/data/company";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@mickeysgaragedoor.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "no-reply@mickeysgaragedoor.com";
const FROM_NAME = "Mickeys Garage Door";

function locationRow(data: ContactFormData): string {
  const parts: string[] = [];
  if (data.address) parts.push(data.address);
  if (data.city) parts.push(data.city);
  if (data.zip) parts.push(data.zip);
  if (parts.length === 0) return "";
  return `<tr>
    <td style="padding: 14px 16px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Location</td>
    <td style="padding: 14px 16px; font-weight: 600; color: #1e293b; font-size: 15px; border-bottom: 1px solid #f1f5f9;">${parts.join(", ")}</td>
  </tr>`;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const subject = `New Service Inquiry — ${data.service} | ${company.name}`;

  const html = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">New Service Inquiry</h1>
        <p style="color: #93c5fd; margin: 8px 0 0; font-size: 14px;">${company.name} Website</p>
      </div>

      <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
        <div style="background: #f0f7ff; border-left: 4px solid #2d5a8e; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
          <p style="margin: 0; color: #1e3a5f; font-size: 15px; font-weight: 600;">
            ${data.name} is requesting <span style="color: #2d5a8e;">${data.service}</span>
          </p>
        </div>

        <table style="width: 100%; border-collapse: separate; border-spacing: 0;">
          <tr>
            <td style="padding: 14px 16px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; width: 110px; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Name</td>
            <td style="padding: 14px 16px; font-weight: 600; color: #1e293b; font-size: 15px; border-bottom: 1px solid #f1f5f9;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Phone</td>
            <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9;">
              <a href="tel:${data.phone}" style="color: #2d5a8e; font-weight: 600; font-size: 15px; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Email</td>
            <td style="padding: 14px 16px; border-bottom: 1px solid #f1f5f9;">
              <a href="mailto:${data.email}" style="color: #2d5a8e; font-weight: 600; font-size: 15px; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 16px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Service</td>
            <td style="padding: 14px 16px; font-weight: 600; color: #1e293b; font-size: 15px; border-bottom: 1px solid #f1f5f9;">${data.service}</td>
          </tr>
          ${locationRow(data)}
          ${
            data.message
              ? `<tr>
            <td style="padding: 14px 16px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Message</td>
            <td style="padding: 14px 16px; color: #1e293b; font-size: 15px; line-height: 1.6;">${data.message}</td>
          </tr>`
              : ""
          }
        </table>

        <div style="margin-top: 24px; text-align: center;">
          <a href="tel:${data.phone}" style="display: inline-block; background: #2d5a8e; color: #ffffff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
            Call ${data.name.split(" ")[0]}
          </a>
          <a href="mailto:${data.email}" style="display: inline-block; background: #ffffff; color: #2d5a8e; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; border: 2px solid #2d5a8e; margin-left: 8px;">
            Reply by Email
          </a>
        </div>
      </div>

      <div style="background: #1e293b; padding: 20px 32px; border-radius: 0 0 12px 12px; text-align: center;">
        <p style="color: #94a3b8; margin: 0; font-size: 12px;">
          Submitted via mickeysgaragedoor.com
        </p>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: TO_EMAIL,
    replyTo: data.email,
    subject,
    html,
  });
}

export async function sendConfirmationEmail(
  data: ContactFormData
): Promise<void> {
  const firstName = data.name.split(" ")[0];

  const html = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">${company.name}</h1>
        <p style="color: #93c5fd; margin: 8px 0 0; font-size: 14px;">${company.tagline}</p>
      </div>

      <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
        <h2 style="color: #1e293b; margin: 0 0 8px; font-size: 20px;">Thank you, ${firstName}!</h2>
        <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
          We've received your inquiry about <strong>${data.service}</strong> and our team is already on it.
          We'll get back to you as soon as possible — typically within 1 hour during business hours.
        </p>

        <div style="background: #f8fafc; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
          <p style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px;">Your Request Summary</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-size: 14px; width: 90px;">Service</td>
              <td style="padding: 6px 0; color: #1e293b; font-weight: 600; font-size: 14px;">${data.service}</td>
            </tr>
            ${
              data.message
                ? `<tr>
              <td style="padding: 6px 0; color: #64748b; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 6px 0; color: #1e293b; font-size: 14px;">${data.message}</td>
            </tr>`
                : ""
            }
          </table>
        </div>

        <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
          Need immediate assistance? Don't hesitate to call us directly:
        </p>

        <div style="text-align: center; margin-bottom: 8px;">
          <a href="tel:${company.phonePlain}" style="display: inline-block; background: #2d5a8e; color: #ffffff; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">
            Call Us: ${company.phone}
          </a>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin: 12px 0 0;">
          ${company.hours}
        </p>
      </div>

      <div style="background: #1e293b; padding: 24px 32px; border-radius: 0 0 12px 12px; text-align: center;">
        <p style="color: #e2e8f0; margin: 0 0 4px; font-size: 14px; font-weight: 600;">${company.name}</p>
        <p style="color: #94a3b8; margin: 0 0 12px; font-size: 13px;">${company.address.full}</p>
        <p style="color: #64748b; margin: 0; font-size: 11px;">
          You received this email because you submitted an inquiry on our website.
        </p>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: data.email,
    subject: `We received your inquiry — ${company.name}`,
    html,
  });
}
