const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB (or setup memory fallback)
connectDB();

// API Routes
app.use('/api', require('./routes/routes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Sri Lanka Tourism API (TripAdvisor style)',
    timestamp: new Date()
  });
});

// Start Express server
app.listen(PORT, () => {
  console.log(`[Express] Server running on http://localhost:${PORT}`);
});
