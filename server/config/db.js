const mongoose = require('mongoose');

// Initial seed data for Sri Lanka destinations
const seedDestinations = [
  {
    id: "sigiriya",
    name: "Sigiriya Rock Fortress",
    slug: "sigiriya",
    tagline: "The ancient palace in the sky built atop a 200m monolith.",
    description: "Sigiriya, an ancient rock fortress in the Central Province of Sri Lanka, dominates a dense jungle plateau. King Kashyapa built his palace atop this 200-meter-high granite monolith in the 5th century. Visitors climb past water gardens, mirror walls inscribed with ancient poetry, world-famous frescoes, and giant lion paws guarding the final summit staircase.",
    location: "Dambulla, Central Province",
    region: "Central Province",
    category: "Cultural & Heritage Sites",
    rating: 4.8,
    totalReviews: 24,
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578564421650-0d72b849b291?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: [
      "UNESCO World Heritage Site",
      "Ancient 5th-century palace ruins",
      "World-renowned frescoes & Mirror Wall",
      "Panaromic 360-degree jungle views"
    ],
    coordinates: { lat: 7.957, lng: 80.7603 },
    priceLevel: "$$$",
    createdAt: new Date()
  },
  {
    id: "ella",
    name: "Ella Highlands & Nine Arch Bridge",
    slug: "ella",
    tagline: "Misty tea country, dramatic ridges, and iconic mountain railways.",
    description: "Nestled high in the Uva highlands, Ella is Sri Lanka's premiere mountain retreat. Surrounded by cloud forest, cascading waterfalls, and emerald tea plantations, Ella is famed for Little Adam's Peak, Ella Rock hikes, and the iconic Nine Arch Bridge where trains curve gracefully through lush valley passes.",
    location: "Ella, Uva Province",
    region: "Uva Province",
    category: "Hill Country & Tea Estates",
    rating: 4.9,
    totalReviews: 38,
    heroImage: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: [
      "Nine Arch Bridge train spot",
      "Little Adam's Peak sunrise hike",
      "Ravana Waterfalls & Zip-line",
      "Tea factory tours & tasting"
    ],
    coordinates: { lat: 6.8667, lng: 81.0466 },
    priceLevel: "$$",
    createdAt: new Date()
  },
  {
    id: "mirissa",
    name: "Mirissa Bay & Coconut Tree Hill",
    slug: "mirissa",
    tagline: "Golden palm-fringed coastlines, blue whale safaris, and sunset vibes.",
    description: "Mirissa is a vibrant coastal town on Sri Lanka's south coast. Famous for Coconut Tree Hill, Secret Beach, and world-class blue whale watching expeditions, Mirissa offers relaxed seaside cafes by day and fresh seafood dining right on the sand at sunset.",
    location: "Mirissa, Southern Province",
    region: "Southern Province",
    category: "Beaches",
    rating: 4.7,
    totalReviews: 19,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: [
      "Blue Whale & Dolphin Watching Safaris",
      "Iconic Coconut Tree Hill lookout",
      "Secret Beach & Surf breaks",
      "Beachfront candlelit seafood dining"
    ],
    coordinates: { lat: 5.9483, lng: 80.4716 },
    priceLevel: "$$",
    createdAt: new Date()
  },
  {
    id: "yala",
    name: "Yala National Park",
    slug: "yala",
    tagline: "Dense wilderness home to the highest leopard density on Earth.",
    description: "Yala National Park borders the Indian Ocean in the southeast. Renowned globally for having the world's highest density of wild leopards, Yala's lagoons, scrub jungles, and rocky outcrops are also sanctuary to wild elephant herds, sloth bears, crocodiles, and over 200 bird species.",
    location: "Tissamaharama, Southern Province",
    region: "Southern Province",
    category: "Wildlife & National Parks",
    rating: 4.8,
    totalReviews: 31,
    heroImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: [
      "World's highest density of wild leopards",
      "4x4 open-top jeep wildlife safaris",
      "Elephant herds & Sloth bear sightings",
      "Coastal lagoon habitats"
    ],
    coordinates: { lat: 6.3725, lng: 81.5173 },
    priceLevel: "$$$",
    createdAt: new Date()
  },
  {
    id: "kandy",
    name: "Kandy & Temple of the Sacred Tooth",
    slug: "kandy",
    tagline: "The royal cultural capital nestled around a serene highland lake.",
    description: "Kandy, Sri Lanka's last royal capital, is nestled among forested hills surrounding Kandy Lake. The city houses the revered Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), lush Royal Botanical Gardens in Peradeniya, and vibrant traditional Esala Perahera processions.",
    location: "Kandy, Central Province",
    region: "Central Province",
    category: "Cultural & Heritage Sites",
    rating: 4.6,
    totalReviews: 29,
    heroImage: "https://images.unsplash.com/photo-1578564421650-0d72b849b291?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578564421650-0d72b849b291?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: [
      "Temple of the Sacred Tooth Relic",
      "Peradeniya Royal Botanical Gardens",
      "Kandy Lake scenic strolls",
      "Kandyan traditional dance performances"
    ],
    coordinates: { lat: 7.2906, lng: 80.6337 },
    priceLevel: "$$",
    createdAt: new Date()
  },
  {
    id: "galle-fort",
    name: "Galle Dutch Fort",
    slug: "galle-fort",
    tagline: "Living 17th-century colonial fortress on the ocean's edge.",
    description: "Built by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, Galle Fort is a living UNESCO World Heritage citadel. Cobblestone ramparts, Dutch-colonial villas, boutique cafes, artisan jewelers, and the iconic Galle Lighthouse create a timeless Mediterranean atmosphere on the Indian Ocean.",
    location: "Galle, Southern Province",
    region: "Southern Province",
    category: "Cultural & Heritage Sites",
    rating: 4.8,
    totalReviews: 42,
    heroImage: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    highlights: [
      "Sunset walks along fortress ramparts",
      "Historic Galle Lighthouse",
      "Colonial architecture & boutique shopping",
      "Oceanfront cliff jumping spots"
    ],
    coordinates: { lat: 6.03, lng: 80.217 },
    priceLevel: "$$$",
    createdAt: new Date()
  }
];

