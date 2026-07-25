import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { SAMPLE_TOURS } from '../data/tours';
import { SAMPLE_ACTIVITIES } from '../data/activities';
import { SAMPLE_REVIEWS } from '../data/reviews';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { TourCard } from '../components/tours/TourCard';
import { ActivityCard } from '../components/activities/ActivityCard';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { Search, Calendar, Users, Compass, Award, ShieldCheck, Sparkles, ArrowRight, Phone, MessageCircle, Heart, MapPin } from 'lucide-react';

export const Home: React.FC = () => {
  const { audienceMode, setAudienceMode } = useApp();
  const navigate = useNavigate();

  const [searchDestination, setSearchDestination] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [searchDate, setSearchDate] = useState('');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchDestination) params.append('q', searchDestination);
    if (searchCategory && searchCategory !== 'All') params.append('category', searchCategory);
    navigate(`/tours?${params.toString()}`);
  };

  return (
    <div className="space-y-16 pb-16 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[620px] flex items-center justify-center pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-45">
          <img
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1920&auto=format&fit=crop"
            alt="Sri Lanka Misty Highlands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-inner">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Sri Lanka Premier Tour & Discovery Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
            Discover the Beauty of <span className="inline-block whitespace-nowrap text-emerald-400 underline decoration-amber-400 underline-offset-8">Sri Lanka.</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Explore unforgettable destinations, tours, activities, and authentic local experiences created for Sri Lankan and international travellers.
          </p>

          {/* Search Form Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-200 text-left">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
              
              {/* Destination Field */}
              <div className="bg-slate-50 rounded-2xl px-3.5 py-2.5 border border-slate-200">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Where to?</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                  <input
                    type="text"
                    placeholder="Sigiriya, Ella, Mirissa..."
                    value={searchDestination}
                    onChange={e => setSearchDestination(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Experience Type */}
              <div className="bg-slate-50 rounded-2xl px-3.5 py-2.5 border border-slate-200">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Category</label>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-teal-700 shrink-0" />
                  <select
                    value={searchCategory}
                    onChange={e => setSearchCategory(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Categories</option>
                    <option value="Cultural tours">Cultural Tours</option>
                    <option value="Wildlife tours">Wildlife Safaris</option>
                    <option value="Beach holidays">Beach Holidays</option>
                    <option value="Weekend tours">Weekend Escapes</option>
                  </select>
                </div>
              </div>

              {/* Travel Date */}
              <div className="bg-slate-50 rounded-2xl px-3.5 py-2.5 border border-slate-200">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Travel Month</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal-700 shrink-0" />
                  <input
                    type="month"
                    value={searchDate}
                    onChange={e => setSearchDate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Search Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-extrabold text-sm py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Tours</span>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Explore Paradise</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 mt-1">Popular Sri Lanka Destinations</h2>
          </div>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>View All Destinations ({SAMPLE_DESTINATIONS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_DESTINATIONS.slice(0, 4).map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* TRAVELLER-SPECIFIC OFFERS (Resident vs International Tabs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-700 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Customized For You</span>
              <h2 className="font-serif font-bold text-3xl text-white mt-1">Tailored Packages & Special Rates</h2>
            </div>

            <div className="inline-flex bg-slate-800 p-1 rounded-2xl border border-slate-700">
              <button
                onClick={() => setAudienceMode('international')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  audienceMode === 'international'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                International Visitor Packages
              </button>
              <button
                onClick={() => setAudienceMode('resident')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  audienceMode === 'resident'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sri Lankan Resident Deals
              </button>
            </div>
          </div>

          {audienceMode === 'resident' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Up to 20% Local Discount
                </span>
                <h3 className="font-serif font-bold text-xl text-white">Weekend Highland Escapes</h3>
                <p className="text-xs text-slate-300">Ella & Nuwara Eliya weekend trips with local hotel resident rates & train seats.</p>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Group & Family Offers
                </span>
                <h3 className="font-serif font-bold text-xl text-white">School & University Trips</h3>
                <p className="text-xs text-slate-300">Coaster bus hires, group meals, and Sigiriya cultural heritage entry discounts.</p>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Easy Payments
                </span>
                <h3 className="font-serif font-bold text-xl text-white">Bank Transfer & LANKAPAY</h3>
                <p className="text-xs text-slate-300">Direct online bank transfers (Commercial, HNB, Sampath) & LKR QR payments.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Airport Pickup Included
                </span>
                <h3 className="font-serif font-bold text-xl text-white">Multi-Day All-Inclusive Tours</h3>
                <p className="text-xs text-slate-300">Private chauffeur vehicle, reserved observation trains, and 4-star hotels.</p>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Licensed Guides
                </span>
                <h3 className="font-serif font-bold text-xl text-white">English, German & French Guides</h3>
                <p className="text-xs text-slate-300">Official Sri Lanka Tourist Board guides with cultural and wildlife expertise.</p>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-3">
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Visa & Arrival Advice
                </span>
                <h3 className="font-serif font-bold text-xl text-white">E-Visa Assistance & Currency</h3>
                <p className="text-xs text-slate-300">Instant currency conversion (USD/EUR/GBP) and guidance for E-Visa entry.</p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Top Rated Experiences</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 mt-1">Featured Sri Lanka Tour Packages</h2>
          </div>
          <Link
            to="/tours"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>Explore All Tours ({SAMPLE_TOURS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_TOURS.slice(0, 3).map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* CUSTOM TRIP PLANNER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-900 via-emerald-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Interactive Itinerary Engine</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Want a Personalized Sri Lanka Itinerary?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Use our 4-step trip builder to specify your group size, budget tier, beach/safari preferences, and get a customized travel plan with instant price estimates.
            </p>
          </div>

          <Link
            to="/trip-planner"
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105 shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Start Trip Planner Wizard</span>
          </Link>
        </div>
      </section>

      {/* REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Verified Feedback</span>
          <h2 className="font-serif font-bold text-3xl text-slate-900">What Travellers Say About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_REVIEWS.map(rev => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>
      </section>

    </div>
  );
};
