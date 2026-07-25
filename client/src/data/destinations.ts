import { Destination } from '../types';

export const SAMPLE_DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    slug: 'sigiriya',
    name: 'Sigiriya Ancient Citadel',
    region: 'Central Province',
    category: 'Ancient Cities',
    tagline: 'The 5th-century palace in the sky built upon a 200m granite monolith.',
    description: 'Sigiriya (Lion Rock) is an ancient rock citadel built by King Kashyapa in the 5th century. Rising 200 meters above dense emerald jungle, visitors walk past symmetrical water gardens, world-famous cave frescoes, the Mirror Wall inscribed with ancient poetry, and giant lion paws guarding the final staircase to the cloud-level royal ruins.',
    heroImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578564421650-0d72b849b291?q=80&w=1200&auto=format&fit=crop'
    ],
    location: 'Matale District, Central Province',
    coordinates: { lat: 7.957, lng: 80.7603 },
    bestTimeToVisit: 'December to April (Dry Season)',
    recommendedDays: 2,
    mainAttractions: [
      'Lion Paw Entrance & Summit Palace Ruins',
      '5th-Century Sigiriya Frescoes Gallery',
      'Mirror Wall Poetry Inscriptions',
      'Water & Terraced Boulder Gardens',
      'Pidurangala Rock Sunrise Viewpoint'
    ],
    thingsToDo: [
      'Climb Lion Rock at early sunrise',
      'Hike Pidurangala Rock for panorama photos',
      'Village bullock cart & traditional lunch tour',
      'Hot air balloon safari over Dambulla valley'
    ],
    travelTimeFromColombo: '3.5 Hours via Airport Expressway & A6',
    weatherInfo: 'Warm tropical climate, 27°C - 32°C. Morning climbs recommended to avoid noon heat.',
    travelTips: [
      'Start climbing at 6:30 AM to beat heat and crowds.',
      'Wear comfortable hiking shoes and bring at least 1.5L water.',
      'Respect sacred monkey wildlife on the trail.'
    ],
    safetyAdvice: 'Hold handrails near upper staircases. Avoid loud noises near hornet hives along upper cliff faces.',
    culturalAdvice: 'Modest shoulder and knee coverage required when visiting nearby temple grounds.',
    nearbyDestinations: ['Dambulla Cave Temple', 'Minneriya National Park', 'Polonnaruwa Ancient City'],
    rating: 4.9,
    reviewCount: 342
  },
  {
    id: 'ella',
    slug: 'ella',
    name: 'Ella Mountain Highlands',
    region: 'Uva Province',
    category: 'Hill Country',
    tagline: 'Misty tea ridges, cascading waterfalls, and world-renowned railways.',
    description: 'Ella is Sri Lanka’s premier hill-country retreat, set 1,000 meters above sea level amid mist-veiled tea estates, pine forests, and dramatic mountain passes. Famous for the Kandy-to-Ella scenic blue train, the Nine Arch Bridge, and sunrise hikes up Little Adam’s Peak.',
    heroImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'
    ],
    location: 'Badulla District, Uva Province',
    coordinates: { lat: 6.8667, lng: 81.0466 },
    bestTimeToVisit: 'January to May & July to September',
    recommendedDays: 3,
    mainAttractions: [
      'Demodara Nine Arch Railway Bridge',
      'Little Adam’s Peak & Flying Ravana Zipline',
      'Ella Rock Summit Hiking Trail',
      'Ravana Waterfalls & Cave Pool',
      'Lipton’s Seat Tea Estate Viewpoint'
    ],
    thingsToDo: [
      'Take the iconic blue train from Kandy to Ella',
      'Watch train pass over Nine Arch Bridge at 9:15 AM',
      'Zip-line across tea estate valleys',
      'Sample Ceylon artisan tea at Halpewatte Factory'
    ],
    travelTimeFromColombo: '5.5 Hours by Car / 9 Hours by Scenic Train',
    weatherInfo: 'Cool mountain air, 16°C - 24°C. Light jacket recommended for evenings.',
    travelTips: [
      'Book train tickets 30 days in advance for reserved observation car seats.',
      'Wear sturdy grip shoes for Ella Rock trek.'
    ],
    safetyAdvice: 'Stay behind safety ropes on Nine Arch Bridge train tracks.',
    culturalAdvice: 'Friendly highland villagers; ask permission before photographing tea pluckers.',
    nearbyDestinations: ['Nuwara Eliya', 'Haputale', 'Yala National Park'],
    rating: 4.9,
    reviewCount: 512
  },
  {
    id: 'mirissa',
    slug: 'mirissa',
    name: 'Mirissa Coastal Bay',
    region: 'Southern Province',
    category: 'Beaches',
    tagline: 'Palm-fringed golden beaches, blue whale safaris, and sunset seafood.',
    description: 'Mirissa is a vibrant ocean haven on Sri Lanka’s south coast, famous for blue whale and dolphin watching expeditions in the Indian Ocean, Coconut Tree Hill sunset views, surf breaks, and candlelit seafood dining along golden sand bays.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop'
    ],
    location: 'Matara District, Southern Province',
    coordinates: { lat: 5.9483, lng: 80.4716 },
    bestTimeToVisit: 'November to April (Calm Sea Season)',
    recommendedDays: 3,
    mainAttractions: [
      'Mirissa Blue Whale & Dolphin Safari Ocean Port',
      'Coconut Tree Hill Promontory',
      'Secret Beach Cove & Tidal Pools',
      'Parrot Rock Island Reef Lookout',
      'Weligama Surf Point'
    ],
    thingsToDo: [
      'Embark on early morning ocean whale safari',
      'Take sunset photos at Coconut Tree Hill',
      'Learn beginner surfing at Weligama bay',
      'Dine on fresh grilled red snapper at beach cafes'
    ],
    travelTimeFromColombo: '2.5 Hours via Southern Expressway (E01)',
    weatherInfo: 'Sunny tropical beach weather, 28°C - 33°C.',
    travelTips: [
      'Take anti-seasickness tablets 30 mins before whale safari boat departure.',
      'Check tide times before crossing to Parrot Rock.'
    ],
    safetyAdvice: 'Swim within designated beach flag zones due to occasional currents.',
    culturalAdvice: 'Relaxed beach vibe; beachwear appropriate on sand, cover up when in town streets.',
    nearbyDestinations: ['Galle Dutch Fort', 'Weligama', 'Tangalle'],
    rating: 4.8,
    reviewCount: 428
  },
  {
    id: 'yala',
    slug: 'yala',
    name: 'Yala Leopard Wilderness',
    region: 'Southern Province',
    category: 'Wildlife',
    tagline: 'Dense scrubland sanctuary home to the world’s highest density of wild leopards.',
    description: 'Bordering the Indian Ocean, Yala National Park is Sri Lanka’s flagship wildlife reserve. Spanning 978 square kilometers, it boasts the highest concentration of leopards in the world alongside wild Asian elephant herds, sloth bears, mugger crocodiles, and 215 bird species.',
    heroImage: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?q=80&w=1200&auto=format&fit=crop'
    ],
    location: 'Hambantota District, Southern Province',
    coordinates: { lat: 6.3725, lng: 81.5173 },
    bestTimeToVisit: 'February to July (Dry Season when animals gather at waterholes)',
    recommendedDays: 2,
    mainAttractions: [
      'Block 1 Leopard Safari Zone',
      'Sithulpawwa Ancient Cave Monastery',
      'Patanangala Ocean Beach Dunes',
      'Buthawa Lagoon Bird Sanctuary'
    ],
    thingsToDo: [
      'Sunrise 4x4 open jeep wildlife safari',
      'Track wild leopards and sloth bears with licensed trackers',
      'Watch wild elephants bathing at sunset lagoons',
      'Camp in luxury eco-tents outside park boundaries'
    ],
    travelTimeFromColombo: '4.5 Hours via Southern Expressway',
    weatherInfo: 'Dry zone savannah, 28°C - 35°C. Safari vehicles provide open air cooling.',
    travelTips: [
      'Book a private 4x4 jeep with experienced local tracking guide.',
      'Wear neutral green/khaki clothing and bring binoculars.'
    ],
    safetyAdvice: 'Remain inside safari jeep at all times during park game drives.',
    culturalAdvice: 'Respect sanctuary silence; avoid loud shouts or flash photography near animals.',
    nearbyDestinations: ['Udawalawe National Park', 'Ella', 'Tissamaharama'],
    rating: 4.8,
    reviewCount: 389
  },
  {
    id: 'kandy',
    name: 'Kandy Royal Cultural Capital',
    slug: 'kandy',
    region: 'Central Province',
    category: 'Cultural',
    tagline: 'The royal kingdom surrounding Kandy Lake, sacred for the Temple of the Tooth.',
    description: 'Kandy, Sri Lanka’s last royal capital, is nestled among forested hills surrounding Kandy Lake. It houses the revered Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), Royal Botanical Gardens in Peradeniya, and hosts the historic Esala Perahera grand pageant.',
    heroImage: 'https://images.unsplash.com/photo-1578564421650-0d72b849b291?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578564421650-0d72b849b291?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop'
    ],
    location: 'Kandy District, Central Province',
    coordinates: { lat: 7.2906, lng: 80.6337 },
    bestTimeToVisit: 'Year-round; August for Esala Perahera Festival',
    recommendedDays: 2,
    mainAttractions: [
      'Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)',
      'Peradeniya Royal Botanical Gardens',
      'Kandy Lake & Viewpoint Promenade',
      'Udawattakele Forest Sanctuary',
      'Ceylon Tea Museum in Hantana'
    ],
    thingsToDo: [
      'Attend evening Puja ceremony at Temple of the Tooth',
      'Stroll giant orchid houses at Peradeniya Gardens',
      'Watch traditional Kandyan drum & fire dance performance',
      'Board the mountain train towards Nuwara Eliya & Ella'
    ],
    travelTimeFromColombo: '3 Hours by Car / 3.5 Hours by Express Train',
    weatherInfo: 'Mild climate, 20°C - 28°C.',
    travelTips: [
      'Wear white or light modest clothing covering shoulders & knees for temple entry.',
      'Remove shoes and hats before entering temple inner courtyard.'
    ],
    safetyAdvice: 'Store shoes at official shoe counters near temple entrance.',
    culturalAdvice: 'Sacred spiritual capital; show deep reverence near Buddhist shrines.',
    nearbyDestinations: ['Pinnawala Elephant Sanctuary', 'Matale Spice Gardens', 'Nuwara Eliya'],
    rating: 4.7,
    reviewCount: 460
  },
  {
    id: 'galle-fort',
    name: 'Galle Dutch Rampart Citadel',
    slug: 'galle-fort',
    region: 'Southern Province',
    category: 'Beaches',
    tagline: 'Living 17th-century UNESCO fortress where ocean cliffs meet Dutch architecture.',
    description: 'Built by Portuguese in 1588 and fortified by the Dutch in the 17th century, Galle Fort is a living UNESCO World Heritage citadel. Cobblestone ramparts, Dutch-colonial villas, artisan jewelers, boutique cafes, and Galle Lighthouse create a timeless oceanfront atmosphere.',
    heroImage: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=1200&auto=format&fit=crop'
    ],
    location: 'Galle District, Southern Province',
    coordinates: { lat: 6.03, lng: 80.217 },
    bestTimeToVisit: 'December to April',
    recommendedDays: 2,
    mainAttractions: [
      'Galle Dutch Ramparts & Sunset Bastion Walk',
      'Historic White Galle Lighthouse',
      'Dutch Reformed Church (Groote Kerk)',
      'Pedlar Street Artisan Boutiques & Gelaterias',
      'Maritime Archaeology Museum'
    ],
    thingsToDo: [
      'Sunset promenade along fortress rampart cliffs',
      'Shop Sri Lankan sapphires, spices, and linen',
      'Watch cliff divers at Flag Rock Bastion',
      'Dine on colonial Dutch verandahs'
    ],
    travelTimeFromColombo: '2 Hours via Southern Expressway',
    weatherInfo: 'Warm ocean breeze, 27°C - 32°C.',
    travelTips: [
      'Explore on foot in late afternoon when rampart temperatures cool down.',
      'Visit Galle Literary Festival in January.'
    ],
    safetyAdvice: 'Watch steps on high rampart walls without railings.',
    culturalAdvice: 'Respect historic heritage homes; many are private family residences.',
    nearbyDestinations: ['Unawatuna Beach', 'Hikkaduwa', 'Mirissa'],
    rating: 4.8,
    reviewCount: 489
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya Little England',
    slug: 'nuwara-eliya',
    region: 'Central Province',
    category: 'Hill Country',
    tagline: 'Colonial bungalows, misty lake promenades, and emerald tea valleys.',
    description: 'Known as "Little England," Nuwara Eliya sits at 1,868m elevation beneath Mount Pedro. Known for Tudor-style bungalows, Gregory Lake boat rides, Pedro Tea Factory, and cool highland breezes.',
    heroImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop'],
    location: 'Nuwara Eliya District, Central Province',
    coordinates: { lat: 6.9497, lng: 80.7891 },
    bestTimeToVisit: 'March to May (Annual April Bloom Season)',
    recommendedDays: 2,
    mainAttractions: [
      'Lake Gregory Recreational Park & Speedboats',
      'Pedro Tea Estate & Processing Plant',
      'Hakgala Botanical Gardens',
      'Horton Plains & World’s End Cliff Precipice',
      'Historic Tudor Red Post Office'
    ],
    thingsToDo: [
      'Hike to World’s End cliff at Horton Plains',
      'Sip high tea at Grand Hotel British lawn',
      'Pick fresh strawberries at highland farms'
    ],
    travelTimeFromColombo: '4.5 Hours by Car',
    weatherInfo: 'Cool alpine weather, 10°C - 18°C. Warm jackets essential at night.',
    travelTips: ['Pack warm woolens, rain jacket, and sturdy boots.'],
    safetyAdvice: 'Start Horton Plains hike by 6:00 AM before fog obscures World’s End cliff.',
    culturalAdvice: 'Highland hospitality with British colonial culinary traditions.',
    nearbyDestinations: ['Ella', 'Horton Plains', 'Kandy'],
    rating: 4.7,
    reviewCount: 310
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee Eastern Sapphire Coast',
    slug: 'trincomalee',
    region: 'Eastern Province',
    category: 'Eastern',
    tagline: 'Pristine white beaches, Koneswaram cliff temple, and Pigeon Island snorkeling.',
    description: 'Trincomalee features deep natural harbors, turquoise waters, Nilaveli beach, and Koneswaram Kovil perched on Swami Rock cliff overlooking the Indian Ocean.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop'],
    location: 'Trincomalee District, Eastern Province',
    coordinates: { lat: 8.5874, lng: 81.2152 },
    bestTimeToVisit: 'May to September (Eastern Sunshine Season)',
    recommendedDays: 3,
    mainAttractions: [
      'Koneswaram Hindu Cliff Temple (Swami Rock)',
      'Pigeon Island National Marine Park',
      'Nilaveli & Uppuveli Powder Beaches',
      'Fort Frederick Colonial Ramparts',
      'Kanniya Hot Water Wells'
    ],
    thingsToDo: [
      'Snorkel marine life and blacktip reef sharks at Pigeon Island',
      'Watch ocean sunset from Koneswaram temple cliffs',
      'Whale watching safaris for blue and sperm whales (May-Aug)'
    ],
    travelTimeFromColombo: '5.5 Hours by Car / Express Night Train',
    weatherInfo: 'Sunny & dry, 29°C - 34°C.',
    travelTips: ['Buy Pigeon Island marine park ticket at Nilaveli boat center.'],
    safetyAdvice: 'Wear reef-safe sunscreen and rash guards when snorkeling.',
    culturalAdvice: 'Remove shoes before entering Hindu Kovil temple spaces.',
    nearbyDestinations: ['Passikudah', 'Arugam Bay', 'Anuradhapura'],
    rating: 4.8,
    reviewCount: 275
  }
];
