import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { reviews } from "@/data/reviews";
import CTABanner from "@/components/sections/CTABanner";
import ReviewCard from "@/components/ui/ReviewCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import StarRating from "@/components/ui/StarRating";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "San Diego Garage Door Repair & Installation | Mickey's Garage Door",
  description:
    "Mickey's Garage Door — San Diego's trusted local garage door company. Same-day repair, spring replacement, new installations & 24/7 emergency service. Licensed & insured. Call now.",
  alternates: { canonical: "/" },
};

const homepageFAQs = [
  {
    question: "How much does garage door repair cost in San Diego?",
    answer:
      "Most repairs range from $89–$350 depending on the issue. Spring replacement is $150–$350. Opener installation starts at $250. We always provide a free on-site estimate before any work begins.",
  },
  {
    question: "Do you offer same-day garage door service?",
    answer:
      "Yes. In most cases we can dispatch a technician the same day — often within 2–4 hours. Call before noon for the best chance of same-day service.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Mickey's Garage Door is fully licensed, bonded, and insured in California. Our technicians are background-checked and trained on all major door brands.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of San Diego County including Chula Vista, El Cajon, La Mesa, Santee, Escondido, Encinitas, National City, and Lemon Grove.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Yes. All parts and labor come with a 1-year warranty. We also offer a lifetime spring warranty on select products.",
  },
  {
    question: "Do you provide 24/7 emergency service?",
    answer:
      "Yes. Our emergency line is answered around the clock. If your door won't close and your home is unsecured, call us immediately.",
  },
];

const trustPoints = [
  {
    icon: "⚡",
    title: "Same-Day Service",
    description: "Call before noon and we'll arrive today. Emergency service available 24/7.",
  },
  {
    icon: "🛡️",
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured in California. Background-checked technicians.",
  },
  {
    icon: "✅",
    title: "1-Year Warranty",
    description: "All parts and labor backed by a 1-year warranty. Lifetime springs available.",
  },
  {
    icon: "📍",
    title: "Locally Owned",
    description: `San Diego's own since ${company.founded}. Not a franchise — a real local business.`,
  },
];

export default function HomePage() {
  const featuredReviews = reviews.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-orange-500/30">
                <span className="animate-pulse">●</span>
                Same-Day Service Available
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                San Diego&apos;s Trusted{" "}
                <span className="text-orange-400">Garage Door</span> Experts
              </h1>
              <p className="text-blue-100 text-lg mb-7 leading-relaxed">
                Fast, reliable repairs and installations across San Diego County.
                Licensed, bonded &amp; insured. {company.yearsInBusiness} years serving local homeowners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${company.phonePlain}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-black px-7 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {company.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-orange-500 text-white font-black px-7 py-4 rounded-xl text-lg hover:bg-orange-600 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-blue-200">
                <span className="flex items-center gap-1.5">
                  <StarRating rating={4.9} className="text-base" />
                  <span>
                    <strong className="text-white">{company.ratingValue}</strong> · {company.reviewCount} Google Reviews
                  </span>
                </span>
                <span className="text-blue-400">|</span>
                <span>BBB Accredited</span>
                <span className="text-blue-400">|</span>
                <span>{company.yearsInBusiness} Years in Business</span>
              </div>
            </div>

            {/* Quote form panel */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-bold text-blue-900 mb-1">Get a Free Estimate</h2>
              <p className="text-sm text-gray-500 mb-5">We respond within 1 hour · No obligation</p>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Our Garage Door Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From emergency repairs to full new door installations — we handle everything garage door related in San Diego County.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-blue-900 hover:shadow-lg transition-all duration-200 bg-white"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-blue-900 transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {service.description.split(".")[0]}.
                </p>
                <span className="inline-flex items-center gap-1 text-blue-900 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Why San Diego Homeowners Choose Mickey&apos;s
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We&apos;re not a call center or a franchise. We&apos;re a local San Diego company with real technicians and real accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl mb-3">{point.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <StarRating rating={4.9} className="text-2xl" />
              <span className="text-2xl font-black text-gray-900">{company.ratingValue}</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Trusted by {company.reviewCount} San Diego Homeowners
            </h2>
            <p className="text-gray-500">
              Real reviews from real customers across San Diego County.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:underline"
            >
              Read All Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Serving All of San Diego County</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              From the coast to the inland valleys, we cover all major San Diego communities with the same fast, professional service.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex items-center gap-2 bg-blue-800/50 hover:bg-blue-700 border border-blue-700 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {loc.city}
              </Link>
            ))}
          </div>
          <p className="text-center text-blue-300 text-sm mt-6">
            Don&apos;t see your city? Call us — we likely serve your area.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Common questions about our garage door services in San Diego.
            </p>
          </div>
          <FAQAccordion faqs={homepageFAQs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
