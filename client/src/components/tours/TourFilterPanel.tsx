import React from 'react';
import { Filter, RefreshCw, Star, Check } from 'lucide-react';

interface TourFilterPanelProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedDuration: string;
  onSelectDuration: (dur: string) => void;
  selectedDifficulty: string;
  onSelectDifficulty: (diff: string) => void;
  selectedSort: string;
  onSelectSort: (sort: string) => void;
  onResetFilters: () => void;
  totalResults: number;
}

export const TourFilterPanel: React.FC<TourFilterPanelProps> = ({
  selectedCategory, onSelectCategory,
  selectedDuration, onSelectDuration,
  selectedDifficulty, onSelectDifficulty,
  selectedSort, onSelectSort,
  onResetFilters, totalResults
}) => {
  const categories = [
    'All',
    'Cultural tours',
    'Wildlife tours',
    'Beach holidays',
    'Weekend tours',
    'Day tours',
    'Family tours',
    'Adventure tours'
  ];

  const durations = [
    { label: 'All Durations', value: '' },
    { label: '1 - 3 Days (Weekend)', value: 'short' },
    { label: '4 - 7 Days (Week)', value: 'medium' },
    { label: '8+ Days (Grand)', value: 'long' }
  ];

  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  return (
    <aside className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-sm space-y-6 font-sans">
      
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-teal-700" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">Filter Ceylon Tours</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs text-slate-500 hover:text-teal-700 font-semibold flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Sort By Dropdown */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Sort Results
        </label>
        <select
          value={selectedSort}
          onChange={(e) => onSelectSort(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-teal-600 cursor-pointer"
        >
          <option value="recommended">Recommended First</option>
          <option value="rating">Highest Rated</option>
          <option value="price-low">Lowest Price</option>
          <option value="price-high">Highest Price</option>
          <option value="duration">Shortest Duration</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Tour Category
        </label>
        <div className="space-y-1.5">
          {categories.map((cat) => {
            const isSelected = (selectedCategory === cat) || (cat === 'All' && !selectedCategory);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat === 'All' ? '' : cat)}
                className={`w-full flex items-center justify-between text-xs px-3 py-2 rounded-xl transition-all font-medium text-left ${
                  isSelected 
                    ? 'bg-teal-50 text-teal-900 font-extrabold border border-teal-200' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{cat}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Duration
        </label>
        <div className="space-y-1.5">
          {durations.map((dur) => {
            const isSelected = selectedDuration === dur.value;
            return (
              <button
                key={dur.value}
                type="button"
                onClick={() => onSelectDuration(dur.value)}
                className={`w-full flex items-center justify-between text-xs px-3 py-2 rounded-xl transition-all font-medium text-left ${
                  isSelected 
                    ? 'bg-teal-50 text-teal-900 font-extrabold border border-teal-200' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{dur.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-teal-700 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Difficulty Level
        </label>
        <div className="flex flex-wrap gap-1.5">
          {difficulties.map((diff) => {
            const isSelected = (selectedDifficulty === diff) || (diff === 'All' && !selectedDifficulty);
            return (
              <button
                key={diff}
                type="button"
                onClick={() => onSelectDifficulty(diff === 'All' ? '' : diff)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {diff}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-2 text-center text-xs text-slate-400 font-medium border-t border-slate-100">
        Found {totalResults} matching tour experiences
      </div>

    </aside>
  );
};
