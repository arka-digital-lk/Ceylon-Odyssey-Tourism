import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SAMPLE_DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/destinations/DestinationCard';
import { Search, Filter, MapPin, Grid, List } from 'lucide-react';

export const DestinationsList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryQ = searchParams.get('q') || '';
  const queryCategory = searchParams.get('category') || '';

  const [searchTerm, setSearchTerm] = useState(queryQ);
  const [selectedCategory, setSelectedCategory] = useState(queryCategory || 'All');

  const categories = [
    'All', 'Ancient Cities', 'Hill Country', 'Beaches', 'Wildlife', 'Eastern'
  ];

  const filtered = SAMPLE_DESTINATIONS.filter(dest => {
    const matchesQ = !searchTerm || dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesQ && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4 relative overflow-hidden">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Explore Sri Lanka</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">All Sri Lanka Destinations & Regions</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          From ancient 5th-century rock fortresses to misty tea ridges and turquoise whale bays.
        </p>

        {/* Filter Bar */}
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by city, beach, or landmark..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & Grid */}
      <div className="space-y-6">
        <div className="text-xs text-slate-500 font-bold">
          Showing {filtered.length} destinations matching criteria
        </div>

        {filtered.length === 0 ? (
          <div className="p-12 bg-white rounded-3xl text-center text-xs text-slate-500 border border-slate-200">
            No destinations found matching your criteria. Try adjusting filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
