import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SAMPLE_TOURS } from '../data/tours';
import { TourCard } from '../components/tours/TourCard';
import { User, Calendar, Heart, Sparkles, Settings, Download, Phone, Mail, ShieldCheck } from 'lucide-react';
import { formatPrice } from '../lib/currency';

export const AccountPage: React.FC = () => {
  const location = useLocation();
  const activeTab = location.pathname.split('/account/')[1] || 'profile';
  const { userProfile, setUserProfile, userBookings, wishlist, plannedItineraries, currency } = useApp();

  const wishlistedTours = SAMPLE_TOURS.filter(t => wishlist.includes(t.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Account Header */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow">
            {userProfile.name.charAt(0)}
          </div>
          <div>
            <div className="font-serif font-bold text-2xl text-white">{userProfile.name}</div>
            <div className="text-xs text-slate-400">{userProfile.email} • {userProfile.phone}</div>
          </div>
        </div>

        {/* Tab Navigation Pill */}
        <div className="flex flex-wrap gap-1 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
          <Link to="/account/profile" className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'profile' ? 'bg-teal-700 text-white' : 'text-slate-400 hover:text-white'}`}>
            Profile
          </Link>
          <Link to="/account/bookings" className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'bookings' ? 'bg-teal-700 text-white' : 'text-slate-400 hover:text-white'}`}>
            My Bookings ({userBookings.length})
          </Link>
          <Link to="/account/saved" className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'saved' ? 'bg-teal-700 text-white' : 'text-slate-400 hover:text-white'}`}>
            Saved Wishlist ({wishlist.length})
          </Link>
          <Link to="/account/itineraries" className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'itineraries' ? 'bg-teal-700 text-white' : 'text-slate-400 hover:text-white'}`}>
            Custom Trips ({plannedItineraries.length})
          </Link>
        </div>
      </div>

      {/* TAB CONTENT: PROFILE */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Personal Information</h2>
          <div className="space-y-4 text-xs font-medium">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={e => setUserProfile({ ...userProfile, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                value={userProfile.email}
                onChange={e => setUserProfile({ ...userProfile, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
              <input
                type="tel"
                value={userProfile.phone}
                onChange={e => setUserProfile({ ...userProfile, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: BOOKINGS */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Your Confirmed Tour Bookings</h2>
          {userBookings.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center text-xs text-slate-500 border border-slate-200">
              No tour bookings found. Explore our tours and start your Sri Lankan journey!
            </div>
          ) : (
            <div className="space-y-4">
              {userBookings.map(b => (
                <div key={b.id} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img src={b.tourImage} alt={b.tourTitle} className="w-20 h-20 rounded-2xl object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full uppercase">
                        {b.paymentStatus}
                      </span>
                      <h3 className="font-serif font-bold text-lg text-slate-900 mt-1">{b.tourTitle}</h3>
                      <div className="text-xs text-slate-500 font-medium">
                        Travel Date: {b.travelDate} • {b.adultsCount} Adults • Ref #{b.id}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-serif font-bold text-lg text-teal-800">
                      {formatPrice(b.totalAmountPaidLKR, currency)}
                    </div>
                    <button className="text-xs text-teal-700 font-bold hover:underline flex items-center gap-1 mt-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Voucher</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT: SAVED WISHLIST */}
      {activeTab === 'saved' && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Saved Wishlist Items</h2>
          {wishlistedTours.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center text-xs text-slate-500 border border-slate-200">
              Your saved wishlist is currently empty.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wishlistedTours.map(t => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT: CUSTOM ITINERARIES */}
      {activeTab === 'itineraries' && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Your Custom Trip Itineraries</h2>
          <div className="space-y-4">
            {plannedItineraries.map(itin => (
              <div key={itin.id} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-700">{itin.days}-Day Custom Itinerary</span>
                  <span className="text-xs font-serif font-bold text-slate-900">{formatPrice(itin.estimatedBudgetLKR, currency)}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-900">{itin.title}</h3>
                <div className="text-xs text-slate-500">Destinations: {itin.destinations.join(' ➔ ')}</div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
