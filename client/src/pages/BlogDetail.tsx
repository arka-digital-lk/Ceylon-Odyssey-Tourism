import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SAMPLE_BLOG_POSTS } from '../data/blogPosts';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === slug || p.id === slug) || SAMPLE_BLOG_POSTS[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 font-sans">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-teal-700">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog Articles</span>
      </Link>

      <div className="space-y-4">
        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
        <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-slate-900">{post.title}</h1>
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-slate-200 pb-4">
          <div>By {post.author} • Published {post.publishedDate} • {post.readingTimeMinutes} min read</div>
          <button className="flex items-center gap-1 text-slate-700 hover:text-teal-700">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-md">
        <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-4 text-slate-800 text-sm leading-relaxed whitespace-pre-line font-normal">
        {post.contentMarkdown}
      </div>
    </div>
  );
};
