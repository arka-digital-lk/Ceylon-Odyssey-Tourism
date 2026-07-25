import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Compass, Search, User, Menu, X, Globe, DollarSign,
  Layers, Phone, LogIn, LogOut, Sparkles
} from 'lucide-react';
import { CurrencyCode } from '../../types';

export const Header: React.FC = () => {
  const {
    audienceMode, setAudienceMode,
    currency, setCurrency,
    compareList, userProfile, setUserProfile
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Auth popover state
  const [authPanelOpen, setAuthPanelOpen] = useState(false);
  const [authModeTab, setAuthModeTab] = useState<'signin' | 'signup'>('signin');
  const [loginEmail, setLoginEmail] = useState('alex.wright@example.com');
  const [loginPassword, setLoginPassword] = useState('••••••••');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGlobalSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchModalOpen(false);
      setSearchQuery('');
    }
  };

  const handleSignOut = () => {
    setUserProfile({
      name: 'Guest',
      email: '',
      phone: '',
      isGuest: true
    });
    navigate('/');
  };

  const handleQuickSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      name: loginEmail.toLowerCase().includes('alex') ? 'Alexander Wright' : (loginEmail.split('@')[0] || 'Traveller'),
      email: loginEmail,
      phone: '+44 7700 900077',
      isGuest: false
    });
    setAuthPanelOpen(false);
    navigate('/');
  };

  const handleQuickSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      name: signupName.trim() || 'New Traveller',
      email: signupEmail.trim() || 'user@example.com',
      phone: '+94 77 123 4567',
      isGuest: false
    });
    setAuthPanelOpen(false);
    navigate('/');
  };

  const navLinks = [
    { label: 'Tours', href: '/tours' },
    { label: 'Things to Do', href: '/activities' },
    { label: 'Accommodations', href: '/accommodation' },
    { label: 'Transport', href: '/transport' },
    { label: 'Guides', href: '/guides' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      
      {/* Top Utility Announcement & Settings Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Audience Mode Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-semibold hidden sm:inline">I am travelling as:</span>
            <div className="inline-flex bg-slate-800 p-0.5 rounded-full border border-slate-700">
              <button
                onClick={() => setAudienceMode('international')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  audienceMode === 'international'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                International Visitor
              </button>
              <button
                onClick={() => setAudienceMode('resident')}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                  audienceMode === 'resident'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sri Lankan Resident
              </button>
            </div>
          </div>

          {/* Currency, Language & Hotline */}
          <div className="flex items-center gap-4 ml-auto">
            
            {/* 24/7 Support Hotline */}
            <a href="tel:+94112345678" className="hidden lg:flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 font-medium">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>24/7 Support: +94 11 234 5678</span>
            </a>

            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
              <DollarSign className="w-3 h-3 text-teal-400" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                className="bg-transparent text-slate-200 font-bold focus:outline-none cursor-pointer"
              >
                <option value="LKR" className="bg-slate-900 text-slate-200">LKR (Rs.)</option>
                <option value="USD" className="bg-slate-900 text-slate-200">USD ($)</option>
                <option value="EUR" className="bg-slate-900 text-slate-200">EUR (€)</option>
                <option value="GBP" className="bg-slate-900 text-slate-200">GBP (£)</option>
              </select>
            </div>

            {/* Language Display (Only English) */}
            <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-200 font-bold text-xs">
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span>English</span>
            </div>

          </div>

        </div>
      </div>

      {/* Main Header Bar */}
      <div className={`bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all ${
        isScrolled ? 'shadow-lg py-3' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-600 via-emerald-600 to-amber-500 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-extrabold text-2xl text-slate-900 tracking-tight">Ceylon Odyssey</span>
                </div>
                <p className="text-[11px] text-teal-700 font-bold tracking-wide uppercase">Authentic Sri Lanka Travel</p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.map((cat) => {
                const isActive = location.pathname === cat.href;
                return (
                  <Link
                    key={cat.label}
                    to={cat.href}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-teal-50 text-teal-800 font-extrabold'
                        : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
                    }`}
                  >
                    {cat.label}
                  </Link>
                );
              })}

              {/* "Plan My Trip" CTA Button placed right after Contact Us */}
              <Link
                to="/trip-planner"
                className="ml-1.5 inline-flex items-center bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Plan My Trip</span>
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 rounded-xl text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors"
                title="Search Tours"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Compare Tours Drawer Badge */}
              {compareList.length > 0 && (
                <Link
                  to="/tours"
                  className="relative p-2.5 rounded-xl text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors font-bold text-xs flex items-center gap-1"
                  title="Compare Tours"
                >
                  <Layers className="w-4 h-4" />
                  <span className="hidden sm:inline">Compare ({compareList.length})</span>
                </Link>
              )}

              {/* Human Icon Button & Auth Popover Panel */}
              <div className="relative">
                <button
                  onClick={() => setAuthPanelOpen(!authPanelOpen)}
                  className="p-1 rounded-full transition-all flex items-center justify-center"
                  title="Account / Sign In / Sign Up"
                >
                  {!userProfile.isGuest ? (
                    <div className="w-8.5 h-8.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-sm flex items-center justify-center shadow-md uppercase tracking-tight transition-transform transform hover:scale-105 border-2 border-amber-400/40">
                      {userProfile.name.trim().charAt(0)}
                    </div>
                  ) : (
                    <div className="p-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-100 transition-colors">
                      <User className="w-5 h-5 text-teal-700" />
                    </div>
                  )}
                </button>

                {/* Popover Panel */}
                {authPanelOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 z-50 animate-in fade-in zoom-in-95 duration-150 text-slate-900">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-teal-700" />
                        <span className="font-serif font-bold text-slate-900 text-lg">
                          {!userProfile.isGuest ? 'My Account' : 'Account Gateway'}
                        </span>
                      </div>
                      <button
                        onClick={() => setAuthPanelOpen(false)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-bold p-1 rounded-lg hover:bg-slate-100"
                      >
                        ✕
                      </button>
                    </div>

                    {!userProfile.isGuest ? (
                      <div className="space-y-4 text-xs">
                        <div className="flex items-center gap-3 p-3 bg-teal-50/70 rounded-2xl border border-teal-100">
                          <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-bold flex items-center justify-center text-sm shadow">
                            {userProfile.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{userProfile.name}</h4>
                            <p className="text-[11px] text-slate-500 font-medium">{userProfile.email}</p>
                          </div>
                        </div>

                        <Link
                          to="/account/profile"
                          onClick={() => setAuthPanelOpen(false)}
                          className="flex items-center justify-between w-full bg-slate-50 hover:bg-teal-50 hover:text-teal-800 text-slate-800 font-bold py-3 px-4 rounded-2xl transition-colors border border-slate-200"
                        >
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-teal-700" />
                            <span>My Profile & Bookings</span>
                          </div>
                          <span>→</span>
                        </Link>

                        <button
                          onClick={() => {
                            handleSignOut();
                            setAuthPanelOpen(false);
                          }}
                          className="flex items-center justify-center gap-2 w-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold py-3 rounded-2xl transition-all border border-rose-200"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Tab Switcher for Sign In / Sign Up */}
                        <div className="flex bg-slate-100 p-1 rounded-2xl">
                          <button
                            onClick={() => setAuthModeTab('signin')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              authModeTab === 'signin'
                                ? 'bg-white text-teal-800 shadow-sm'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                          >
                            Sign In Panel
                          </button>
                          <button
                            onClick={() => setAuthModeTab('signup')}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                              authModeTab === 'signup'
                                ? 'bg-white text-teal-800 shadow-sm'
                                : 'text-slate-500 hover:text-slate-800'
                            }`}
                          >
                            Sign Up Panel
                          </button>
                        </div>

                        {authModeTab === 'signin' ? (
                          <form onSubmit={handleQuickSignIn} className="space-y-3 text-xs">
                            <div>
                              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                              <input
                                type="email"
                                value={loginEmail}
                                onChange={e => setLoginEmail(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-600"
                                required
                              />
                            </div>
                            <div>
                              <label className="block font-bold text-slate-700 mb-1">Password</label>
                              <input
                                type="password"
                                value={loginPassword}
                                onChange={e => setLoginPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-600"
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold py-3 rounded-xl shadow transition-colors text-xs flex items-center justify-center gap-1.5"
                            >
                              <LogIn className="w-4 h-4" />
                              <span>Sign In Now</span>
                            </button>
                          </form>
                        ) : (
                          <form onSubmit={handleQuickSignUp} className="space-y-3 text-xs">
                            <div>
                              <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                              <input
                                type="text"
                                placeholder="Alexander Wright"
                                value={signupName}
                                onChange={e => setSignupName(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-600"
                                required
                              />
                            </div>
                            <div>
                              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                              <input
                                type="email"
                                placeholder="alex@example.com"
                                value={signupEmail}
                                onChange={e => setSignupEmail(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-600"
                                required
                              />
                            </div>
                            <div>
                              <label className="block font-bold text-slate-700 mb-1">Password</label>
                              <input
                                type="password"
                                placeholder="••••••••"
                                value={signupPassword}
                                onChange={e => setSignupPassword(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-600"
                                required
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold py-3 rounded-xl shadow transition-colors text-xs flex items-center justify-center gap-1.5"
                            >
                              <User className="w-4 h-4" />
                              <span>Create Account & Sign In</span>
                            </button>
                          </form>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
          <div className="p-3 bg-teal-50 rounded-xl mb-3 flex items-center justify-between text-xs text-teal-900 font-bold">
            <span>Audience: {audienceMode === 'resident' ? 'Sri Lankan Resident' : 'International Visitor'}</span>
            <span>{currency}</span>
          </div>

          {navLinks.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-teal-50 hover:text-teal-800 transition-colors"
            >
              {cat.label}
            </Link>
          ))}

          <Link
            to="/trip-planner"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-4 py-2.5 rounded-xl text-sm font-extrabold text-teal-800 bg-teal-50 border border-teal-100 transition-colors"
          >
            <span>Plan My Trip</span>
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {!userProfile.isGuest ? (
              <>
                <Link
                  to="/account/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-bold py-3 rounded-xl"
                >
                  <User className="w-4 h-4 text-teal-700" />
                  <span>Account ({userProfile.name})</span>
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-rose-50 text-rose-700 border border-rose-200 font-bold py-3 rounded-xl"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAuthPanelOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white font-bold py-3 rounded-xl shadow-md"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Global Search Modal Overlay */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-6 border border-slate-100 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-1">Search Ceylon Odyssey</h3>
            <p className="text-xs text-slate-500 mb-4">Discover Sri Lanka tours, safari activities, or travel guides...</p>

            <form onSubmit={handleGlobalSearch} className="space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Sigiriya climb, Ella train, Mirissa whales, Yala safari..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-teal-600"
                  autoFocus
                />
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-bold text-slate-400">Popular:</span>
                {['Sigiriya Citadel', 'Ella Blue Train', 'Yala Leopard Safari', 'Mirissa Whale Coast', 'Galle Fort Ramparts'].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => {
                      setSearchQuery(chip);
                      navigate(`/search?q=${encodeURIComponent(chip)}`);
                      setSearchModalOpen(false);
                    }}
                    className="bg-slate-100 hover:bg-teal-50 hover:text-teal-700 font-semibold px-3 py-1 rounded-full text-slate-700"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold py-3.5 rounded-2xl shadow-md text-sm"
              >
                Search Ceylon Odyssey
              </button>
            </form>
          </div>
        </div>
      )}

    </header>
  );
};
