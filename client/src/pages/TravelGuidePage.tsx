import React from 'react';
import { SAMPLE_TRAVEL_GUIDES } from '../data/travelGuides';
import { ShieldCheck, ExternalLink, Compass, AlertCircle, Info, Calendar } from 'lucide-react';

export const TravelGuidePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 font-sans">
      
      {/* Header */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Essential Traveler Information</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Sri Lanka Travel Guide & Advice</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Official guidance on E-Visa requirements, temple dress etiquette, monsoon seasons, currency, and emergency directory.
        </p>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SAMPLE_TRAVEL_GUIDES.map(topic => (
          <div key={topic.id} className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                {topic.category}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">Updated {topic.lastUpdated}</span>
            </div>

            <h3 className="font-serif font-bold text-xl text-slate-900">{topic.title}</h3>
            <p className="text-xs text-slate-600 font-medium">{topic.summary}</p>

            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              {topic.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {topic.officialLink && (
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={topic.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  <span>Visit Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Emergency Disclaimer Badge */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-900 text-xs flex items-center gap-3 font-medium">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
        <span>Disclaimer: Travel regulations, entry visas, and weather patterns are subject to change. Always verify official government notices before travel.</span>
      </div>

    </div>
  );
};
