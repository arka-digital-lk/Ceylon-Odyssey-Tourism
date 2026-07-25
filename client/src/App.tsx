import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home.tsx';
import { DestinationsList } from './pages/DestinationsList.tsx';
import { DestinationDetail } from './pages/DestinationDetail.tsx';
import { ToursList } from './pages/ToursList.tsx';
import { TourDetail } from './pages/TourDetail.tsx';
import { ActivitiesList } from './pages/ActivitiesList.tsx';
import { AccommodationsList } from './pages/AccommodationsList.tsx';
import { TransportPage } from './pages/TransportPage.tsx';
import { GuidesPage } from './pages/GuidesPage.tsx';
import { TripPlannerPage } from './pages/TripPlannerPage.tsx';
import { ReviewsPage } from './pages/ReviewsPage.tsx';
import { TravelGuidePage } from './pages/TravelGuidePage.tsx';
import { BlogList } from './pages/BlogList.tsx';
import { BlogDetail } from './pages/BlogDetail.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { LegalPage } from './pages/LegalPage.tsx';
import { SearchPage } from './pages/SearchPage.tsx';
import { BookingCheckoutPage } from './pages/BookingCheckoutPage.tsx';
import { AccountPage } from './pages/AccountPage.tsx';
import { SignInPage, SignUpPage } from './pages/AuthPages.tsx';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public Discovery Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<DestinationsList />} />
              <Route path="/destinations/:slug" element={<DestinationDetail />} />
              <Route path="/tours" element={<ToursList />} />
              <Route path="/tours/:slug" element={<TourDetail />} />
              <Route path="/activities" element={<ActivitiesList />} />
              <Route path="/accommodation" element={<AccommodationsList />} />
              <Route path="/transport" element={<TransportPage />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/trip-planner" element={<TripPlannerPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/travel-guide" element={<TravelGuidePage />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/search" element={<SearchPage />} />

              {/* Booking Checkout Flow */}
              <Route path="/booking" element={<BookingCheckoutPage />} />

              {/* Traveller Account Sub-routes */}
              <Route path="/account/*" element={<AccountPage />} />

              {/* Auth Routes */}
              <Route path="/auth/sign-in" element={<SignInPage />} />
              <Route path="/auth/sign-up" element={<SignUpPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
