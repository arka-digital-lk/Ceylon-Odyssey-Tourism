import React from 'react';
import { SAMPLE_GUIDES } from '../data/guides';
import { GuideCard } from '../components/guides/GuideCard';

export const GuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Local Experts</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Licensed Sri Lanka Tour Guides</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Experienced, multi-lingual Sri Lanka Tourist Board licensed guides specializing in ancient history, tea country, and wildlife.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_GUIDES.map(guide => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
};
