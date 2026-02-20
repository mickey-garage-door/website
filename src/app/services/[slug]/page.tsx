import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { company } from "@/data/company";
import CTABanner from "@/components/sections/CTABanner";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ContactForm from "@/components/forms/ContactForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@id": "https://mickeysgaragedoor.com/#business",
    },
    areaServed: { "@type": "City", "name": "San Diego", "containedIn": "San Diego County, CA" },
    description: service.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: service.priceRange,
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
          <Link href="/services" className="hover:text-blue-900">Services</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{service.title}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              {service.headline}
            </h1>
            <p className="text-blue-100 text-lg mb-7 leading-relaxed">{service.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="flex items-center gap-4 mt-6 text-sm text-blue-200">
              <span>✓ Same-Day Service</span>
              <span>✓ Free Estimate</span>
              <span>✓ {service.warranty}</span>
            </div>
          </div>

          {/* Inline quick form */}
          <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-blue-900 mb-1">
              Request a Free {service.shortTitle} Estimate
            </h2>
            <p className="text-sm text-gray-500 mb-4">We respond within 1 hour during business hours.</p>
            <ContactForm defaultService={service.shortTitle} compact />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Left: content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                About {service.shortTitle} Service in San Diego
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
            </div>

            {/* Signs */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Signs You Need {service.shortTitle}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-3">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">⚠</span>
                    <span className="text-sm text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, idx) => (
                  <div key={step.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-blue-900 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.step}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">
            {/* Pricing card */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-black text-blue-900 text-lg mb-2">Pricing</h3>
              <p className="text-gray-700 text-sm mb-4">{service.priceRange}</p>
              <a
                href={`tel:${company.phonePlain}`}
                className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call for Free Estimate
              </a>
            </div>

            {/* Warranty card */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-bold text-green-800 mb-1">Warranty Included</h3>
              <p className="text-sm text-green-700">{service.warranty}</p>
            </div>

            {/* Brands */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Brands We Service</h3>
              <div className="flex flex-wrap gap-2">
                {service.brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="border border-gray-200 rounded-xl p-6 space-y-3 text-sm text-gray-600">
              {[
                "✓ Licensed, Bonded & Insured",
                "✓ Background-Checked Technicians",
                "✓ Upfront Pricing — No Surprises",
                "✓ Fully Stocked Trucks",
                "✓ 24/7 Emergency Line",
              ].map((item) => (
                <p key={item} className="font-medium text-gray-700">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-900 hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-2">{rel.icon}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {rel.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{rel.description.split(".")[0]}.</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner heading={`Need ${service.shortTitle} in San Diego?`} />
    </>
  );
}
