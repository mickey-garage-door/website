import { Review } from "@/data/reviews";
import StarRating from "./StarRating";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-bold text-gray-900 text-sm">{review.name}</p>
          <p className="text-xs text-gray-500">{review.neighborhood}</p>
        </div>
        <div className="flex-shrink-0 text-xs text-gray-400">
          {new Date(review.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </div>
      </div>
      <StarRating rating={review.rating} className="text-base" />
      <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      <div className="text-xs font-medium text-blue-700 bg-blue-50 rounded-full px-3 py-1 self-start">
        {review.service}
      </div>
    </div>
  );
}
