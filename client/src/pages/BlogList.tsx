import React from 'react';
import { Link } from 'react-router-dom';
import { SAMPLE_BLOG_POSTS } from '../data/blogPosts';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Ceylon Travel Digest</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Stories, Guides & Seasonal Tips</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Expert insights written by local Sri Lanka travel directors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SAMPLE_BLOG_POSTS.map(post => (
          <div key={post.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full">{post.category}</span>
                <h3 className="font-serif font-bold text-2xl text-slate-900 group-hover:text-teal-800 transition-colors">{post.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{post.summary}</p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-slate-400 font-semibold border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="text-teal-700 font-bold hover:underline flex items-center gap-1">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
