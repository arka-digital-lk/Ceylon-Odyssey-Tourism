const express = require('express');
const router = express.Router();
const {
  getDestinations,
  getDestinationBySlug,
  createDestination,
  getReviews,
  addReview
} = require('../controllers/controllers');

// Destinations Endpoints
router.route('/destinations')
  .get(getDestinations)
  .post(createDestination);

router.route('/destinations/:slug')
  .get(getDestinationBySlug);

// Reviews Endpoints
router.route('/destinations/:id/reviews')
  .get(getReviews)
  .post(addReview);

router.route('/reviews/:id/reviews')
  .get(getReviews)
  .post(addReview);

module.exports = router;
