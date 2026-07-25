import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SAMPLE_TOURS } from '../data/tours';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { TourCard } from '../components/tours/TourCard';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { Search } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const matchedTours = SAMPLE_TOURS.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.destination.toLowerCase().includes(query.toLowerCase()) ||
    t.shortDescription.toLowerCase().includes(query.toLowerCase())
  );

  const matchedDestinations = SAMPLE_DESTINATIONS.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase()) ||
    d.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-xl space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Search Results</span>
        <h1 className="font-serif font-bold text-3xl text-white">Results for "{query}"</h1>
        <p className="text-slate-300 text-xs">
          Found {matchedTours.length} matching tour packages and {matchedDestinations.length} destinations.
        </p>
      </div>

      {matchedTours.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Matching Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchedTours.map(t => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        </div>
      )}

      {matchedDestinations.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Matching Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchedDestinations.map(d => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      )}

      {matchedTours.length === 0 && matchedDestinations.length === 0 && (
        <div className="bg-white p-12 rounded-3xl text-center border border-slate-200 text-xs text-slate-500 space-y-3">
          <p>No results found for "{query}". Try searching for "Sigiriya", "Ella", "Yala", or "Whales".</p>
          <Link to="/tours" className="inline-block bg-teal-700 text-white font-bold px-4 py-2 rounded-xl">
            Browse All Tours
          </Link>
        </div>
      )}
    </div>
  );
};
