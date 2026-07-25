import { CurrencyCode, CurrencyRate } from '../types';

export const CURRENCY_RATES: Record<CurrencyCode, CurrencyRate> = {
  LKR: { code: 'LKR', symbol: 'Rs.', rateToLKR: 1 },
  USD: { code: 'USD', symbol: '$', rateToLKR: 310 },
  EUR: { code: 'EUR', symbol: '€', rateToLKR: 335 },
  GBP: { code: 'GBP', symbol: '£', rateToLKR: 395 }
};

export function formatPrice(
  priceInLKR: number,
  currency: CurrencyCode = 'LKR',
  priceInUSD?: number
): string {
  if (currency === 'LKR') {
    return `Rs. ${priceInLKR.toLocaleString()}`;
  }

  // Use priceInUSD directly if available, otherwise calculate from rate
  const usdVal = priceInUSD || priceInLKR / CURRENCY_RATES.USD.rateToLKR;
  
  if (currency === 'USD') {
    return `$${Math.round(usdVal).toLocaleString()}`;
  }

  if (currency === 'EUR') {
    const eurVal = usdVal * (CURRENCY_RATES.USD.rateToLKR / CURRENCY_RATES.EUR.rateToLKR);
    return `€${Math.round(eurVal).toLocaleString()}`;
  }

  if (currency === 'GBP') {
    const gbpVal = usdVal * (CURRENCY_RATES.USD.rateToLKR / CURRENCY_RATES.GBP.rateToLKR);
    return `£${Math.round(gbpVal).toLocaleString()}`;
  }

  return `Rs. ${priceInLKR.toLocaleString()}`;
}
