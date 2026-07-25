import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Sparkles, Calendar, MapPin, CheckCircle, ArrowRight, ArrowLeft, Users, DollarSign, Compass } from 'lucide-react';
import { formatPrice } from '../../lib/currency';

export const PlannerWizard: React.FC = () => {
  const { audienceMode, currency, addItinerary } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [travellerType, setTravellerType] = useState<'Couple' | 'Family' | 'Solo' | 'Friends'>('Couple');
  const [arrivalDate, setArrivalDate] = useState('2026-08-20');
  const [durationDays, setDurationDays] = useState(7);
  const [adultsCount, setAdultsCount] = useState(2);
  const [budgetTier, setBudgetTier] = useState<'Standard' | 'Luxury' | 'Budget'>('Standard');
  
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Beaches & Ocean', 'Tea Country & Trains', 'Wildlife Safaris', 'Ancient Rock Citadels'
  ]);

  const [requiresDriver, setRequiresDriver] = useState(true);
  const [requiresGuide, setRequiresGuide] = useState(true);
  const [notes, setNotes] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const interestOptions = [
    'Beaches & Ocean',
    'Tea Country & Trains',
    'Wildlife Safaris',
    'Ancient Rock Citadels',
    'Surfing & Water Sports',
    'Ayurveda & Wellness',
    'Culinary & Food Tours',
    'Hiking & Mountain Peaks'
  ];

  const toggleInterest = (item: string) => {
    setSelectedInterests(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const calculateEstimateLKR = () => {
    const basePerDay = budgetTier === 'Luxury' ? 65000 : budgetTier === 'Standard' ? 38000 : 22000;
    return basePerDay * durationDays * adultsCount;
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  const handleSaveItinerary = () => {
    const newItin = {
      id: 'ITIN-' + Math.floor(1000 + Math.random() * 9000),
      title: `${durationDays}-Day Custom Ceylon ${budgetTier} Odyssey`,
      createdDate: new Date().toISOString().split('T')[0],
      days: durationDays,
      destinations: ['Colombo', 'Sigiriya', 'Kandy', 'Ella', 'Mirissa'],
      estimatedBudgetLKR: calculateEstimateLKR(),
      style: `${budgetTier} ${travellerType} Travel`,
      notes: notes || 'Generated custom trip itinerary.'
    };
    addItinerary(newItin);
    navigate('/account/itineraries');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-10 shadow-xl max-w-4xl mx-auto font-sans">
      
      {/* Wizard Progress Header */}
      <div className="mb-8 border-b border-slate-100 pb-6">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-3">
          <span className="text-teal-800 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Custom Trip Builder Step {step} of 4
          </span>
          <span>{step === 1 ? 'Traveller Profile' : step === 2 ? 'Duration & Budget' : step === 3 ? 'Interests & Sights' : 'Review & Generate'}</span>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
          {[1, 2, 3, 4].map(s => (
            <div
              key={s}
              className={`h-full flex-1 transition-all ${
                s <= step ? 'bg-gradient-to-r from-teal-600 to-emerald-600' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      {!isGenerated ? (
        <form onSubmit={handleGenerate} className="space-y-6">
          
          {/* STEP 1: Traveller Profile */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-900">Who is travelling?</h3>
                <p className="text-xs text-slate-500 mt-1">Tell us about your group so we can tailor pace and hotel options.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(['Couple', 'Family', 'Solo', 'Friends'] as const).map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTravellerType(type)}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      travellerType === type
                        ? 'bg-teal-50 border-teal-600 text-teal-900 font-extrabold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 font-bold'
                    }`}
                  >
                    <Users className="w-6 h-6 mx-auto mb-2 text-teal-700" />
                    <span className="text-xs">{type}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Number of Adult Travellers</label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={adultsCount}
                    onChange={e => setAdultsCount(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Expected Arrival Date</label>
                  <input
                    type="date"
                    value={arrivalDate}
                    onChange={e => setArrivalDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Duration & Budget */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-900">Duration & Travel Style</h3>
                <p className="text-xs text-slate-500 mt-1">Select how long you plan to stay and your preferred accommodation tier.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Trip Duration: <strong className="text-teal-800 text-sm">{durationDays} Days</strong></label>
                <input
                  type="range"
                  min={3}
                  max={21}
                  value={durationDays}
                  onChange={e => setDurationDays(parseInt(e.target.value))}
                  className="w-full accent-teal-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-1">
                  <span>3 Days (Short Escape)</span>
                  <span>7 Days (Classic)</span>
                  <span>14 Days (Grand Odyssey)</span>
                  <span>21 Days (Full Island)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Preferred Accommodation & Travel Tier</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Budget', 'Standard', 'Luxury'] as const).map(tier => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudgetTier(tier)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        budgetTier === tier
                          ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-extrabold text-sm">{tier}</div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {tier === 'Budget' ? 'Clean guesthouses & homestays' : tier === 'Standard' ? '4-star boutique hotels & lodges' : '5-star luxury resorts & villas'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Interests & Experiences */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-900">What would you love to see?</h3>
                <p className="text-xs text-slate-500 mt-1">Select all experiences that excite you most in Sri Lanka.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {interestOptions.map(option => {
                  const selected = selectedInterests.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleInterest(option)}
                      className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all flex items-center justify-between ${
                        selected
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-600 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{option}</span>
                      {selected && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <span className="font-bold text-slate-800">Transport & Guide Preferences</span>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={requiresDriver}
                      onChange={e => setRequiresDriver(e.target.checked)}
                      className="accent-teal-700"
                    />
                    <span>Private Car & Chauffeur Driver</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={requiresGuide}
                      onChange={e => setRequiresGuide(e.target.checked)}
                      className="accent-teal-700"
                    />
                    <span>Licensed English Tour Guide</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Generate */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-900">Final Trip Details</h3>
                <p className="text-xs text-slate-500 mt-1">Review your selections and enter any special requests before generating your itinerary.</p>
              </div>

              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl text-xs space-y-2 text-teal-900">
                <div className="font-bold text-sm text-teal-950">{durationDays}-Day Ceylon Custom Odyssey</div>
                <div><strong>Group:</strong> {adultsCount} Adults ({travellerType}) • <strong>Tier:</strong> {budgetTier}</div>
                <div><strong>Selected Interests:</strong> {selectedInterests.join(', ')}</div>
                <div className="pt-2 border-t border-teal-200/80 font-bold text-sm">
                  Estimated Total: {formatPrice(calculateEstimateLKR(), currency)}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Special Requests or Dietary Requirements</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Vegetarian meals, honeymoon setup, airport arrival flight UL504..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl border border-slate-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs px-6 py-2.5 rounded-xl shadow-md"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-1.5 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-extrabold text-xs px-8 py-3 rounded-xl shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Custom Itinerary</span>
              </button>
            )}
          </div>

        </form>
      ) : (
        /* GENERATED RESULT DISPLAY */
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>Success! Your custom Sri Lanka travel itinerary is ready.</span>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Custom Itinerary Preview</span>
            <h2 className="font-serif font-bold text-3xl text-white">{durationDays}-Day Ceylon Custom Odyssey</h2>
            <div className="text-xs text-slate-300">
              Sigiriya Citadel ➔ Kandy Sacred Temple ➔ Ella Highland Train ➔ Yala Leopard Safari ➔ Mirissa Coast
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Estimated Price</span>
                <div className="font-serif font-bold text-2xl text-amber-400">
                  {formatPrice(calculateEstimateLKR(), currency)}
                </div>
              </div>
              <button
                onClick={handleSaveItinerary}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow"
              >
                Save to My Account
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
