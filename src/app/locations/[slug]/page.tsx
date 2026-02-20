import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { company } from "@/data/company";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ReviewCard from "@/components/ui/ReviewCard";
import ContactForm from "@/components/forms/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/locations/${location.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const localReviews = reviews
    .filter((r) => r.neighborhood.toLowerCase() === location.city.toLowerCase())
    .slice(0, 3);
  const fallbackReviews = reviews.slice(0, 3);
  const displayReviews = localReviews.length > 0 ? localReviews : fallbackReviews;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `https://mickeysgaragedoor.com/locations/${location.slug}`,
    name: company.name,
    url: `https://mickeysgaragedoor.com/locations/${location.slug}`,
    telephone: `+1${company.phonePlain}`,
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: { "@type": "AdministrativeArea", name: "San Diego County" },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: "CA",
      postalCode: location.zip[0],
      addressCountry: "US",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 px-4 py-2.5 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-blue-900">Locations</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{location.city}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-orange-400 font-semibold text-sm">{location.city}, {location.state}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              {location.headline}
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">{location.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href={`tel:${company.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-black px-6 py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {company.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 text-white font-black px-6 py-4 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {location.neighborhoods.map((n) => (
                <span key={n} className="text-xs bg-blue-800 text-blue-200 rounded-full px-3 py-1">
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-blue-900 mb-1">
              Get a Free Estimate in {location.city}
            </h2>
            <p className="text-sm text-gray-500 mb-4">Same-day service available · No obligation</p>
            <ContactForm compact />
          </div>
        </div>
      </section>

      {/* Local description */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Garage Door Services in {location.city}, CA
              </h2>
              <p className="text-gray-600 leading-relaxed">{location.description}</p>
            </div>

            {/* Local note */}
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <h3 className="font-bold text-orange-900 mb-1">Local Tip for {location.city} Homeowners</h3>
                  <p className="text-orange-800 text-sm leading-relaxed">{location.localNote}</p>
                </div>
              </div>
            </div>

            {/* Services grid */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-5">
                Services Available in {location.city}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-3 border border-gray-200 rounded-lg p-4 hover:border-blue-900 hover:bg-blue-50 transition-all"
                  >
                    <span className="text-xl flex-shrink-0">{service.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-900 transition-colors">
                        {service.shortTitle}
                      </p>
                      <p className="text-gray-400 text-xs">{service.priceRange.split(".")[0]}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-5">
                {location.city} Garage Door FAQs
              </h2>
              <FAQAccordion faqs={location.faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact card */}
            <div className="bg-blue-900 text-white rounded-xl p-6">
              <h3 className="font-black text-lg mb-2">Call Now</h3>
              <p className="text-blue-200 text-sm mb-4">{company.emergency}</p>
              <a
                href={`tel:${company.phonePlain}`}
                className="w-full flex items-center justify-center gap-2 bg-white text-blue-900 font-black py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {company.phone}
              </a>
              <p className="text-blue-300 text-xs text-center mt-3">{company.hours}</p>
            </div>

            {/* Neighborhoods */}
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Neighborhoods We Serve</h3>
              <ul className="space-y-1.5">
                {location.neighborhoods.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {n}
                  </li>
                ))}
              </ul>
            </div>

            {/* ZIP codes */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">ZIP Codes Served</h3>
              <p className="text-gray-500 text-sm">{location.zip.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            What {location.city} Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Need Garage Door Service in ${location.city}?`}
        subtext={`Same-day service available throughout ${location.city} and surrounding areas. Licensed, bonded & insured.`}
      />
    </>
  );
}
