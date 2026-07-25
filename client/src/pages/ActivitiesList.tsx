import React from 'react';
import { SAMPLE_ACTIVITIES } from '../data/activities';
import { ActivityCard } from '../components/activities/ActivityCard';
import { Compass, Sparkles } from 'lucide-react';

export const ActivitiesList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Things to Do</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Popular Sri Lanka Activities & Excursions</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Wildlife safaris, whale watching ocean boats, beginner surf lessons, and highland train journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SAMPLE_ACTIVITIES.map(act => (
          <ActivityCard key={act.id} activity={act} />
        ))}
      </div>
    </div>
  );
};
