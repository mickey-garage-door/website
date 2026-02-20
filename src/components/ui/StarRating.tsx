interface StarRatingProps {
  rating?: number;
  className?: string;
}

export default function StarRating({ rating = 5, className = "" }: StarRatingProps) {
  return (
    <span className={`text-yellow-400 tracking-tight ${className}`} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? "½" : ""}
    </span>
  );
}
