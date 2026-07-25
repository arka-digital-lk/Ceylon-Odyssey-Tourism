import React from 'react';
import { CustomerReview } from '../../types';
import { ShieldCheck, Calendar, User, MapPin } from 'lucide-react';
import { StarRating } from '../common/StarRating';

export const ReviewCard: React.FC<{ review: CustomerReview }> = ({ review }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all space-y-3 font-sans">
      
      {/* User Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={review.profileImage}
            alt={review.customerName}
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />
          <div>
            <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
              <span>{review.customerName}</span>
              {review.isVerifiedBooking && (
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" title="Verified Customer Booking">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              From {review.customerCountry} • Traveled as {review.travellerType}
            </div>
          </div>
        </div>

        <StarRating rating={review.rating} showText={false} size="sm" />
      </div>

      {/* Tour / Place Reference */}
      <div className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-100/80 inline-block">
        {review.tourOrDestinationName}
      </div>

      {/* Review Text */}
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
        "{review.reviewText}"
      </p>

      {/* Date */}
      <div className="text-[10px] text-slate-400 font-semibold pt-2 border-t border-slate-100 flex items-center gap-1">
        <Calendar className="w-3 h-3" />
        <span>Travel Date: {review.travelDate}</span>
      </div>

    </div>
  );
};
