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
      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Received!</h3>
        <p className="text-green-700 dark:text-green-400 text-sm mb-4">
          We&apos;ll contact you within 1 hour during business hours. For immediate help, call us now.
        </p>
        <a
          href={`tel:${company.phonePlain}`}
          className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-mid transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {company.phone}
        </a>
      </div>
    );
  }

  const inputBase =
    "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors bg-surface text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500";
  const labelBase = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm text-red-700 dark:text-red-300">
          {state.error}
        </div>
      )}

      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
        <div>
          <label htmlFor="name" className={labelBase}>
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name" name="name" type="text" autoComplete="name" required placeholder="John Smith"
            className={`${inputBase} ${state.fieldErrors?.name ? "border-red-400 bg-red-50 dark:bg-red-950" : "border-gray-300 dark:border-gray-600"}`}
          />
          {state.fieldErrors?.name && <p className="text-red-500 text-xs mt-1">{state.fieldErrors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="(619) 555-0100"
            className={`${inputBase} ${state.fieldErrors?.phone ? "border-red-400 bg-red-50 dark:bg-red-950" : "border-gray-300 dark:border-gray-600"}`}
          />
          {state.fieldErrors?.phone && <p className="text-red-500 text-xs mt-1">{state.fieldErrors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelBase}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email" name="email" type="email" autoComplete="email" required placeholder="john@example.com"
          className={`${inputBase} ${state.fieldErrors?.email ? "border-red-400 bg-red-50 dark:bg-red-950" : "border-gray-300 dark:border-gray-600"}`}
        />
        {state.fieldErrors?.email && <p className="text-red-500 text-xs mt-1">{state.fieldErrors.email}</p>}
      </div>

      <div className={compact ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : ""}>
        <div>
          <label htmlFor="service" className={labelBase}>
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="service" name="service" required defaultValue={defaultService}
            className={`${inputBase} ${state.fieldErrors?.service ? "border-red-400 bg-red-50 dark:bg-red-950" : "border-gray-300 dark:border-gray-600"}`}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortTitle}>{s.shortTitle}</option>
            ))}
            <option value="Not sure / Other">Not sure / Other</option>
          </select>
          {state.fieldErrors?.service && <p className="text-red-500 text-xs mt-1">{state.fieldErrors.service}</p>}
        </div>

        <div>
          <label htmlFor="zip" className={labelBase}>ZIP Code</label>
          <input
            id="zip" name="zip" type="text" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} placeholder="92101"
            className={`${inputBase} border-gray-300 dark:border-gray-600`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Brief Description <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message" name="message" rows={compact ? 3 : 4}
          placeholder="Describe the issue or service you need..."
          className={`${inputBase} resize-none border-gray-300 dark:border-gray-600`}
        />
      </div>

      <button
        type="submit" disabled={isPending}
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
        ) : "Request Free Quote"}
      </button>
      <p className="text-center text-xs text-gray-400 dark:text-gray-500">No spam. We respond within 1 hour during business hours.</p>
    </form>
  );
}
