import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SAMPLE_TOURS } from '../data/tours';
import { TourCard } from '../components/tours/TourCard';
import { TourFilterPanel } from '../components/tours/TourFilterPanel';
import { Search, SlidersHorizontal, Layers, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ToursList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryQ = searchParams.get('q') || '';
  const queryCat = searchParams.get('category') || '';

  const { compareList, clearCompare } = useApp();

  const [searchTerm, setSearchTerm] = useState(queryQ);
  const [category, setCategory] = useState(queryCat);
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [sort, setSort] = useState('recommended');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredTours = SAMPLE_TOURS.filter(tour => {
    const matchesQ = !searchTerm || tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || tour.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = !category || tour.category === category;
    const matchesDur = !duration || (duration === 'short' ? tour.durationDays <= 3 : duration === 'medium' ? tour.durationDays >= 4 && tour.durationDays <= 7 : tour.durationDays >= 8);
    const matchesDiff = !difficulty || tour.difficulty === difficulty;
    return matchesQ && matchesCat && matchesDur && matchesDiff;
  }).sort((a, b) => {
    if (sort === 'rating') return b.rating - a.rating;
    if (sort === 'price-low') return a.priceLKR - b.priceLKR;
    if (sort === 'price-high') return b.priceLKR - a.priceLKR;
    if (sort === 'duration') return a.durationDays - b.durationDays;
    return 0;
  });

  const handleReset = () => {
    setSearchTerm('');
    setCategory('');
    setDuration('');
    setDifficulty('');
    setSort('recommended');
    setSearchParams({});
  };

  const comparedTours = SAMPLE_TOURS.filter(t => compareList.includes(t.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      
      {/* Header */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Curated Sri Lanka Tours</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Find Your Perfect Tour Package</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Compare private itineraries, weekend getaways, wildlife safaris, and high-altitude train journeys across Sri Lanka.
        </p>

        {/* Quick Search Input */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by tour title, destination, or attraction..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {/* Compare Floating Drawer if Items Selected */}
      {comparedTours.length > 0 && (
        <div className="bg-teal-900 text-white rounded-2xl p-4 shadow-xl border border-teal-700 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-amber-300" />
            <div className="text-xs">
              <strong className="block text-sm">Comparing ({comparedTours.length}) Tours</strong>
              <span>{comparedTours.map(t => t.title).join(' vs ')}</span>
            </div>
          </div>
          <button
            onClick={clearCompare}
            className="text-xs font-bold bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-600"
          >
            Clear Compare
          </button>
        </div>
      )}

      {/* Main Layout: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200">
          <span className="text-xs font-bold text-slate-800">{filteredTours.length} Tours Found</span>
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-1.5 bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-xl"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Sidebar */}
        <div className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
          <TourFilterPanel
            selectedCategory={category}
            onSelectCategory={setCategory}
            selectedDuration={duration}
            onSelectDuration={setDuration}
            selectedDifficulty={difficulty}
            onSelectDifficulty={setDifficulty}
            selectedSort={sort}
            onSelectSort={setSort}
            onResetFilters={handleReset}
            totalResults={filteredTours.length}
          />
        </div>

        {/* Tour Cards Grid */}
        <div className="lg:col-span-3 space-y-6">
          {filteredTours.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-xs text-slate-500 space-y-3">
              <p>No tour packages match your current filter selections.</p>
              <button onClick={handleReset} className="bg-teal-700 text-white font-bold px-5 py-2.5 rounded-xl">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
