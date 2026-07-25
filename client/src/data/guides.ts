import { GuideProfile } from '../types';

export const SAMPLE_GUIDES: GuideProfile[] = [
  {
    id: 'guide-chaminda-perera',
    name: 'Chaminda Perera',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    languages: ['English', 'German', 'Sinhala'],
    experienceYears: 12,
    expertiseAreas: ['Ancient History & Citadel Archaeology', 'Wildlife Safaris', 'Tea Country'],
    destinationsCovered: ['Sigiriya', 'Kandy', 'Polonnaruwa', 'Ella', 'Yala'],
    rating: 4.9,
    reviewCount: 164,
    isVerified: true,
    bio: 'Licensed Tourist Board Guide with over 12 years of experience hosting European and local travellers across Sri Lanka’s ancient citadels and national parks.'
  },
  {
    id: 'guide-nimali-de-silva',
    name: 'Nimali De Silva',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    languages: ['English', 'French', 'Sinhala'],
    experienceYears: 9,
    expertiseAreas: ['Botanical & Tea Estate Walks', 'Culinary & Spice Tours', 'Cultural Etiquette'],
    destinationsCovered: ['Kandy', 'Nuwara Eliya', 'Colombo', 'Galle Fort'],
    rating: 5.0,
    reviewCount: 128,
    isVerified: true,
    bio: 'Specialist in culinary heritage, royal tea estates, and family-friendly cultural explorations.'
  },
  {
    id: 'guide-thrishan-kumar',
    name: 'Thrishan Kumar',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    languages: ['English', 'Tamil', 'Sinhala'],
    experienceYears: 15,
    expertiseAreas: ['Jaffna & Eastern Coast', 'Hindu Temples & Heritage', 'Whale Safaris'],
    destinationsCovered: ['Jaffna', 'Trincomalee', 'Arugam Bay', 'Batticaloa'],
    rating: 4.8,
    reviewCount: 94,
    isVerified: true,
    bio: 'Northern and Eastern Sri Lanka tour expert passionate about coastal heritage, Kovils, and local seafood gastronomy.'
  }
];
