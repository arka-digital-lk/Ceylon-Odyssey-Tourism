import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Compass, Mail, Lock, User, ArrowRight } from 'lucide-react';

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('alex.wright@example.com');
  const [password, setPassword] = useState('••••••••');
  const { setUserProfile } = useApp();
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      name: 'Alexander Wright',
      email,
      phone: '+44 7700 900077',
      isGuest: false
    });
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-sans">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-slate-900">Sign In to Ceylon Odyssey</h1>
          <p className="text-xs text-slate-500">Access your saved tours, custom itineraries, and vouchers.</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-4 text-xs font-medium">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold py-3 rounded-xl shadow"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          Don't have an account?{' '}
          <Link to="/auth/sign-up" className="text-teal-700 font-bold hover:underline">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserProfile } = useApp();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setUserProfile({
      name,
      email,
      phone: '+94 77 000 0000',
      isGuest: false
    });
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-sans">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-slate-900">Create Traveller Account</h1>
          <p className="text-xs text-slate-500">Join Ceylon Odyssey to plan custom Sri Lanka trips.</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4 text-xs font-medium">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              required
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Password *</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold py-3 rounded-xl shadow"
          >
            Create Account
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/auth/sign-in" className="text-teal-700 font-bold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
};
