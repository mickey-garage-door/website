import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import CTABanner from "@/components/sections/CTABanner";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title: "About Mickey's Garage Door | San Diego, CA",
  description:
    "Learn about Mickey's Garage Door — a locally owned, licensed garage door company serving San Diego County since 2011. Licensed, bonded & insured.",
  alternates: { canonical: "/about" },
};

const certifications = [
  { label: "California Contractor License", value: company.license },
  { label: "Liability Insurance", value: "Fully Insured" },
  { label: "Surety Bond", value: "Bonded" },
  { label: "BBB Accreditation", value: "Accredited Member" },
  { label: "Years in Business", value: `${company.yearsInBusiness} Years` },
];

const values = [
  { icon: "🤝", title: "Honest Pricing", description: "We quote the full price before we touch anything. No hidden fees, no bait-and-switch. If it changes, we tell you first." },
  { icon: "⚡", title: "Responsive Service", description: "When your garage door breaks, you don't want to wait. We prioritize same-day appointments and 24/7 emergency response." },
  { icon: "🔧", title: "Quality Work", description: "We use professional-grade parts, properly calibrated tools, and back every job with a 1-year parts and labor warranty." },
  { icon: "📍", title: "Genuinely Local", description: `We live and work in San Diego County. Our technicians know the neighborhoods, the climate, and the homes in this area — because it's home for us too.` },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-gradient-hero text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-cyan font-semibold text-sm mb-2">Locally Owned Since {company.founded}</p>
          <h1 className="text-4xl font-black mb-4">About Mickey&apos;s Garage Door</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A San Diego family business built on honest work, fast response, and doing the job right the first time.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-surface transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-5">
              San Diego&apos;s Garage Door Company — Since {company.founded}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>Mickey&apos;s Garage Door was founded in San Diego with a straightforward mission: give homeowners a reliable, honest option for garage door repairs and installations without the frustration of franchise call centers or unreliable technicians.</p>
              <p>Over {company.yearsInBusiness}, we&apos;ve grown from a one-truck operation to a full team of licensed technicians covering all of San Diego County — but our approach hasn&apos;t changed. Every job is treated like it&apos;s our own home.</p>
              <p>We&apos;re not a franchise. We&apos;re not a call center. We&apos;re a local company where real people answer the phone, real technicians show up, and real accountability exists when something isn&apos;t right.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: company.yearsInBusiness, label: "Years in San Diego" },
                { number: company.reviewCount, label: "Happy Customers" },
                { number: company.ratingValue + "★", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-blue-50 dark:bg-surface-raised rounded-xl p-4">
                  <p className="text-2xl font-black text-brand-dark dark:text-brand-cyan">{stat.number}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-surface-alt rounded-xl p-6 border border-theme transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <StarRating rating={4.9} className="text-xl" />
                <span className="font-black text-2xl text-gray-900 dark:text-gray-100">{company.ratingValue}</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{company.reviewCount} verified Google reviews from San Diego homeowners.</p>
              <a href={company.googleReviewsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-dark dark:text-brand-cyan font-semibold text-sm mt-3 hover:underline">
                Read our Google reviews →
              </a>
            </div>

            <div className="border border-theme rounded-xl p-6 bg-surface transition-colors duration-300">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Credentials &amp; Licensing</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.label} className="flex justify-between items-center text-sm border-b border-theme pb-2 last:border-0">
                    <span className="text-gray-500 dark:text-gray-400">{cert.label}</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{cert.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-surface-alt transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-3">How We Do Business</h2>
            <p className="text-gray-500 dark:text-gray-400">Four principles that guide every job we take.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-surface rounded-xl p-6 shadow-sm border border-theme transition-colors duration-300">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{v.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-surface transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-3">Have a Question?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">We&apos;re happy to answer questions before you commit to any service. Call us or send a message.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${company.phonePlain}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-black px-7 py-4 rounded-xl hover:bg-brand-mid transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {company.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center bg-orange-500 text-white font-black px-7 py-4 rounded-xl hover:bg-orange-600 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
