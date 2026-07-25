import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviewCount,
  showText = true,
  size = 'sm'
}) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.4;

  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < fullStars;
          const isHalf = i === fullStars && hasHalf;
          return (
            <Star
              key={i}
              className={`${starSizes[size]} ${
                isFilled || isHalf
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-300'
              }`}
            />
          );
        })}
      </div>
      {showText && (
        <div className="flex items-center gap-1 text-xs font-semibold text-slate-800">
          <span>{rating.toFixed(1)}</span>
          {reviewCount !== undefined && (
            <span className="text-slate-500 font-normal">({reviewCount})</span>
          )}
        </div>
      )}
    </div>
  );
};
