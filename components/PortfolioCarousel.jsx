import React from 'react';
import Image from 'next/image';

// Portfolio images showcasing our cleaning work
const portfolioItems = [
  {
    src: '/portfolio/portfolio-1.jpg',
    alt: 'Professional cleaning results - sparkling clean home interior',
  },
  {
    src: '/portfolio/portfolio-2.jpg',
    alt: 'Professional cleaning results - pristine kitchen transformation',
  },
  {
    src: '/portfolio/portfolio-3.jpg',
    alt: 'Professional cleaning results - immaculate bathroom cleaning',
  },
  {
    src: '/portfolio/portfolio-4.jpg',
    alt: 'Professional cleaning results - fresh and clean bedroom',
  },
  {
    src: '/portfolio/portfolio-5.jpg',
    alt: 'Professional cleaning results - detailed floor cleaning',
  },
  {
    src: '/portfolio/portfolio-6.jpg',
    alt: 'Professional cleaning results - comprehensive home cleaning',
  },
  {
    src: '/portfolio/portfolio-7.jpg',
    alt: 'Professional cleaning results - meticulous attention to detail',
  },
  {
    src: '/portfolio/portfolio-8.jpg',
    alt: 'Professional cleaning results - fresh and organized space',
  },
  {
    src: '/portfolio/portfolio-9.jpg',
    alt: 'Professional cleaning results - spotless surface cleaning',
  },
  {
    src: '/portfolio/portfolio-10.jpg',
    alt: 'Professional cleaning results - thorough deep cleaning',
  },
  {
    src: '/portfolio/portfolio-11.jpg',
    alt: 'Professional cleaning results - pristine home interior',
  },
  {
    src: '/portfolio/portfolio-12.jpg',
    alt: 'Professional cleaning results - immaculate cleaning standards',
  },
  {
    src: '/portfolio/portfolio-13.jpg',
    alt: 'Professional cleaning results - comprehensive cleaning service',
  },
  {
    src: '/portfolio/portfolio-14.jpg',
    alt: 'Professional cleaning results - quality cleaning work',
  },
  {
    src: '/portfolio/portfolio-15.jpg',
    alt: 'Professional cleaning results - professional cleaning standards',
  },
  {
    src: '/portfolio/portfolio-16.jpg',
    alt: 'Professional cleaning results - exceptional cleaning service',
  },
];

const PortfolioCarousel = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
      aria-label="Portfolio Gallery"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-borders shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square relative">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCarousel;
