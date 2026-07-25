import React, { useState } from 'react';
import { SAMPLE_TRANSPORT } from '../data/transport';
import { CurrencyBadge } from '../components/common/CurrencyBadge';
import { Car, ShieldCheck, CheckCircle2, Phone, Calendar, Clock, MapPin, Send } from 'lucide-react';

export const TransportPage: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('2026-08-15');
  const [time, setTime] = useState('10:00');
  const [passengers, setPassengers] = useState(2);
  const [vehicle, setVehicle] = useState(SAMPLE_TRANSPORT[0].id);
  const [flightNo, setFlightNo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      
      {/* Header */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Chauffeur & Airport Transfers</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Private Vehicles & Drivers in Sri Lanka</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Air-conditioned sedans, passenger vans, and coast coaches with dedicated English-speaking drivers.
        </p>
      </div>

      {/* Vehicle Fleet Cards */}
      <div className="space-y-6">
        <h2 className="font-serif font-bold text-2xl text-slate-900">Available Vehicle Fleet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_TRANSPORT.map(t => (
            <div key={t.id} className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <img src={t.image} alt={t.name} className="w-full h-36 object-cover rounded-2xl mb-3" />
                <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full">{t.type}</span>
                <h3 className="font-serif font-bold text-base text-slate-900 mt-1">{t.name}</h3>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Capacity: {t.passengerCapacity} Passengers • {t.luggageCapacity} Luggage Bags
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <CurrencyBadge priceLKR={t.startingPriceLKR} priceUSD={t.startingPriceUSD} size="sm" />
                <button
                  onClick={() => setVehicle(t.id)}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl"
                >
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transport Request Form */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-xl max-w-3xl mx-auto space-y-6">
        <h2 className="font-serif font-bold text-2xl text-slate-900">Request Transport & Chauffeur Quote</h2>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-bold space-y-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <p className="text-sm">Thank you! Your transport request has been received.</p>
            <p>Our dispatch team will WhatsApp / email you a confirmed driver quote within 15 minutes.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pickup Location *</label>
                <input
                  type="text"
                  placeholder="e.g. Bandaranaike Airport (CMB) / Hotel"
                  value={pickup}
                  onChange={e => setPickup(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Drop-off Location *</label>
                <input
                  type="text"
                  placeholder="e.g. Sigiriya / Kandy / Mirissa"
                  value={dropoff}
                  onChange={e => setDropoff(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pickup Date *</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 cursor-pointer"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Pickup Time *</label>
                <input
                  type="time"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 cursor-pointer"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Number of Passengers</label>
                <input
                  type="number"
                  min={1}
                  max={40}
                  value={passengers}
                  onChange={e => setPassengers(parseInt(e.target.value) || 1)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Flight Number (Airport Pickup)</label>
                <input
                  type="text"
                  placeholder="e.g. UL 504 / QR 668"
                  value={flightNo}
                  onChange={e => setFlightNo(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Transport Request</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
