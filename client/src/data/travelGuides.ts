export interface TravelGuideTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  officialLink?: string;
  lastUpdated: string;
}

export const SAMPLE_TRAVEL_GUIDES: TravelGuideTopic[] = [
  {
    id: 'visa-entry-info',
    title: 'Visa & Entry Requirements (ETA / E-Visa)',
    category: 'Visa & Entry',
    summary: 'Essential visa information for foreign passport holders entering Sri Lanka for tourism.',
    details: [
      'All foreign visitors (except SAARC citizens with specific exemptions) require an Electronic Travel Authorization (ETA) or E-Visa prior to arrival.',
      'Apply online via the official Department of Immigration portal (srilankaevisa.lk).',
      'Tourist ETAs are typically valid for 30 days or 60 days with double entry options.',
      'Passport must have at least 6 months validity remaining from arrival date.',
      'Ensure you hold a return or onward flight ticket and proof of sufficient funds.'
    ],
    officialLink: 'https://srilankaevisa.lk',
    lastUpdated: 'June 2026'
  },
  {
    id: 'temple-etiquette-culture',
    title: 'Temple Dress Code & Sacred Site Etiquette',
    category: 'Cultural Guidance',
    summary: 'Respectful cultural practices when visiting Buddhist temples, Hindu Kovils, and historical ruins in Sri Lanka.',
    details: [
      'Dress Modestly: Shoulders and knees must be covered when entering any Buddhist temple (such as Temple of the Tooth) or ancient ruin site.',
      'Remove Footwear & Hats: Remove shoes and headwear before entering temple courtyards or shrine rooms.',
      'Do Not Turn Your Back to Buddha Statues: Posing for photos with your back directly facing a Buddha statue is considered deeply disrespectful.',
      'Religious Tattoos: Avoid exposing Buddha tattoos publicly; cover them with clothing sleeves or sarongs.',
      'Ask Before Photographing Monks: Always ask politely before taking photos of Buddhist monks or local worshippers.'
    ],
    lastUpdated: 'May 2026'
  },
  {
    id: 'currency-payments',
    title: 'Currency, Credit Cards & Cash Payments in Sri Lanka',
    category: 'Money & Payments',
    summary: 'Navigating Sri Lankan Rupees (LKR), ATMs, foreign credit cards, and cash tips.',
    details: [
      'Local Currency: Sri Lankan Rupee (LKR / Rs.). Banknotes come in denominations of Rs. 20, 50, 100, 500, 1000, 5000.',
      'ATMs & Card Acceptance: Visa and MasterCard are widely accepted in Colombo, Kandy, Galle, and major beach resorts.',
      'Carry Small Cash: Carry small LKR cash bills (Rs. 100, Rs. 500) for tuk-tuk rides, fruit stalls, and local tea shops.',
      'Local Resident Payments: Sri Lankan citizens can pay via online bank transfer, Dialog Genie, LANKAPAY QR, or local debit cards.',
      'Tipping Culture: 10% service charge is often included in hotel bills. Driver-guides appreciate tipping (Rs. 2,000 - Rs. 4,000 per day for exceptional service).'
    ],
    lastUpdated: 'June 2026'
  },
  {
    id: 'health-safety-emergencies',
    title: 'Health, Safety & Emergency Directory',
    category: 'Safety & Emergency',
    summary: 'Important emergency numbers, medical advice, and travel safety reminders.',
    details: [
      'Tourist Police Hotline: 1912 (24/7 dedicated Tourist Assistance)',
      'Emergency Ambulance (Suwa Seriya): 1990 (Free island-wide emergency medical service)',
      'Police Emergency: 119',
      'Sun Protection: Drink plenty of coconut water and bottled water. Wear SPF 50+ sunscreen.',
      'Travel Insurance: Comprehensive travel medical insurance is strongly recommended for all international visitors.'
    ],
    lastUpdated: 'June 2026'
  }
];
