import React from 'react';
import { Link } from 'react-router-dom';
import { Tour } from '../../types';
import { MapPin, Clock, Users, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { StarRating } from '../common/StarRating';
import { CurrencyBadge } from '../common/CurrencyBadge';
import { WishlistButton } from '../common/WishlistButton';
import { useApp } from '../../context/AppContext';

interface TourCardProps {
  tour: Tour;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { isCompared, toggleCompare } = useApp();

  const {
    id,
    slug,
    title,
    destination,
    category,
    heroImage,
    shortDescription,
    durationDays,
    durationNights,
    priceLKR,
    priceUSD,
    residentDiscountPercentage,
    rating,
    reviewCount,
    highlights,
    isPrivate,
    difficulty
  } = tour;

  const compared = isCompared(id);

  return (
    <div className={`group bg-white rounded-3xl border transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl transform hover:-translate-y-1 ${
      compared ? 'border-teal-600 ring-2 ring-teal-500/20' : 'border-slate-200/80 hover:border-teal-300'
    }`}>
      
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </div>

        {/* Private vs Group Pill */}
        <div className="absolute top-3 right-12 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          {isPrivate ? 'Private Tour' : 'Group Tour'}
        </div>

        {/* Wishlist Button */}
        <WishlistButton itemId={id} className="absolute top-3 right-3" />

        {/* Duration Overlay Pill */}
        <div className="absolute bottom-3 left-3 bg-teal-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>{durationDays} Days / {durationNights} Nights</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location & Difficulty */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1.5">
            <div className="flex items-center gap-1 text-teal-700">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{destination}</span>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full uppercase">
              {difficulty}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-teal-800 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {shortDescription}
          </p>

          {/* Highlights Checklist */}
          {highlights && highlights.length > 0 && (
            <div className="mt-3 space-y-1">
              {highlights.slice(0, 2).map((h, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Rating & Pricing Row */}
          <div className="pt-3 border-t border-slate-100 flex items-end justify-between gap-2 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting From</span>
              <CurrencyBadge
                priceLKR={priceLKR}
                priceUSD={priceUSD}
                residentDiscountPercentage={residentDiscountPercentage}
                size="md"
              />
            </div>
            <StarRating rating={rating} reviewCount={reviewCount} size="sm" />
          </div>

          {/* Action Buttons: Compare + View Details */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleCompare(id);
              }}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
                compared
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title={compared ? 'Remove from Compare' : 'Add to Compare'}
            >
              <Layers className="w-4 h-4" />
              <span className="sr-only sm:not-sr-only text-[11px]">{compared ? 'Compared' : 'Compare'}</span>
            </button>

            <Link
              to={`/tours/${slug || id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white text-xs font-bold py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span>View Tour & Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};
