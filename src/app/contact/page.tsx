import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Free Garage Door Estimate in San Diego",
  description:
    "Contact Mickey's Garage Door for a free estimate. Call (619) 555-0100 or fill out our form. Same-day service available across San Diego County.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phonePlain}`,
    note: "24/7 for emergencies",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "Respond within 2 hours",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: company.address.full,
    href: company.googleMapsUrl,
    note: "By appointment",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: company.hours,
    href: null,
    note: company.emergency,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-blue-950 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 font-semibold text-sm mb-2">San Diego County</p>
          <h1 className="text-4xl font-black mb-4">Get a Free Estimate</h1>
          <p className="text-blue-200 text-lg">
            Call us, fill out the form, or find us on Google. We respond within 1 hour during business hours.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Request a Quote</h2>
            <p className="text-gray-500 text-sm mb-6">
              No obligation. We&apos;ll contact you within 1 hour during business hours to confirm your appointment.
            </p>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-5">Contact Information</h2>
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-gray-900 hover:text-blue-900 transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900">{item.value}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "We respond within 1 hour during business hours",
                  "Free on-site estimate with no obligation",
                  "Upfront pricing before any work begins",
                  "Same-day service available in most cases",
                  "1-year warranty on all parts and labor",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service areas quick links */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
              <p className="text-sm text-gray-500 mb-3">We serve all of San Diego County including:</p>
              <Link href="/locations" className="text-blue-900 text-sm font-semibold hover:underline">
                View all service areas →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
