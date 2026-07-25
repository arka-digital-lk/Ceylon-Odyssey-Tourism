import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, ShieldCheck, Award, MessageCircle, Heart, ArrowRight, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Official Local Travel Experts</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Handpicked Sri Lankan itineraries crafted by experienced local tour directors and licensed guides.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Transparent Resident & Int'l Rates</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Special LKR rates for local residents & transparent USD/EUR packages with no hidden fees.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <MessageCircle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">24/7 WhatsApp & Emergency Support</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Real-time assistance for driver pickups, train seat updates, and island tour modifications.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
              <Lock className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Flexible & Secure Booking</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Card payments, bank transfers, pay later options, and clear cancellation policies.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif font-extrabold text-2xl text-white tracking-tight">Ceylon Odyssey</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Ceylon Odyssey is an authentic Sri Lankan tourism and tour booking platform. We connect local and international travellers with curated itineraries, private vehicles, expert guides, and unforgettable wildlife and cultural experiences.
            </p>
            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Head Office: No. 42 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotline: +94 11 234 5678 / +94 77 123 4567 (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: travel@ceylonodyssey.lk</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Destinations */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Destinations</h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/destinations/sigiriya" className="hover:text-teal-400 transition-colors">Sigiriya Rock Citadel</Link></li>
              <li><Link to="/destinations/ella" className="hover:text-teal-400 transition-colors">Ella Mountain Ridge</Link></li>
              <li><Link to="/destinations/mirissa" className="hover:text-teal-400 transition-colors">Mirissa Whale Coast</Link></li>
              <li><Link to="/destinations/yala" className="hover:text-teal-400 transition-colors">Yala Leopard Reserve</Link></li>
              <li><Link to="/destinations/kandy" className="hover:text-teal-400 transition-colors">Kandy Sacred Kingdom</Link></li>
              <li><Link to="/destinations/galle-fort" className="hover:text-teal-400 transition-colors">Galle Dutch Ramparts</Link></li>
              <li><Link to="/destinations/trincomalee" className="hover:text-teal-400 transition-colors">Trincomalee Beaches</Link></li>
            </ul>
          </div>

          {/* Quick Links: Experience Categories */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Tour Types</h5>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><Link to="/tours?category=Cultural+tours" className="hover:text-teal-400 transition-colors">Cultural & Ancient Cities</Link></li>
              <li><Link to="/tours?category=Wildlife+tours" className="hover:text-teal-400 transition-colors">Wildlife & Jeep Safaris</Link></li>
              <li><Link to="/tours?category=Beach+holidays" className="hover:text-teal-400 transition-colors">Beach & Whale Vacations</Link></li>
              <li><Link to="/tours?category=Weekend+tours" className="hover:text-teal-400 transition-colors">Weekend Resident Escapes</Link></li>
              <li><Link to="/trip-planner" className="hover:text-teal-400 transition-colors">Custom Trip Planner</Link></li>
              <li><Link to="/transport" className="hover:text-teal-400 transition-colors">Airport Cars & Drivers</Link></li>
              <li><Link to="/guides" className="hover:text-teal-400 transition-colors">Licensed Tour Guides</Link></li>
            </ul>
          </div>

          {/* Travel Resources & Newsletter */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Travel Digest</h5>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe for seasonal monsoon travel alerts, special Sri Lankan resident deals, and high tea spot recommendations.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs py-2.5 rounded-xl shadow transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Subscribe Newsletter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Legal Pages Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ceylon Odyssey (Pvt) Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium">
            <Link to="/legal" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <Link to="/legal" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-slate-300 transition-colors">Cancellation Policy</Link>
            <Link to="/travel-guide" className="hover:text-slate-300 transition-colors">Visa Information</Link>
            <Link to="/travel-guide" className="hover:text-slate-300 transition-colors">Temple Dress Etiquette</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Emergency Directory</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
