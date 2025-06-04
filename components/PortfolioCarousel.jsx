import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

// Example before/after image pairs (replace with your real images)
const portfolioItems = [
  {
    before: '/portfolio/kitchen-before.jpg',
    after: '/portfolio/kitchen-after.jpg',
    description: 'Kitchen deep clean',
    beforeAlt: 'Kitchen before cleaning',
    afterAlt: 'Kitchen after cleaning',
  },
  {
    before: '/portfolio/floors-before.jpg',
    after: '/portfolio/floors-after.jpg',
    description: 'Floors transformation',
    beforeAlt: 'Floors before cleaning',
    afterAlt: 'Floors after cleaning',
  },
  // Add more pairs as needed
];

const imageSizes = {
  width: 480,
  height: 320,
};

const PortfolioCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = portfolioItems.length;

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

  const { before, after, description, beforeAlt, afterAlt } = portfolioItems[current];

  return (
    <section
      className="w-full max-w-2xl mx-auto py-8 px-2 flex flex-col items-center"
      aria-label="Portfolio Before and After Gallery"
      aria-live="polite"
    >
      <div className="relative w-full flex items-center justify-center gap-8">
        <button
          onClick={prev}
          aria-label="Previous before and after set"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-borders focus:outline-none focus:ring-2 focus:ring-primary-accent-cta z-10"
        >
          <ChevronLeftIcon className="w-6 h-6 text-primary-accent-cta" />
        </button>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <figure className="flex flex-col items-center w-full sm:w-1/2">
            <div className="relative w-full h-56 sm:h-64 mb-2 border border-borders rounded-lg overflow-hidden shadow-md">
              <Image
                src={before}
                alt={beforeAlt}
                width={imageSizes.width}
                height={imageSizes.height}
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={current === 0}
              />
            </div>
            <figcaption className="text-xs text-text-light">Before</figcaption>
          </figure>
          <figure className="flex flex-col items-center w-full sm:w-1/2">
            <div className="relative w-full h-56 sm:h-64 mb-2 border border-borders rounded-lg overflow-hidden shadow-md">
              <Image
                src={after}
                alt={afterAlt}
                width={imageSizes.width}
                height={imageSizes.height}
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={current === 0}
              />
            </div>
            <figcaption className="text-xs text-text-light">After</figcaption>
          </figure>
        </div>
        <button
          onClick={next}
          aria-label="Next before and after set"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-borders focus:outline-none focus:ring-2 focus:ring-primary-accent-cta z-10"
        >
          <ChevronRightIcon className="w-6 h-6 text-primary-accent-cta" />
        </button>
      </div>
      <div className="flex justify-center mt-6 gap-2" role="tablist" aria-label="Portfolio navigation dots">
        {portfolioItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to portfolio item ${idx + 1}`}
            className={`w-3 h-3 rounded-full border border-borders focus:outline-none focus:ring-2 focus:ring-primary-accent-cta transition-colors duration-200 ${
              current === idx ? 'bg-primary-accent-cta' : 'bg-borders'
            }`}
          />
        ))}
      </div>
      <p className="text-text-dark mt-4 text-center font-medium">{description}</p>
    </section>
  );
};

export default PortfolioCarousel; 