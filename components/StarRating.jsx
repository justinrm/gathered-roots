import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const StarRating = ({ rating, className = '' }) => {
  const maxStars = 5;
  const filledStars = Math.max(0, Math.min(maxStars, Math.round(rating || 0)));

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${index < filledStars ? 'text-yellow-400' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default StarRating;
