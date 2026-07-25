import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tour } from '../../types';
import { CurrencyBadge } from '../common/CurrencyBadge';
import { Calendar, Users, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TourBookingPanel: React.FC<{ tour: Tour }> = ({ tour }) => {
  const { audienceMode } = useApp();
  const navigate = useNavigate();

  const [travelDate, setTravelDate] = useState('2026-08-15');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pickupLocation, setPickupLocation] = useState(tour.pickupLocations[0] || 'Colombo Airport (CMB)');

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      tourId: tour.id,
      date: travelDate,
      adults: adults.toString(),
      children: children.toString(),
      pickup: pickupLocation
    }).toString();
    navigate(`/booking?${query}`);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xl space-y-6 sticky top-24 font-sans">
      
      {/* Price Header */}
      <div className="pb-4 border-b border-slate-100">
        <span className="text-xs text-slate-400 font-bold uppercase block">Price Per Person</span>
        <div className="flex items-baseline justify-between mt-1">
          <CurrencyBadge
            priceLKR={tour.priceLKR}
            priceUSD={tour.priceUSD}
            residentDiscountPercentage={tour.residentDiscountPercentage}
            size="lg"
          />
        </div>
      </div>

      <form onSubmit={handleStartBooking} className="space-y-4">
        
        {/* Travel Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-teal-700" />
            <span>Select Travel Date *</span>
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-600 cursor-pointer"
            required
          />
        </div>

        {/* Travellers Selector */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Adults (12+ yrs)
            </label>
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200"
              >
                -
              </button>
              <span className="flex-1 text-center text-xs font-bold text-slate-900">{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Children (2-11)
            </label>
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200"
              >
                -
              </button>
              <span className="flex-1 text-center text-xs font-bold text-slate-900">{children}</span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Pickup Location *
          </label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-600 cursor-pointer"
          >
            {tour.pickupLocations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Action CTAs */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-extrabold text-sm py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <span>Proceed to Book</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <a
          href={`https://wa.me/94771234567?text=${encodeURIComponent(`Hi Ceylon Odyssey, I want to ask a question about ${tour.title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs py-3 rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Ask Question via WhatsApp</span>
        </a>

      </form>

      {/* Trust Badges Footer */}
      <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-500 font-medium">
        <div className="flex items-center gap-2 text-emerald-800 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Instant Booking Confirmation Available</span>
        </div>
        <div>✓ {tour.cancellationPolicy}</div>
      </div>

    </div>
  );
};
