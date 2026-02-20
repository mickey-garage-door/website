"use server";

import { ContactFormData, ContactFormState } from "@/types";
import { sendContactEmail } from "./sendEmail";

function validatePhone(phone: string): boolean {
  return /^[\d\s\-()+]{7,20}$/.test(phone.trim());
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    zip: String(formData.get("zip") ?? "").trim() || undefined,
  };

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!data.name || data.name.length < 2) {
    fieldErrors.name = "Please enter your full name.";
  }
  if (!data.phone || !validatePhone(data.phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (!data.email || !validateEmail(data.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!data.service) {
    fieldErrors.service = "Please select a service.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  try {
    await sendContactEmail(data);
    return { success: true };
  } catch (err) {
    console.error("Contact form email error:", err);
    return {
      success: false,
      error: "Something went wrong sending your message. Please call us directly.",
    };
  }
}