const seedReviews = [
  {
    id: "r1",
    destinationId: "sigiriya",
    userName: "Elena Rostova",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2026-03-14",
    title: "Unbelievable sunrise experience!",
    comment: "Climbing Sigiriya early morning at 6:30 AM before the heat set in was the highlight of our Sri Lanka trip. The views from the top across the jungle misty canopy are breathtaking!",
    travelerType: "Couple",
    ratingsBreakdown: { location: 5, value: 5, service: 4, cleanliness: 5 }
  },
  {
    id: "r2",
    destinationId: "sigiriya",
    userName: "Marcus Thorne",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 4.5,
    date: "2026-02-28",
    title: "Incredible history and water gardens",
    comment: "The engineering behind the 5th-century water gardens and hydraulic systems is mind blowing. Make sure to hire an official licensed guide near the ticket counter.",
    travelerType: "Solo",
    ratingsBreakdown: { location: 5, value: 4, service: 5, cleanliness: 4 }
  },
  {
    id: "r3",
    destinationId: "ella",
    userName: "Sophia Chen",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "2026-04-02",
    title: "The train ride from Kandy to Ella is magical",
    comment: "Watching the blue train cross Nine Arch Bridge surrounded by tea plantations was like stepping into a postcard. We loved Little Adam's Peak hike as well!",
    travelerType: "Friends",
    ratingsBreakdown: { location: 5, value: 5, service: 5, cleanliness: 5 }
  }
];

// Memory DB Store fallback if MongoDB server isn't running locally
let memoryStore = {
  destinations: [...seedDestinations],
  reviews: [...seedReviews]
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tourism_db', {
      serverSelectionTimeoutMS: 2000 // fast timeout to fallback cleanly
    });
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
    return { isConnected: true };
  } catch (error) {
    console.warn(`[DB] MongoDB not running locally (${error.message}). Using built-in Sri Lanka tourism memory store.`);
    return { isConnected: false, memoryStore };
  }
};

module.exports = { connectDB, memoryStore, seedDestinations, seedReviews };
