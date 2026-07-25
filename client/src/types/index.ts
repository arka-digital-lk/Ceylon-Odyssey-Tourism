// Global TypeScript Definitions for Ceylon Odyssey Platform

export type AudienceMode = 'resident' | 'international';
export type CurrencyCode = 'LKR' | 'USD' | 'EUR' | 'GBP';
export type LanguageCode = 'en' | 'si' | 'ta';

export interface CurrencyRate {
  code: CurrencyCode;
  symbol: string;
  rateToLKR: number; // LKR base
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  category: 'Beaches' | 'Cultural' | 'Wildlife' | 'Hill Country' | 'Ancient Cities' | 'Adventure' | 'Family' | 'Romantic' | 'Wellness' | 'Northern' | 'Southern' | 'Eastern';
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  location: string;
  coordinates: { lat: number; lng: number };
  bestTimeToVisit: string;
  recommendedDays: number;
  mainAttractions: string[];
  thingsToDo: string[];
  travelTimeFromColombo: string;
  weatherInfo: string;
  travelTips: string[];
  safetyAdvice: string;
  culturalAdvice: string;
  nearbyDestinations: string[];
  rating: number;
  reviewCount: number;
}

export interface TourItineraryDay {
  day: number;
  title: string;
  location: string;
  activity: string;
  description: string;
  mealsIncluded: string[];
  accommodation: string;
  travelDuration: string;
  optionalActivities?: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  category: 'Day tours' | 'Weekend tours' | 'Family tours' | 'Couple tours' | 'Honeymoon tours' | 'Group tours' | 'Private tours' | 'Cultural tours' | 'Wildlife tours' | 'Beach holidays' | 'Adventure tours' | 'Hiking tours' | 'Food tours' | 'Wellness tours' | 'Luxury tours' | 'Budget tours' | 'School trips';
  heroImage: string;
  gallery: string[];
  shortDescription: string;
  fullDescription: string;
  durationDays: number;
  durationNights: number;
  startingLocation: string;
  endingLocation: string;
  priceLKR: number;
  priceUSD: number;
  residentDiscountPercentage?: number;
  rating: number;
  reviewCount: number;
  maxGroupSize: number;
  minAge: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  languages: string[];
  isPrivate: boolean;
  isInstantBooking: boolean;
  isFamilyFriendly: boolean;
  isAccessible: boolean;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourItineraryDay[];
  cancellationPolicy: string;
  pickupLocations: string[];
}

export interface Activity {
  id: string;
  slug: string;
  title: string;
  category: string;
  destination: string;
  heroImage: string;
  description: string;
  durationHours: number;
  priceLKR: number;
  priceUSD: number;
  rating: number;
  reviewCount: number;
  difficulty: string;
  included: string[];
  excluded: string[];
  safetyInfo: string;
}

export interface Accommodation {
  id: string;
  slug: string;
  name: string;
  destination: string;
  type: 'Hotel' | 'Resort' | 'Villa' | 'Guesthouse' | 'Eco-Lodge' | 'Boutique Hotel';
  heroImage: string;
  gallery: string[];
  description: string;
  pricePerNightLKR: number;
  pricePerNightUSD: number;
  rating: number;
  reviewCount: number;
  facilities: string[];
  roomTypes: string[];
  checkInTime: string;
  checkOutTime: string;
  nearbyAttractions: string[];
}

export interface TransportOption {
  id: string;
  type: 'Car' | 'Van' | 'Bus' | 'Tuk-Tuk' | 'Private Transfer' | 'Airport Transfer';
  name: string;
  image: string;
  passengerCapacity: number;
  luggageCapacity: number;
  hasAC: boolean;
  hasDriver: boolean;
  serviceArea: string;
  startingPriceLKR: number;
  startingPriceUSD: number;
}

export interface GuideProfile {
  id: string;
  name: string;
  photo: string;
  languages: string[];
  experienceYears: number;
  expertiseAreas: string[];
  destinationsCovered: string[];
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  bio: string;
}

export interface CustomerReview {
  id: string;
  customerName: string;
  customerCountry: string;
  profileImage: string;
  rating: number;
  reviewText: string;
  tourOrDestinationName: string;
  travelDate: string;
  travellerType: 'Solo' | 'Couple' | 'Family' | 'Friends';
  isVerifiedBooking: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  summary: string;
  contentMarkdown: string;
  author: string;
  publishedDate: string;
  readingTimeMinutes: number;
  relatedDestinations: string[];
}

export interface BookingDetails {
  id: string;
  tourId: string;
  tourTitle: string;
  tourImage: string;
  bookingDate: string;
  travelDate: string;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  selectedExtras: string[];
  pickupLocation: string;
  primaryContact: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    dietaryNotes?: string;
    specialRequests?: string;
  };
  totalAmountPaidLKR: number;
  currencyUsed: CurrencyCode;
  paymentStatus: 'Confirmed' | 'Pending Request' | 'Cancelled';
}

export interface PlannedItinerary {
  id: string;
  title: string;
  createdDate: string;
  days: number;
  destinations: string[];
  estimatedBudgetLKR: number;
  style: string;
  notes: string;
}
