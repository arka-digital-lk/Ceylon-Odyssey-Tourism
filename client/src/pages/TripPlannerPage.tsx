import React from 'react';
import { PlannerWizard } from '../components/trip-planner/PlannerWizard';

export const TripPlannerPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Custom Sri Lanka Itinerary</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Plan Your Custom Ceylon Trip</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Specify your travel dates, group type, budget tier, and preferred experiences. Receive an instant customized itinerary breakdown and quote.
        </p>
      </div>

      <PlannerWizard />
    </div>
  );
};
