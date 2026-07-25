import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { SAMPLE_TOURS } from '../data/tours';
import { TourCard } from '../components/tours/TourCard';
import { StarRating } from '../components/common/StarRating';
import { WishlistButton } from '../components/common/WishlistButton';
import { MapPin, Calendar, Clock, CheckCircle2, ShieldCheck, ArrowLeft, Sun, Compass, HelpCircle } from 'lucide-react';

export const DestinationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = SAMPLE_DESTINATIONS.find(d => d.slug === slug || d.id === slug) || SAMPLE_DESTINATIONS[0];
  const [activeImage, setActiveImage] = useState(destination.heroImage);

  // Available tours for this destination
  const matchingTours = SAMPLE_TOURS.filter(
    t => t.destinationSlug === destination.slug || t.destination.toLowerCase().includes(destination.name.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      
      {/* Back Button */}
      <Link to="/destinations" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-teal-700">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Destinations</span>
      </Link>

      {/* Header Specs */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">{destination.category}</span>
          <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">{destination.region}</span>
        </div>

        <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-slate-900">{destination.name}</h1>
        <p className="text-sm text-slate-600 font-medium">{destination.tagline}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-200 pb-4 text-xs">
          <div className="flex items-center gap-3">
            <StarRating rating={destination.rating} reviewCount={destination.reviewCount} />
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-600 font-semibold">
              <MapPin className="w-4 h-4 text-teal-700" />
              {destination.location}
            </span>
          </div>

          <WishlistButton itemId={destination.id} />
        </div>
      </div>

      {/* Gallery Lightbox */}
      <div className="space-y-3">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 shadow-md">
          <img src={activeImage} alt={destination.name} className="w-full h-full object-cover transition-all" />
        </div>

        {destination.gallery.length > 1 && (
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {destination.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 ${
                  activeImage === img ? 'border-teal-600 scale-105 shadow' : 'border-transparent opacity-75'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <h2 className="font-serif font-bold text-2xl text-slate-900">About {destination.name}</h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">{destination.description}</p>
          </div>

          {/* Highlights & Things To Do */}
          <div className="bg-emerald-50/60 rounded-3xl border border-emerald-100 p-6 md:p-8 space-y-4">
            <h3 className="font-serif font-bold text-xl text-slate-900">Main Attractions & Sights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-slate-800">
              {destination.mainAttractions.map((att, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{att}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Tips & Cultural Advice */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm text-xs">
            <h3 className="font-serif font-bold text-xl text-slate-900">Travel Advice & Etiquette</h3>
            <div className="space-y-2 text-slate-700">
              <div><strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}</div>
              <div><strong>Travel Time from Colombo:</strong> {destination.travelTimeFromColombo}</div>
              <div><strong>Weather:</strong> {destination.weatherInfo}</div>
              <div><strong>Safety Advice:</strong> {destination.safetyAdvice}</div>
              <div><strong>Cultural Etiquette:</strong> {destination.culturalAdvice}</div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4 shadow-xl">
            <h3 className="font-serif font-bold text-xl text-white">Plan Your Visit</h3>
            <p className="text-xs text-slate-300">We arrange private driver transport, licensed guides, and entry tickets for {destination.name}.</p>
            <Link
              to={`/trip-planner`}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs py-3 rounded-xl shadow inline-flex items-center justify-center gap-2"
            >
              <span>Add to Custom Trip</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Available Tours Section */}
      <section className="space-y-6">
        <h2 className="font-serif font-bold text-3xl text-slate-900">Available Tours Visiting {destination.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchingTours.map(t => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </section>

    </div>
  );
};
