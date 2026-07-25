import React from 'react';
import { Link } from 'react-router-dom';
import { GuideProfile } from '../../types';
import { ShieldCheck, Globe, MapPin, Award, MessageCircle } from 'lucide-react';
import { StarRating } from '../common/StarRating';

export const GuideCard: React.FC<{ guide: GuideProfile }> = ({ guide }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group">
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img
              src={guide.photo}
              alt={guide.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-500/20 shadow"
            />
            {guide.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-teal-600 text-white rounded-full p-1 shadow" title="Official Licensed Tourist Board Guide">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-teal-800 transition-colors">
              {guide.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mt-0.5">
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {guide.experienceYears} Years Exp
              </span>
              <span>•</span>
              <StarRating rating={guide.rating} reviewCount={guide.reviewCount} size="sm" />
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
          {guide.bio}
        </p>

        <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <Globe className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span>Languages: {guide.languages.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">Covers: {guide.destinationsCovered.join(', ')}</span>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Link
          to={`/guides/${guide.id}`}
          className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold py-2.5 rounded-xl shadow transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Request Local Guide</span>
        </Link>
      </div>
    </div>
  );
};
