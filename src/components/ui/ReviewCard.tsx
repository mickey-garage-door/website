import { Review } from "@/data/reviews";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm border border-theme flex flex-col gap-3 transition-colors duration-300">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-bold text-gray-900 dark:text-gray-100 text-sm">{review.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{review.neighborhood}</p>
        </div>
        <div className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
          {new Date(review.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </div>
      </div>
      <StarRating rating={review.rating} className="text-base" />
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="text-xs font-medium text-brand-dark dark:text-brand-cyan bg-blue-50 dark:bg-surface-raised rounded-full px-3 py-1 self-start">
        {review.service}
      </div>
    </div>
  );
}
