import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../types';
import { Clock, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { StarRating } from '../common/StarRating';
import { CurrencyBadge } from '../common/CurrencyBadge';

export const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={activity.heroImage}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
          {activity.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1">
            <span className="text-teal-700 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {activity.destination}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              {activity.durationHours} Hours
            </span>
          </div>

          <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-teal-800 transition-colors line-clamp-1">
            {activity.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {activity.description}
          </p>
        </div>

        <div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mb-4">
            <CurrencyBadge priceLKR={activity.priceLKR} priceUSD={activity.priceUSD} size="sm" />
            <StarRating rating={activity.rating} reviewCount={activity.reviewCount} size="sm" />
          </div>

          <Link
            to={`/activities/${activity.slug}`}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 text-xs font-bold py-2.5 rounded-xl transition-all"
          >
            <span>Book Activity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
