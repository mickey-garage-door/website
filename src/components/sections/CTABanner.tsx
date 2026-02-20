import Link from "next/link";
import { company } from "@/data/company";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = "Ready to Fix Your Garage Door Today?",
  subtext = "Same-day service available. Licensed, bonded & insured. Free on-site estimates.",
}: CTABannerProps) {
  return (
    <section className="bg-blue-900 text-white py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-3">{heading}</h2>
        <p className="text-blue-200 mb-8 text-lg">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${company.phonePlain}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-black px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            {company.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-orange-500 text-white font-black px-8 py-4 rounded-lg text-lg hover:bg-orange-600 transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
        <p className="mt-5 text-blue-300 text-sm">{company.emergency}</p>
      </div>
    </section>
  );
}
