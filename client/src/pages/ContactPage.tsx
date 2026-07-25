import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Tour Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      
      {/* Header */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Get in Touch</span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white">Contact Ceylon Odyssey</h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
          Have a question about a tour itinerary, resident rate, or airport transfer? Our travel desk is ready to help 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-slate-900">Direct Travel Desk</h3>
            <div className="space-y-3 text-xs text-slate-700 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>No. 42 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+94 11 234 5678 / +94 77 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>travel@ceylonodyssey.lk</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Working Hours: Mon - Sun (8:00 AM - 9:00 PM IST)</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 space-y-3">
            <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>Instant WhatsApp Support</span>
            </h4>
            <p className="text-xs text-slate-600">Need an immediate answer while travelling in Sri Lanka?</p>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-3 rounded-xl text-center shadow"
            >
              Chat on WhatsApp Now
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-4">
          <h2 className="font-serif font-bold text-2xl text-slate-900">Send Us a Message</h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs font-bold space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <p className="text-sm">Message Received!</p>
              <p>Our travel director will respond to your inquiry via email/WhatsApp within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Telephone / WhatsApp</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Subject</label>
                  <select
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
                  >
                    <option value="Tour Inquiry">Tour Booking Inquiry</option>
                    <option value="Custom Trip">Custom Trip Request</option>
                    <option value="Resident Offer">Resident Rate Discount</option>
                    <option value="Transport">Driver & Vehicle Hire</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Contact Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
