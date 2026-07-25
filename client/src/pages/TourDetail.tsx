import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SAMPLE_TOURS } from '../data/tours';
import { SAMPLE_REVIEWS } from '../data/reviews';
import { TourBookingPanel } from '../components/tours/TourBookingPanel';
import { StarRating } from '../components/common/StarRating';
import { WishlistButton } from '../components/common/WishlistButton';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { MapPin, Clock, Users, ShieldCheck, CheckCircle2, XCircle, ChevronDown, HelpCircle, ArrowLeft, Share2 } from 'lucide-react';

export const TourDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = SAMPLE_TOURS.find(t => t.slug === slug || t.id === slug) || SAMPLE_TOURS[0];
  const [activeImage, setActiveImage] = useState(tour.heroImage);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const galleryImages = [tour.heroImage, ...tour.gallery.filter(g => g !== tour.heroImage)];

  const faqs = [
    {
      q: 'What clothing should I pack for this tour?',
      a: 'Light cotton clothes for warm coastal areas (Mirissa, Galle). For Nuwara Eliya & Ella highlands, pack a warm fleece jacket. For temples, bring white shoulders & knees covering clothing.'
    },
    {
      q: 'Is airport pickup and drop-off included?',
      a: 'Yes, private pickup from Bandaranaike International Airport (CMB) or your hotel in Colombo/Negombo is included in this tour.'
    },
    {
      q: 'Can this tour be customized for private families?',
      a: 'Absolutely! Click "Ask Question via WhatsApp" or use the Trip Planner to modify any hotel or activity in this itinerary.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      
      {/* Back Button */}
      <Link to="/tours" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-teal-700">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Tours</span>
      </Link>

      {/* Header Specs */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">{tour.category}</span>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">{tour.difficulty} Level</span>
          {tour.isPrivate && <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">Private Chauffeur Tour</span>}
        </div>

        <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-slate-900">{tour.title}</h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-200 pb-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-3">
            <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{tour.durationDays} Days / {tour.durationNights} Nights</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-teal-700" />
              <span>{tour.destination}</span>
            </div>
          </div>

          <WishlistButton itemId={tour.id} />
        </div>
      </div>

      {/* Gallery Lightbox */}
      <div className="space-y-3">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 shadow-md">
          <img src={activeImage} alt={tour.title} className="w-full h-full object-cover transition-all" />
        </div>

        {galleryImages.length > 1 && (
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {galleryImages.map((img, i) => (
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

      {/* Main Grid: Details + Sticky Booking Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left 2 Columns */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Overview */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <h2 className="font-serif font-bold text-2xl text-slate-900">Tour Overview</h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
              {tour.fullDescription}
            </p>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Starting Location</span>
                <span>{tour.startingLocation}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Ending Location</span>
                <span>{tour.endingLocation}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Max Group Size</span>
                <span>Up to {tour.maxGroupSize} Travellers</span>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-emerald-50/60 rounded-3xl border border-emerald-100 p-6 md:p-8 space-y-4">
            <h3 className="font-serif font-bold text-xl text-slate-900">Why You Will Love This Tour</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DAY-BY-DAY ITINERARY ACCORDIONS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-2xl text-slate-900">Day-by-Day Detailed Itinerary</h3>
              <span className="text-xs text-slate-500 font-bold">{tour.itinerary.length} Days Planned</span>
            </div>

            <div className="space-y-3">
              {tour.itinerary.map((dayItem) => {
                const isExpanded = expandedDay === dayItem.day;
                return (
                  <div key={dayItem.day} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedDay(isExpanded ? null : dayItem.day)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-teal-700 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                          D{dayItem.day}
                        </span>
                        <div>
                          <div className="font-serif font-bold text-sm text-slate-900">{dayItem.title}</div>
                          <div className="text-[11px] text-slate-500">{dayItem.location} • {dayItem.activity}</div>
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-4 pt-2 border-t border-slate-100 text-xs text-slate-700 space-y-2.5 bg-slate-50/50">
                        <p className="leading-relaxed font-normal">{dayItem.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 font-semibold text-[11px]">
                          <div><strong>Meals:</strong> {dayItem.mealsIncluded.join(', ')}</div>
                          <div><strong>Hotel:</strong> {dayItem.accommodation}</div>
                          <div><strong>Travel Time:</strong> {dayItem.travelDuration}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-sm">
              <h4 className="font-serif font-bold text-lg text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Included Services</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-sm">
              <h4 className="font-serif font-bold text-lg text-rose-800 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-500" />
                <span>Excluded Services</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {tour.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-700" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="space-y-3 text-xs">
              {faqs.map((faq, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Q: {faq.q}</div>
                  <p className="text-slate-600 leading-relaxed font-normal">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Column: Sticky Booking Panel */}
        <div>
          <TourBookingPanel tour={tour} />
        </div>

      </div>

    </div>
  );
};
