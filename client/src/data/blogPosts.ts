import { BlogPost } from '../types';

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: 'kandy-to-ella-train-guide',
    slug: 'kandy-to-ella-train-guide',
    title: 'Complete Guide to Taking the Kandy to Ella Scenic Train in 2026',
    category: 'Travel tips',
    heroImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop',
    summary: 'Everything you need to know about ticket classes, seat reservations, timetable updates, and best observation sides for Sri Lanka’s blue train.',
    contentMarkdown: `
The train journey between Kandy and Ella is celebrated globally as one of the world's most breathtaking rail trips. Traversing high-altitude cloud forests, tea estates, and waterfall ravines, this guide provides practical tips for travellers.

### Ticket Classes Explained
- **1st Class Air-Conditioned Observation**: Sealed windows, comfortable reclining seats.
- **2nd Class Reserved**: Open windows for taking scenic photos, comfortable padded seats. Recommended!
- **3rd Class Reserved**: Affordable and lively atmosphere with local snack vendors selling vadai and hot Ceylon tea.

### Best Side to Sit
When traveling from Kandy to Nanu Oya (Nuwara Eliya), sit on the **Right Side**. From Nanu Oya to Ella, switch to the **Left Side** for valley views over Nine Arch Bridge!
    `,
    author: 'Nimanthi Perera',
    publishedDate: 'May 12, 2026',
    readingTimeMinutes: 6,
    relatedDestinations: ['Kandy', 'Ella', 'Nuwara Eliya']
  },
  {
    id: 'sri-lanka-monsoon-weather-season-guide',
    slug: 'sri-lanka-monsoon-weather-season-guide',
    title: 'Sri Lanka Weather & Monsoon Seasons: When to Visit Which Coast',
    category: 'Seasonal travel',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    summary: 'Sri Lanka has two distinct monsoon seasons. Discover how to enjoy year-round sunshine by picking the right coast for your travel dates.',
    contentMarkdown: `
Because Sri Lanka is influenced by two opposing monsoons, there is always a sunny beach or dry safari park somewhere on the island!

### November to April: South & West Coast Dry Season
Head to **Mirissa, Galle, Bentota, Hikkaduwa, Colombo, and Sigiriya**. Perfect for whale watching and heritage climbs.

### May to October: East Coast Sunshine
Head to **Trincomalee, Passikudah, Arugam Bay, and Jaffna**. Excellent for ocean swimming, diving, and world-class surfing.
    `,
    author: 'Captain Dinesh Fernando',
    publishedDate: 'June 01, 2026',
    readingTimeMinutes: 5,
    relatedDestinations: ['Mirissa', 'Trincomalee', 'Arugam Bay']
  }
];
