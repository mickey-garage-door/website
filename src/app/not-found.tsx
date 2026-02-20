import Link from "next/link";
import { company } from "@/data/company";

export default function NotFound() {
  return (
    <section className="py-24 px-4 bg-white text-center">
      <div className="max-w-xl mx-auto">
        <div className="text-7xl mb-6">🚪</div>
        <h1 className="text-4xl font-black text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-lg mb-8">
          Looks like this page doesn&apos;t exist. Maybe the door led somewhere else — let us help you get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-900 text-white font-bold px-7 py-4 rounded-xl hover:bg-blue-800 transition-colors"
          >
            Back to Home
          </Link>
          <a
            href={`tel:${company.phonePlain}`}
            className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold px-7 py-4 rounded-xl hover:bg-orange-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
