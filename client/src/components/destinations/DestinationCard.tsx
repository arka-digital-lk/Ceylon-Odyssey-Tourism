import React from 'react';
import { Link } from 'react-router-dom';
import { Destination } from '../../types';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { StarRating } from '../common/StarRating';
import { WishlistButton } from '../common/WishlistButton';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const {
    id,
    slug,
    name,
    region,
    category,
    tagline,
    heroImage,
    location,
    rating,
    reviewCount,
    recommendedDays
  } = destination;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={heroImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </div>

        {/* Recommended Days Badge */}
        <div className="absolute top-3 right-12 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          {recommendedDays} Days Suggested
        </div>

        {/* Wishlist Button */}
        <WishlistButton itemId={id || slug} className="absolute top-3 right-3" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Region Location */}
          <div className="flex items-center text-xs font-semibold text-teal-700 mb-1 gap-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-teal-800 transition-colors line-clamp-1">
            {name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {tagline}
          </p>
        </div>

        <div>
          {/* Rating */}
          <div className="pt-3 border-t border-slate-100 mb-4">
            <StarRating rating={rating} reviewCount={reviewCount} />
          </div>

          {/* Action Link */}
          <Link
            to={`/destinations/${slug}`}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-all duration-200"
          >
            <span>Explore Destination & Tours</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
};
