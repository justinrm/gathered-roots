import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const testimonials = [
  {
    quote:
      'Gathered Roots Cleaning has transformed our home! Their attention to detail is impeccable, and the team is so friendly and professional. Highly recommend!',
    author: 'Sarah L.',
    authorTitle: 'Homeowner, Lewiston, Idaho',
    rating: 5,
  },
  {
    quote:
      "The best cleaning service we've ever used. Reliable, thorough, and they use eco-friendly products which is a huge plus for us.",
    author: 'Mark P.',
    authorTitle: 'Small Business Owner',
    rating: 5,
  },
  {
    quote:
      'Switching to Gathered Roots Cleaning was a great decision. Our office has never looked better, and their team is always a pleasure to work with.',
    author: 'Jessica B.',
    authorTitle: 'Office Manager',
    rating: 4,
  },
  {
    quote:
      'Justin and Chelsea go above and beyond every time. Their military precision combined with genuine care makes all the difference. Our home has never felt so welcoming.',
    author: 'Michael R.',
    authorTitle: 'Local Resident',
    rating: 5,
  },
  {
    quote:
      'As busy parents, having Gathered Roots take care of our cleaning gives us precious time back with our kids. They treat our home like their own.',
    author: 'Amanda K.',
    authorTitle: 'Working Parent',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  // Keyboard navigation for left/right arrows
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section
      className="w-full max-w-2xl mx-auto py-12 px-4 flex flex-col items-center"
      aria-label="Featured Testimonials"
      aria-live="polite"
    >
      <div className="relative w-full">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-borders focus:outline-none focus:ring-2 focus:ring-primary-accent-cta z-10"
        >
          <ChevronLeftIcon className="w-6 h-6 text-primary-accent-cta" />
        </button>
        <TestimonialCard {...testimonials[current]} className="mx-12" />
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-borders focus:outline-none focus:ring-2 focus:ring-primary-accent-cta z-10"
        >
          <ChevronRightIcon className="w-6 h-6 text-primary-accent-cta" />
        </button>
      </div>
      <div
        className="flex justify-center mt-6 gap-2"
        role="tablist"
        aria-label="Testimonial navigation dots"
      >
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-borders focus:outline-none focus:ring-2 focus:ring-primary-accent-cta transition-colors duration-200 ${
              current === idx ? 'bg-primary-accent-cta' : 'bg-borders'
            }`}
          />
        ))}
      </div>
      
      {/* Google Reviews Call-to-Action */}
      <div className="mt-8 text-center">
        <p className="text-text-light mb-4">
          Love our service? Help others discover the care we bring to every home.
        </p>
        <a
          href="https://www.google.com/search?q=gathered+roots+cleaning+lewiston+idaho"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="secondary" className="text-base px-6 py-3 w-full sm:w-auto">
            Leave us a Google Review
          </Button>
        </a>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

// Usage: <TestimonialCarousel />
