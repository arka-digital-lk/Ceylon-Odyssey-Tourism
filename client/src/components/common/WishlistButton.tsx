import React from 'react';
import { Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface WishlistButtonProps {
  itemId: string;
  className?: string;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({ itemId, className = '' }) => {
  const { isWishlisted, toggleWishlist } = useApp();
  const saved = isWishlisted(itemId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(itemId);
      }}
      className={`p-2 rounded-full backdrop-blur-md transition-all transform hover:scale-110 shadow-sm ${
        saved
          ? 'bg-rose-500 text-white'
          : 'bg-white/80 text-slate-700 hover:text-rose-500 hover:bg-white'
      } ${className}`}
      title={saved ? 'Remove from Wishlist' : 'Save to Wishlist'}
    >
      <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
    </button>
  );
};
