import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Garage Door Services in San Diego, CA",
  description:
    "Full-service garage door repairs, installations, spring replacement, opener service, and emergency repairs across San Diego County. Licensed & insured.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-gradient-hero text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-cyan font-semibold text-sm mb-2">San Diego County</p>
          <h1 className="text-4xl font-black mb-4">Our Garage Door Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From emergency repairs to full new door installations — we handle every garage door need with same-day availability and a 1-year warranty.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-gray-200 rounded-xl p-7 hover:border-brand-dark hover:shadow-lg transition-all duration-200 bg-white flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="font-black text-gray-900 text-xl mb-2 group-hover:text-brand-dark transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {service.description.split(".")[0]}.
                </p>
                <div className="flex items-center gap-1 text-brand-dark font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More & Pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
