"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions";
import { ContactFormState } from "@/types";
import { services } from "@/data/services";
import { company } from "@/data/company";

const initialState: ContactFormState = { success: false };

interface ContactFormProps {
  defaultService?: string;
  compact?: boolean;
}

export default function ContactForm({ defaultService = "", compact = false }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Message Received!</h3>
        <p className="text-green-700 text-sm mb-4">
          We&apos;ll contact you within 1 hour during business hours. For immediate help, call us now.
        </p>
        <a
          href={`tel:${company.phonePlain}`}
          className="inline-flex items-center gap-2 bg-blue-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {company.phone}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="John Smith"
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${
              state.fieldErrors?.name ? "border-red-400 bg-red-50" : "border-gray-300"
            }`}
          />
          {state.fieldErrors?.name && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(619) 555-0100"
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${
              state.fieldErrors?.phone ? "border-red-400 bg-red-50" : "border-gray-300"
            }`}
          />
          {state.fieldErrors?.phone && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.phone}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="john@example.com"
          className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors ${
            state.fieldErrors?.email ? "border-red-400 bg-red-50" : "border-gray-300"
          }`}
        />
        {state.fieldErrors?.email && (
          <p className="text-red-500 text-xs mt-1">{state.fieldErrors.email}</p>
        )}
      </div>

      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService}
            className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white transition-colors ${
              state.fieldErrors?.service ? "border-red-400 bg-red-50" : "border-gray-300"
            }`}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortTitle}>
                {s.shortTitle}
              </option>
            ))}
            <option value="Not sure / Other">Not sure / Other</option>
          </select>
          {state.fieldErrors?.service && (
            <p className="text-red-500 text-xs mt-1">{state.fieldErrors.service}</p>
          )}
        </div>

        {/* ZIP */}
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder="92101"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Brief Description{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Describe the issue or service you need..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-black py-4 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Request Free Quote"
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        No spam. We respond within 1 hour during business hours.
      </p>
    </form>
  );
}
