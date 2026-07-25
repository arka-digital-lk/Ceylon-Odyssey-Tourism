import { TransportOption } from '../types';

export const SAMPLE_TRANSPORT: TransportOption[] = [
  {
    id: 'luxury-sedan-car',
    type: 'Car',
    name: 'Private Air-Conditioned Sedan (Toyota Allion / Axio)',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    passengerCapacity: 3,
    luggageCapacity: 3,
    hasAC: true,
    hasDriver: true,
    serviceArea: 'Island-wide (Airport transfers, 1-14 day tours)',
    startingPriceLKR: 18000,
    startingPriceUSD: 58
  },
  {
    id: 'executive-passenger-van',
    type: 'Van',
    name: 'Luxury High-Roof Passenger Van (Toyota KDH)',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop',
    passengerCapacity: 7,
    luggageCapacity: 7,
    hasAC: true,
    hasDriver: true,
    serviceArea: 'Island-wide (Family & small group tours)',
    startingPriceLKR: 28000,
    startingPriceUSD: 90
  },
  {
    id: 'coaster-tour-bus',
    type: 'Bus',
    name: 'Mini Coaster Coach (Toyota Coaster)',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    passengerCapacity: 20,
    luggageCapacity: 18,
    hasAC: true,
    hasDriver: true,
    serviceArea: 'Island-wide (Group, school & corporate trips)',
    startingPriceLKR: 55000,
    startingPriceUSD: 175
  },
  {
    id: 'scenic-tuk-tuk-safari',
    type: 'Tuk-Tuk',
    name: 'Authentic Sri Lankan Tuk-Tuk (Bajaj RE)',
    image: 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?q=80&w=800&auto=format&fit=crop',
    passengerCapacity: 3,
    luggageCapacity: 1,
    hasAC: false,
    hasDriver: true,
    serviceArea: 'Local city tours (Galle, Ella, Kandy, Mirissa)',
    startingPriceLKR: 6500,
    startingPriceUSD: 20
  }
];
