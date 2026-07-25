import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Award, ShieldCheck, Heart, Sparkles, MapPin, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-16 shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
          <Compass className="w-4 h-4" />
          <span>About Ceylon Odyssey</span>
        </div>

        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-white max-w-4xl mx-auto leading-tight">
          Authentic Sri Lanka Travel Designed for Local & Global Explorers
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Connecting travellers with Sri Lanka’s ancient citadels, emerald tea country, and wild leopard reserves through transparent, reliable, and authentic itineraries.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-xl text-slate-900">Local Expertise</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Founded and operated by Sri Lankan travel directors with over 15 years of island tourism experience.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-xl text-slate-900">Transparent Pricing</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Honest LKR pricing for local residents and clear USD/EUR packages for international visitors without hidden surcharges.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-xl text-slate-900">Sustainable Tourism</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Supporting local wildlife conservation, eco-lodges, and fair wages for local drivers and guides.
          </p>
        </div>
      </div>

    </div>
  );
};
