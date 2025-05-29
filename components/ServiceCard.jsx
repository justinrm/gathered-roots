import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Placeholder, assuming Heroicons
import Card from './Card';
import Button from './Button';

const ServiceCard = ({ icon, title, description, ctaText, ctaLink, className }) => {
  const IconComponent = icon; // Assuming icon is a component or SVG string

  return (
    <Card className={`flex flex-col ${className}`} hoverEffect={true}>
      {IconComponent && (
        <div className="mb-4 text-primary-accent-teal">
          {/* If icon is an SVG string, use dangerouslySetInnerHTML or a proper SVG component */}
          {typeof IconComponent === 'string' ? (
            <div
              dangerouslySetInnerHTML={{ __html: IconComponent }}
              className="w-12 h-12"
              aria-hidden="true"
            />
          ) : (
            <IconComponent className="w-12 h-12" aria-hidden="true" />
          )}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-card-text-primary">{title}</h3>
      <p className="text-card-text-secondary mb-4 text-base leading-relaxed">{description}</p>
      {ctaText &&
        (ctaLink || ctaText) && ( // Ensure ctaText exists before rendering button
          (<div className="mt-auto">
            <Button
              href={ctaLink || '#'}
              variant="primary"
              className="mt-auto inline-flex items-center bg-primary-accent-teal text-white font-medium py-2 px-6 rounded-md hover:bg-secondary-accent-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-accent-teal focus:ring-opacity-50"
              aria-label={ctaText + (title ? ` for ${title}` : '')}
            >
              {ctaText} <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />
            </Button>
          </div>)
        )}
    </Card>
  );
};

export default ServiceCard;

// Example Usage (can be removed or kept for reference):
/*
import { BeakerIcon } from '@heroicons/react/24/solid'; // Example icon

const MyPage = () => (
  <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <ServiceCard
      icon={BeakerIcon}
      title="Deep Cleaning"
      description="Our thorough deep cleaning service leaves no corner untouched. Perfect for a fresh start."
      ctaText="Learn More"
      ctaLink="/services/deep-cleaning"
    />
    <ServiceCard
      title="Regular Maintenance"
      description="Keep your space consistently clean with our reliable regular maintenance plans."
      ctaText="Get a Quote"
      ctaLink="/quote"
    />
     <ServiceCard
      icon={() => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
      title="Move-In/Out Cleaning"
      description="Stress-free moving with our comprehensive move-in/out cleaning services."
      ctaText="Book Now"
      ctaLink="/booking"
    />
  </div>
);
*/

// Ensure your tailwind.config.js has the necessary colors:
// theme: {
//   extend: {
//     colors: {
//       primary_accent_teal: '#006978', // Deep Teal
//       secondary_accent_hover: '#5FB09C', // Lighter Teal/Green for hover
//       text_dark: '#333333',
//       text_light: '#757575',
//       borders: '#E0E0E0',
//     },
//   },
// },
