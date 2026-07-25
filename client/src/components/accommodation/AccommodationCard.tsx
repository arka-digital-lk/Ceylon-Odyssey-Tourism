import React from 'react';
import { Link } from 'react-router-dom';
import { Accommodation } from '../../types';
import { MapPin, ArrowRight, Check } from 'lucide-react';
import { StarRating } from '../common/StarRating';
import { CurrencyBadge } from '../common/CurrencyBadge';

export const AccommodationCard: React.FC<{ accommodation: Accommodation }> = ({ accommodation }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={accommodation.heroImage}
          alt={accommodation.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
          {accommodation.type}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1 text-xs text-teal-700 font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{accommodation.destination}</span>
          </div>

          <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-teal-800 transition-colors line-clamp-1">
            {accommodation.name}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {accommodation.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {accommodation.facilities.slice(0, 3).map((f, i) => (
              <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-600" />
                {f}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Per Night</span>
              <CurrencyBadge priceLKR={accommodation.pricePerNightLKR} priceUSD={accommodation.pricePerNightUSD} size="sm" />
            </div>
            <StarRating rating={accommodation.rating} reviewCount={accommodation.reviewCount} size="sm" />
          </div>

          <Link
            to={`/accommodation/${accommodation.slug}`}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-all"
          >
            <span>View Stay & Request Room</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
