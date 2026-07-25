const mongoose = require('mongoose');
const { Destination, Review } = require('../models/models');
const { memoryStore } = require('../config/db');

// --- DESTINATION CONTROLLERS ---

exports.getDestinations = async (req, res) => {
  try {
    const { q, category, rating, region, sort } = req.query;

    if (mongoose.connection.readyState === 1) {
      let query = {};
      
      if (q) {
        query.$or = [
          { name: { $regex: q, $options: 'i' } },
          { location: { $regex: q, $options: 'i' } },
          { description: { $regex: q, $options: 'i' } }
        ];
      }

      if (category && category !== 'All') {
        query.category = category;
      }

      if (region && region !== 'All') {
        query.region = region;
      }

      if (rating) {
        query.rating = { $gte: parseFloat(rating) };
      }

      let sortOptions = {};
      if (sort === 'rating') sortOptions = { rating: -1 };
      else if (sort === 'reviews') sortOptions = { totalReviews: -1 };
      else if (sort === 'name') sortOptions = { name: 1 };
      else sortOptions = { rating: -1 };

      const destinations = await Destination.find(query).sort(sortOptions);
      return res.json({ success: true, count: destinations.length, data: destinations });
    }

    // Fallback: Memory Store
    let results = [...memoryStore.destinations];

    if (q) {
      const queryStr = q.toLowerCase();
      results = results.filter(d => 
        d.name.toLowerCase().includes(queryStr) || 
        d.location.toLowerCase().includes(queryStr) ||
        d.description.toLowerCase().includes(queryStr)
      );
    }

    if (category && category !== 'All') {
      results = results.filter(d => d.category.toLowerCase() === category.toLowerCase());
    }

    if (region && region !== 'All') {
      results = results.filter(d => d.region.toLowerCase() === region.toLowerCase());
    }

    if (rating) {
      results = results.filter(d => d.rating >= parseFloat(rating));
    }

    if (sort === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'reviews') {
      results.sort((a, b) => b.totalReviews - a.totalReviews);
    } else if (sort === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      results.sort((a, b) => b.rating - a.rating);
    }

    return res.json({ success: true, count: results.length, data: results });
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return res.status(500).json({ success: false, message: 'Server Error fetching destinations', error: error.message });
  }
};

exports.getDestinationBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    if (mongoose.connection.readyState === 1) {
      const destination = await Destination.findOne({ slug });
      if (!destination) {
        return res.status(404).json({ success: false, message: 'Destination not found' });
      }
      return res.json({ success: true, data: destination });
    }

    const destination = memoryStore.destinations.find(d => d.slug === slug || d.id === slug);
    if (!destination) {
      return res.status(404).json({ success: false, message: 'Destination not found' });
    }

    return res.json({ success: true, data: destination });
  } catch (error) {
    console.error('Error fetching destination by slug:', error);
    return res.status(500).json({ success: false, message: 'Server Error fetching destination', error: error.message });
  }
};

exports.createDestination = async (req, res) => {
  try {
    const destinationData = req.body;
    if (!destinationData.slug) {
      destinationData.slug = destinationData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    if (mongoose.connection.readyState === 1) {
      const newDestination = await Destination.create(destinationData);
      return res.status(201).json({ success: true, data: newDestination });
    }

    const newDest = {
      id: destinationData.slug,
      ...destinationData,
      rating: 4.5,
      totalReviews: 0,
      createdAt: new Date()
    };
    memoryStore.destinations.unshift(newDest);
    return res.status(201).json({ success: true, data: newDest });
  } catch (error) {
    console.error('Error creating destination:', error);
    return res.status(500).json({ success: false, message: 'Server Error creating destination', error: error.message });
  }
};

// --- REVIEW CONTROLLERS ---

exports.getReviews = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.connection.readyState === 1) {
      const reviews = await Review.find({ destinationId: id }).sort({ createdAt: -1 });
      return res.json({ success: true, count: reviews.length, data: reviews });
    }

    const reviews = memoryStore.reviews.filter(r => r.destinationId === id).sort((a, b) => new Date(b.date) - new Date(a.date));
    return res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ success: false, message: 'Server Error fetching reviews', error: error.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, rating, title, comment, travelerType, ratingsBreakdown } = req.body;

    if (!userName || !rating || !title || !comment) {
      return res.status(400).json({ success: false, message: 'Please provide all required review fields' });
    }

    const numericRating = parseFloat(rating);

    if (mongoose.connection.readyState === 1) {
      const newReview = await Review.create({
        destinationId: id,
        userName,
        userAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userName)}`,
        rating: numericRating,
        title,
        comment,
        travelerType: travelerType || 'Couple',
        ratingsBreakdown: ratingsBreakdown || { location: 5, value: 5, service: 5, cleanliness: 5 }
      });

      const allReviews = await Review.find({ destinationId: id });
      const avgRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);
      
      await Destination.findOneAndUpdate(
        { $or: [{ _id: id }, { slug: id }] },
        { rating: parseFloat(avgRating), totalReviews: allReviews.length }
      );

      return res.status(201).json({ success: true, data: newReview });
    }

    // Memory Store execution
    const newReview = {
      id: 'rev_' + Date.now(),
      destinationId: id,
      userName,
      userAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userName)}`,
      rating: numericRating,
      date: new Date().toISOString().split('T')[0],
      title,
      comment,
      travelerType: travelerType || 'Couple',
      ratingsBreakdown: ratingsBreakdown || { location: 5, value: 5, service: 5, cleanliness: 5 },
      createdAt: new Date()
    };

    memoryStore.reviews.unshift(newReview);

    const dest = memoryStore.destinations.find(d => d.id === id || d.slug === id);
    if (dest) {
      const destReviews = memoryStore.reviews.filter(r => r.destinationId === id);
      const totalRating = destReviews.reduce((acc, curr) => acc + curr.rating, 0);
      dest.totalReviews = destReviews.length;
      dest.rating = parseFloat((totalRating / destReviews.length).toFixed(1));
    }

    return res.status(201).json({ success: true, data: newReview });
  } catch (error) {
    console.error('Error adding review:', error);
    return res.status(500).json({ success: false, message: 'Server Error submitting review', error: error.message });
  }
};
