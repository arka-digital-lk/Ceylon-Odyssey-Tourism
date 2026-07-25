import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { SAMPLE_TOURS } from '../../data/tours';
import { useApp } from '../../context/AppContext';
import { formatPrice } from '../../lib/currency';
import { CheckCircle2, ShieldCheck, Calendar, Users, MapPin, Download, ArrowRight, ArrowLeft, Clock, CreditCard } from 'lucide-react';

export const BookingStepFlow: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tourId = searchParams.get('tourId') || '7-day-sri-lanka-highlights';
  const initialDate = searchParams.get('date') || '2026-08-15';
  const initialAdults = parseInt(searchParams.get('adults') || '2');

  const tour = SAMPLE_TOURS.find(t => t.id === tourId) || SAMPLE_TOURS[0];
  const { currency, audienceMode, addBooking, userProfile } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [travelDate, setTravelDate] = useState(initialDate);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['Airport Transfer']);
  
  // Traveller Info
  const [fullName, setFullName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [phone, setPhone] = useState(userProfile.phone);
  const [country, setCountry] = useState('United Kingdom');
  const [pickupLocation, setPickupLocation] = useState(tour.pickupLocations[0] || 'Colombo Airport');
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  const toggleExtra = (extra: string) => {
    setSelectedExtras(prev =>
      prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
    );
  };

  const basePriceLKR = (tour.priceLKR * (audienceMode === 'resident' ? 0.85 : 1)) * adults;
  const extrasPriceLKR = selectedExtras.length * 15000;
  const totalLKR = basePriceLKR + extrasPriceLKR;

  const handleFinalBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!policyAccepted) return;

    const newBookingId = 'CEYLON-' + Math.floor(10000 + Math.random() * 90000);
    const newBooking = {
      id: newBookingId,
      tourId: tour.id,
      tourTitle: tour.title,
      tourImage: tour.heroImage,
      bookingDate: new Date().toISOString().split('T')[0],
      travelDate,
      adultsCount: adults,
      childrenCount: children,
      infantsCount: 0,
      selectedExtras,
      pickupLocation,
      primaryContact: {
        fullName,
        email,
        phone,
        country
      },
      totalAmountPaidLKR: totalLKR,
      currencyUsed: currency,
      paymentStatus: 'Confirmed' as const
    };

    addBooking(newBooking);
    setConfirmedBookingId(newBookingId);
    setStep(7);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans space-y-8">
      
      {/* Checkout Header */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">7-Step Booking Checkout</span>
            <h1 className="font-serif font-bold text-2xl md:text-3xl text-slate-900">{tour.title}</h1>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Price</span>
            <div className="font-serif font-extrabold text-2xl text-teal-800">
              {formatPrice(totalLKR, currency, tour.priceUSD)}
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-7 gap-1 text-[10px] font-bold text-center text-slate-400">
          {[1, 2, 3, 4, 5, 6, 7].map(s => (
            <div
              key={s}
              className={`py-1.5 rounded-lg transition-all ${
                s === step
                  ? 'bg-teal-700 text-white shadow-sm'
                  : s < step
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              Step {s}
            </div>
          ))}
        </div>
      </div>

      {step < 7 ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-xl space-y-6">
          
          {/* STEP 1: Tour Overview */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">Step 1: Confirm Tour & Travel Date</h3>
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4 border border-slate-200">
                <img src={tour.heroImage} alt={tour.title} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <div className="font-bold text-sm text-slate-900">{tour.title}</div>
                  <div className="text-xs text-slate-500">{tour.durationDays} Days / {tour.durationNights} Nights • {tour.destination}</div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Travel Date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={e => setTravelDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* STEP 2: Travellers Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">Step 2: Select Travellers</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Adults (12+ yrs)</label>
                  <input
                    type="number"
                    min={1}
                    value={adults}
                    onChange={e => setAdults(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Children (2-11 yrs)</label>
                  <input
                    type="number"
                    min={0}
                    value={children}
                    onChange={e => setChildren(parseInt(e.target.value) || 0)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Options & Extras */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">Step 3: Optional Upgrades & Services</h3>
              <div className="space-y-2">
                {['Airport Pickup & Dropoff Transfer', 'Private Licensed English Tour Guide', '5-Star Hotel Upgrade'].map(extra => {
                  const active = selectedExtras.includes(extra);
                  return (
                    <button
                      key={extra}
                      type="button"
                      onClick={() => toggleExtra(extra)}
                      className={`w-full p-4 rounded-2xl border text-xs font-bold text-left flex items-center justify-between transition-all ${
                        active
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{extra}</span>
                      {active && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Primary Contact Details */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">Step 4: Lead Traveller Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Telephone / WhatsApp *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Country of Residence *</label>
                  <input
                    type="text"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Order Summary */}
          {step === 5 && (
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">Step 5: Booking Review & Price Summary</h3>
              <div className="p-5 bg-teal-50 border border-teal-200 rounded-2xl space-y-3 text-xs text-teal-900">
                <div className="font-bold text-sm">{tour.title}</div>
                <div><strong>Travel Date:</strong> {travelDate} • <strong>Travellers:</strong> {adults} Adults, {children} Children</div>
                <div><strong>Lead Contact:</strong> {fullName} ({email})</div>
                <div><strong>Selected Extras:</strong> {selectedExtras.join(', ') || 'None'}</div>
                <div className="pt-3 border-t border-teal-200 text-sm font-extrabold flex justify-between">
                  <span>Total Amount Due:</span>
                  <span>{formatPrice(totalLKR, currency, tour.priceUSD)}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Policy Consent */}
          {step === 6 && (
            <form onSubmit={handleFinalBooking} className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-slate-900">Step 6: Confirm & Accept Terms</h3>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
                <p>By proceeding, you agree to Ceylon Odyssey’s booking & cancellation conditions.</p>
                <p>Free cancellation up to 14 days before departure. Payment via card or bank transfer.</p>
              </div>

              <label className="flex items-center gap-2 text-xs font-bold text-slate-800 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={policyAccepted}
                  onChange={e => setPolicyAccepted(e.target.checked)}
                  className="accent-teal-700 w-4 h-4"
                  required
                />
                <span>I accept the booking conditions, privacy policy, and cancellation policy.</span>
              </label>

              <button
                type="submit"
                disabled={!policyAccepted}
                className="w-full bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-extrabold text-sm py-3.5 rounded-2xl shadow-lg disabled:opacity-50"
              >
                Confirm & Create Booking Voucher
              </button>
            </form>
          )}

          {/* Navigation Controls */}
          {step < 6 && (
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-1 text-xs font-bold text-slate-600 px-4 py-2 rounded-xl border border-slate-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-1 bg-teal-700 text-white font-extrabold text-xs px-6 py-2.5 rounded-xl shadow"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* STEP 7: Confirmation Voucher */
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 space-y-6 shadow-2xl animate-in fade-in duration-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Booking Confirmed!</span>
              <h2 className="font-serif font-bold text-2xl text-white">Voucher #{confirmedBookingId}</h2>
            </div>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3 text-xs text-slate-200">
            <div><strong>Tour:</strong> {tour.title}</div>
            <div><strong>Travel Date:</strong> {travelDate}</div>
            <div><strong>Lead Traveller:</strong> {fullName} ({phone})</div>
            <div><strong>Pickup Spot:</strong> {pickupLocation}</div>
            <div className="pt-2 border-t border-slate-700 text-sm font-bold text-amber-400">
              Amount Confirmed: {formatPrice(totalLKR, currency, tour.priceUSD)}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/account/bookings"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>View Booking in My Account</span>
            </Link>
            <Link
              to="/"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs px-6 py-3 rounded-xl border border-slate-700"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      )}

    </div>
  );
};
