const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  tagline: { type: String },
  description: { type: String, required: true },
  location: { type: String, required: true },
  region: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: [
      'Cultural & Heritage Sites',
      'Hill Country & Tea Estates',
      'Beaches',
      'Wildlife & National Parks',
      'Adventure & Hiking'
    ]
  },
  rating: { type: Number, default: 4.5 },
  totalReviews: { type: Number, default: 0 },
  heroImage: { type: String, required: true },
  images: [{ type: String }],
  highlights: [{ type: String }],
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  },
  priceLevel: { type: String, default: '$$' },
  createdAt: { type: Date, default: Date.now }
});

const reviewSchema = new mongoose.Schema({
  destinationId: { type: String, required: true },
  userName: { type: String, required: true },
  userAvatar: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  travelerType: { type: String, enum: ['Solo', 'Couple', 'Family', 'Friends'], default: 'Couple' },
  ratingsBreakdown: {
    location: { type: Number, default: 5 },
    value: { type: Number, default: 5 },
    service: { type: Number, default: 5 },
    cleanliness: { type: Number, default: 5 }
  },
  createdAt: { type: Date, default: Date.now }
});

const Destination = mongoose.models.Destination || mongoose.model('Destination', destinationSchema);
const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);

module.exports = { Destination, Review };
