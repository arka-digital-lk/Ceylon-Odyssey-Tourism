# 🌴 Ceylon Odyssey — Authentic Sri Lanka Tourism & Discovery Platform

**Ceylon Odyssey** is a premier travel discovery and tour booking web application tailored for both international tourists and local Sri Lankan residents. It provides curated tours, destination guides, transport booking, local guide connections, custom trip planning, and dynamic multi-currency pricing (USD / LKR).

---

## ✨ Features

- **🌐 Dual Visitor Personalization**: Seamlessly toggle between **International Visitor** (USD $) and **Sri Lankan Resident** (LKR Rs) with localized pricing & local resident discounts.
- **🗺️ Destination & Tour Discovery**: Explore iconic destinations (Sigiriya, Ella, Mirissa, Kandy, Nuwara Eliya, etc.) with detailed itineraries, highlights, and instant booking.
- **🏄 Things to Do & Activities**: Browse water sports, wildlife safaris, heritage walks, tea plantation tours, and adventure activities across Sri Lanka.
- **🏨 Accommodations & Stays**: Curated boutique hotels, eco-lodges, beachfront resorts, and authentic homestays.
- **🚗 Transport & Private Drivers**: Book luxury AC cars, tuk-tuk rentals, scenic train tickets, and airport transfers.
- **🗣️ Certified Local Guides**: Find and connect with licensed Sri Lankan tour guides proficient in multiple languages.
- **📝 Custom Trip Planner & Reviews**: Interactive itinerary builder and verified traveler reviews & ratings.
- **⚡ Dual Engine Backend**: Built with Express.js supporting MongoDB database connection with automatic in-memory fallback for zero setup dev environment.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React (Vite) + TypeScript
- **Styling**: Modern CSS / Tailwind CSS with custom glassmorphism design system & micro-animations
- **Icons**: Lucide React

### **Backend**
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB (Mongoose) with automatic built-in memory store fallback
- **Cross-Origin**: CORS enabled for client-server decoupling

---

## 📁 Project Structure

```
Tourism/
├── client/                 # React Vite Frontend App
│   ├── public/             # Static Assets
│   ├── src/
│   │   ├── api/            # API Service Layer
│   │   ├── components/     # Reusable UI Components
│   │   ├── context/        # React Context (Currency, User State)
│   │   ├── data/           # Mock & Fallback Data
│   │   ├── pages/          # Full Application Pages (Home, Tours, Destinations, etc.)
│   │   └── types/          # TypeScript Type Definitions
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express Node.js Backend API
│   ├── config/             # DB & Server Config
│   ├── controllers/        # Route Handlers
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Endpoints
│   ├── server.js           # Server Entry Point
│   └── package.json
├── package.json            # Root Scripts (Concurrently runner)
└── README.md               # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### 1. Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/arka-digital-lk/Ceylon-Odyssey-Tourism.git
cd Ceylon-Odyssey-Tourism

# Install root, client, and server dependencies
npm run install:all
```

### 2. Environment Setup (Optional)

Create a `.env` file in the `server` directory:

```env
PORT=5000
CLIENT_URL=http://localhost:8080
MONGODB_URI=mongodb://localhost:27017/srilanka_tourism
```

*(Note: If MongoDB is not running locally, the server will automatically fall back to the built-in memory store).*

### 3. Run Development Server

Start both frontend and backend concurrently with a single command:

```bash
npm run dev
```

- **Frontend Application**: [http://localhost:8080](http://localhost:8080)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## 📜 Available Scripts

In the root directory, you can run:

- `npm run dev`: Runs both client (`http://localhost:8080`) and server (`http://localhost:5000`) concurrently.
- `npm run dev:client`: Runs only the frontend Vite development server.
- `npm run dev:server`: Runs only the backend Node/Express server.
- `npm run install:all`: Installs dependencies for both client and server projects.
- `npm run build`: Builds the client application for production distribution (`client/dist`).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
