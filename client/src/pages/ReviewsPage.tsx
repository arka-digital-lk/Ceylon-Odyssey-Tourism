import React, { useState } from 'react';
import { SAMPLE_REVIEWS } from '../data/reviews';
import { ReviewCard } from '../components/reviews/ReviewCard';
import { Star, ShieldCheck, PlusCircle, CheckCircle2 } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Header */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Community Feedback</span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white mt-1">Verified Traveller Reviews</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
            Real experiences shared by local residents and foreign travellers who explored Sri Lanka with Ceylon Odyssey.
          </p>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-2xl shadow-lg shrink-0 flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SAMPLE_REVIEWS.map(rev => (
          <ReviewCard key={rev.id} review={rev} />
        ))}
      </div>

      {/* Review Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 space-y-4 border border-slate-100 relative">
            <h3 className="font-serif font-bold text-2xl text-slate-900">Write a Review</h3>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-bold space-y-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <p>Thank you! Your review has been submitted for verification.</p>
                <button onClick={() => { setShowSubmitModal(false); setSubmitted(false); }} className="bg-slate-900 text-white font-bold px-4 py-2 rounded-xl mt-2">Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Maya Lin"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Country *</label>
                  <input
                    type="text"
                    placeholder="e.g. Australia / Sri Lanka"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Review *</label>
                  <textarea
                    rows={4}
                    placeholder="Share your experience..."
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setShowSubmitModal(false)} className="flex-1 bg-slate-100 text-slate-700 font-bold py-2.5 rounded-xl">Cancel</button>
                  <button type="submit" className="flex-1 bg-teal-700 text-white font-bold py-2.5 rounded-xl">Submit Review</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
