import React from 'react';
import { ShieldCheck, FileText, Lock, RefreshCcw } from 'lucide-react';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Legal & Policy Terms</span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white">Terms, Privacy & Cancellation Policies</h1>
        <p className="text-slate-300 text-xs sm:text-sm">
          Please review Ceylon Odyssey’s travel booking conditions, refund guidelines, and privacy commitments.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-3 shadow-sm text-xs text-slate-700 leading-relaxed font-normal">
          <h2 className="font-serif font-bold text-xl text-slate-900">1. Booking Conditions & Rates</h2>
          <p>All tour bookings are subject to availability. Sri Lankan Resident discounts require proof of National Identity Card (NIC) or valid resident visa upon hotel check-in.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-3 shadow-sm text-xs text-slate-700 leading-relaxed font-normal">
          <h2 className="font-serif font-bold text-xl text-slate-900">2. Cancellation & Refund Policy</h2>
          <p>Full 100% refund for cancellations submitted up to 14 days prior to tour departure date. 50% refund for cancellations submitted 7-13 days prior.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-3 shadow-sm text-xs text-slate-700 leading-relaxed font-normal">
          <h2 className="font-serif font-bold text-xl text-slate-900">3. Privacy & Data Protection</h2>
          <p>We respect customer privacy and never store unencrypted credit card details or share contact information with unauthorized third parties.</p>
        </div>
      </div>
    </div>
  );
};
