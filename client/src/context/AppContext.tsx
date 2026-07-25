import React, { createContext, useContext, useState, useEffect } from 'react';
import { AudienceMode, CurrencyCode, LanguageCode, BookingDetails, PlannedItinerary } from '../types';

interface AppContextType {
  audienceMode: AudienceMode;
  setAudienceMode: (mode: AudienceMode) => void;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
  wishlist: string[];
  toggleWishlist: (itemId: string) => void;
  isWishlisted: (itemId: string) => boolean;
  compareList: string[];
  toggleCompare: (tourId: string) => void;
  isCompared: (tourId: string) => boolean;
  clearCompare: () => void;
  userBookings: BookingDetails[];
  addBooking: (booking: BookingDetails) => void;
  plannedItineraries: PlannedItinerary[];
  addItinerary: (itinerary: PlannedItinerary) => void;
  userProfile: { name: string; email: string; phone: string; isGuest: boolean };
  setUserProfile: (profile: { name: string; email: string; phone: string; isGuest: boolean }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [audienceMode, setAudienceMode] = useState<AudienceMode>('international');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [wishlist, setWishlist] = useState<string[]>(['sigiriya', 'ella-train-tour', 'yala-leopard-safari']);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [userBookings, setUserBookings] = useState<BookingDetails[]>([
    {
      id: 'CEYLON-84920',
      tourId: '7-day-sri-lanka-highlights',
      tourTitle: '7-Day Grand Sri Lanka Highlights & Culture',
      tourImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop',
      bookingDate: '2026-06-10',
      travelDate: '2026-08-15',
      adultsCount: 2,
      childrenCount: 1,
      infantsCount: 0,
      selectedExtras: ['Airport Transfer', 'Private English Guide'],
      pickupLocation: 'Bandaranaike International Airport (CMB)',
      primaryContact: {
        fullName: 'Alexander Wright',
        email: 'alex.wright@example.com',
        phone: '+44 7700 900077',
        country: 'United Kingdom'
      },
      totalAmountPaidLKR: 744000,
      currencyUsed: 'USD',
      paymentStatus: 'Confirmed'
    }
  ]);

  const [plannedItineraries, setPlannedItineraries] = useState<PlannedItinerary[]>([
    {
      id: 'ITIN-101',
      title: 'Romantic Beach & Tea Country Getaway',
      createdDate: '2026-07-01',
      days: 8,
      destinations: ['Colombo', 'Kandy', 'Ella', 'Mirissa', 'Galle'],
      estimatedBudgetLKR: 450000,
      style: 'Romantic & Relaxed',
      notes: 'Private car with English driver requested.'
    }
  ]);

  const GUEST_PROFILE = {
    name: 'Guest',
    email: '',
    phone: '',
    isGuest: true
  };

  const [userProfile, setUserProfileState] = useState(() => {
    try {
      const saved = localStorage.getItem('ceylon_odyssey_user_profile');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading user profile from localStorage:', e);
    }
    return GUEST_PROFILE;
  });

  const setUserProfile = (profile: { name: string; email: string; phone: string; isGuest: boolean }) => {
    setUserProfileState(profile);
    try {
      localStorage.setItem('ceylon_odyssey_user_profile', JSON.stringify(profile));
    } catch (e) {
      console.error('Error saving user profile to localStorage:', e);
    }
  };

  // When audience mode changes, set reasonable default currency
  const handleSetAudienceMode = (mode: AudienceMode) => {
    setAudienceMode(mode);
    if (mode === 'resident') {
      setCurrency('LKR');
    } else if (currency === 'LKR') {
      setCurrency('USD');
    }
  };

  const toggleWishlist = (itemId: string) => {
    setWishlist(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const isWishlisted = (itemId: string) => wishlist.includes(itemId);

  const toggleCompare = (tourId: string) => {
    setCompareList(prev => {
      if (prev.includes(tourId)) return prev.filter(id => id !== tourId);
      if (prev.length >= 3) return [...prev.slice(1), tourId]; // Keep max 3 items
      return [...prev, tourId];
    });
  };

  const isCompared = (tourId: string) => compareList.includes(tourId);
  const clearCompare = () => setCompareList([]);

  const addBooking = (booking: BookingDetails) => {
    setUserBookings(prev => [booking, ...prev]);
  };

  const addItinerary = (itinerary: PlannedItinerary) => {
    setPlannedItineraries(prev => [itinerary, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        audienceMode,
        setAudienceMode: handleSetAudienceMode,
        currency,
        setCurrency,
        language,
        setLanguage,
        wishlist,
        toggleWishlist,
        isWishlisted,
        compareList,
        toggleCompare,
        isCompared,
        clearCompare,
        userBookings,
        addBooking,
        plannedItineraries,
        addItinerary,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
