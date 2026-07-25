import React from 'react';
import { useApp } from '../../context/AppContext';
import { formatPrice } from '../../lib/currency';

interface CurrencyBadgeProps {
  priceLKR: number;
  priceUSD?: number;
  residentDiscountPercentage?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CurrencyBadge: React.FC<CurrencyBadgeProps> = ({
  priceLKR,
  priceUSD,
  residentDiscountPercentage = 0,
  className = '',
  size = 'md'
}) => {
  const { currency, audienceMode } = useApp();

  let finalLKR = priceLKR;
  const isResidentOffer = audienceMode === 'resident' && residentDiscountPercentage > 0;

  if (isResidentOffer) {
    finalLKR = priceLKR * (1 - residentDiscountPercentage / 100);
  }

  const formatted = formatPrice(finalLKR, currency, priceUSD);

  const sizeClasses = {
    sm: 'text-xs font-semibold',
    md: 'text-base font-bold',
    lg: 'text-xl sm:text-2xl font-extrabold'
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-1.5">
        <span className={`${sizeClasses[size]} text-emerald-800 tracking-tight`}>
          {formatted}
        </span>
        {currency !== 'LKR' && (
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
            (approx)
          </span>
        )}
      </div>

      {isResidentOffer && (
        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full w-max mt-0.5">
          Local Resident Offer ({residentDiscountPercentage}% Off)
        </span>
      )}
    </div>
  );
};
