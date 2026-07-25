import { CustomerReview } from '../types';

export const SAMPLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    customerName: 'Elena & Lucas Moreau',
    customerCountry: 'France',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'The 7-Day Grand Sri Lanka Tour was magical! Our private driver-guide Chaminda was punctual, extremely knowledgeable about Sigiriya history, and helped us spot two wild leopards in Yala. Highly recommended!',
    tourOrDestinationName: '7-Day Grand Sri Lanka Cultural & Nature Odyssey',
    travelDate: 'March 2026',
    travellerType: 'Couple',
    isVerifiedBooking: true
  },
  {
    id: 'rev-2',
    customerName: 'Nuwan & Family',
    customerCountry: 'Sri Lanka (Resident)',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'We booked the weekend Ella escape package for our family. Excellent local resident rate discount, smooth Kandy train ticket arrangements, and great hotel choices in Nuwara Eliya. Subha aluth avuruddak!',
    tourOrDestinationName: '3-Day Ella & Nuwara Eliya Tea Country Escape',
    travelDate: 'April 2026',
    travellerType: 'Family',
    isVerifiedBooking: true
  },
  {
    id: 'rev-3',
    customerName: 'Sarah Jenkins',
    customerCountry: 'Australia',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewText: 'Mirissa whale safari and Galle Fort sunset walk were unforgettable. The custom trip planner helped us organize airport transfers without any hassle. Ceylon Odyssey made our honeymoon stress-free!',
    tourOrDestinationName: '4-Day Southern Coast Beaches & Whales',
    travelDate: 'February 2026',
    travellerType: 'Couple',
    isVerifiedBooking: true
  }
];
