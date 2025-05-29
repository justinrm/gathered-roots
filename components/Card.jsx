import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
  const baseStyles = 'bg-card-background border border-card-border rounded-lg p-6 transition-all duration-300';
  const hoverStyles = hoverEffect ? 'shadow-card hover:shadow-card-hover hover:-translate-y-0.5' : 'shadow-card';
  const focusStyles = 'focus-within:shadow-card-focus focus-within:border-primary-accent-teal';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${focusStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

// Example Usage:
/*
const MyPage = () => (
  <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card className="text-center">
      <h3 className="text-xl font-semibold mb-2 text-card-text-primary">Testimonial</h3>
      <p className="text-card-text-secondary italic">"This is a great service! Highly recommended."</p>
      <p className="text-card-text-primary font-medium mt-4">- Jane Doe</p>
    </Card>
    <Card>
      <h3 className="text-xl font-semibold mb-2 text-card-text-primary">Another Section</h3>
      <p className="text-card-text-secondary">This card can hold any content.</p>
      <button className="mt-4 bg-primary-accent-teal text-white py-2 px-4 rounded hover:bg-secondary-accent-hover transition-colors">
        Learn More
      </button>
    </Card>
  </div>
);
*/

// Note: The new card design uses:
// - Light background (card-background) for a clean, professional look
// - Subtle borders and shadows for depth without being overwhelming
// - Smooth hover animations that lift the card slightly
// - Proper text contrast with dark text on light background
// - Focus states for accessibility
