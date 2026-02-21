import type { Metadata } from "next";
import { company } from "@/data/company";
import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/ui/ReviewCard";
import StarRating from "@/components/ui/StarRating";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Reviews | Mickey's Garage Door San Diego",
  description: `Read ${company.reviewCount} verified reviews from San Diego homeowners. Mickey's Garage Door — ${company.ratingValue} stars on Google. Licensed, bonded & insured.`,
  alternates: { canonical: "/reviews" },
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mickeysgaragedoor.com/#business",
  name: company.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: company.ratingValue,
    reviewCount: company.reviewCount.replace("+", ""),
    bestRating: "5",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    reviewBody: r.text,
    datePublished: r.date,
  })),
};

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <section className="bg-brand-gradient-hero text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating rating={parseFloat(avgRating)} className="text-3xl" />
            <span className="text-4xl font-black">{company.ratingValue}</span>
          </div>
          <h1 className="text-4xl font-black mb-3">Customer Reviews</h1>
          <p className="text-blue-100 text-lg">{company.reviewCount} verified reviews from San Diego homeowners.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 p-6 bg-surface-alt rounded-2xl border border-theme transition-colors duration-300">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter((r) => r.rating === star).length;
              const pct = Math.round((count / reviews.length) * 100);
              return (
                <div key={star} className="text-center">
                  <div className="text-yellow-400 text-lg mb-1">{"★".repeat(star)}</div>
                  <div className="text-2xl font-black text-gray-900 dark:text-gray-100">{count}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{pct}%</div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Want to see more reviews or leave your own?</p>
            <a
              href={company.googleReviewsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border-2 border-theme text-gray-700 dark:text-gray-300 font-bold px-6 py-3 rounded-lg hover:border-brand-dark dark:hover:border-brand-cyan hover:text-brand-dark dark:hover:text-brand-cyan transition-colors"
            >
              View on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
