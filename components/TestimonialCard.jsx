import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'; // For star ratings

const TestimonialCard = ({ quote, author, authorTitle, rating, className = '' }) => {
  const cardClass =
    `bg-card-background shadow-card hover:shadow-card-hover rounded-lg p-6 border border-card-border flex flex-col transition-all duration-300 hover:-translate-y-0.5 ${className}`.trim();

  return (
    <article className={cardClass} role="article" aria-labelledby={`testimonial-${author?.replace(/\s+/g, '-').toLowerCase()}`}>
      {rating && (
        <div className="flex justify-center mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}
      <blockquote className="italic text-card-text-secondary mb-6 text-lg leading-relaxed flex-grow text-center">
        <p>&quot;{quote}&quot;</p>
      </blockquote>
      <footer className="mt-auto text-center">
        <cite className="not-italic">
          <p id={`testimonial-${author?.replace(/\s+/g, '-').toLowerCase()}`} className="font-semibold text-card-text-primary text-lg">{author}</p>
          {authorTitle && <p className="text-sm text-card-text-secondary mt-1">{authorTitle}</p>}
        </cite>
      </footer>
    </article>
  );
};

export default TestimonialCard;
