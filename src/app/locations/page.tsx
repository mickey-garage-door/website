import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Garage Door Service Areas in San Diego County",
  description:
    "Mickey's Garage Door serves all of San Diego County including Chula Vista, El Cajon, La Mesa, Santee, Escondido, Encinitas, National City and more.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-brand-gradient-hero text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-cyan font-semibold text-sm mb-2">Coverage Area</p>
          <h1 className="text-4xl font-black mb-4">We Serve All of San Diego County</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Same-day garage door service across San Diego, Chula Vista, El Cajon, La Mesa, Escondido, Encinitas, and more.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group border border-gray-200 rounded-xl p-7 hover:border-brand-dark hover:shadow-lg transition-all duration-200 bg-white"
              >
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <h2 className="font-black text-gray-900 text-lg group-hover:text-brand-dark transition-colors">
                      {loc.city}, CA
                    </h2>
                    <p className="text-gray-400 text-xs">{loc.zip.join(", ")}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {loc.description.split(".")[0]}.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {loc.neighborhoods.slice(0, 3).map((n) => (
                    <span key={n} className="text-xs bg-gray-100 text-gray-500 rounded-full px-2.5 py-1">
                      {n}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-brand-dark font-semibold text-sm group-hover:gap-2 transition-all">
                  View {loc.city} Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Don't See Your City?"
        subtext="We likely serve your area. Call us to confirm — we cover all of San Diego County and surrounding communities."
      />
    </>
  );
}
