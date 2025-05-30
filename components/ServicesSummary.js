import React from 'react';
import Image from 'next/image';
import Card from './Card';
// import Button from './Button'; // Removed unused import
// import Link from 'next/link'; // Removed unused import

// Placeholder for icons - in a real app, you'd import actual icons

const services = [
  {
    id: 1,
    title: 'Standard Clean',
    description:
      'A thoughtful clean for every room, with surfaces, floors, and high-touch areas cared for with intention.',
    icon: (
      <Image
        src="/images/service-standard-clean.svg"
        alt="Professional cleaner wiping kitchen counter"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-primary-accent-teal"
      />
    ),
  },
  {
    id: 2,
    title: 'Deep Clean',
    description:
      'A deeper level of care for homes that need extra attention, with added focus on buildup, overlooked spaces, and detailed surface cleaning throughout.',
    icon: (
      <Image
        src="/images/service-deep-clean.svg"
        alt="Cleaner scrubbing bathroom tile with eco-friendly products"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-primary-accent-green"
      />
    ),
  },
  {
    id: 3,
    title: 'Move-In/Out Clean',
    description:
      'A detailed clean designed to refresh empty spaces, reaching inside cabinets, appliances, and every corner to welcome the next chapter.',
    icon: (
      <Image
        src="/images/service-move-clean.svg"
        alt="Empty, sparkling clean living room ready for move-in"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-secondary-accent-hover"
      />
    ),
  },
  {
    id: 4,
    title: 'Eco-Friendly Options',
    description:
      'A gentle and mindful clean using non toxic products, safe for children, pets, and the planet without compromising on freshness.',
    icon: (
      <Image
        src="/images/service-eco-clean.svg"
        alt="Eco-friendly cleaning products and supplies on countertop"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover mb-4 border-2 border-primary-accent-teal opacity-75"
      />
    ),
  },
];

const ServicesSummary = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-cta mb-12 text-center">
          At Our Core
        </h2>
        <p className="text-lg sm:text-xl text-text-dark mb-12 max-w-4xl mx-auto">
          We offer thoughtful cleaning services tailored to the rhythm of your home, creating spaces
          that feel calm, cared for, and quietly renewed. Whether tending to the everyday or
          preparing for something special, our work is rooted in your well-being and the comfort of
          those you love.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Service summaries"
        >
          {services.map((service) => (
            <Card
              key={service.id}
              className="text-center flex flex-col items-center"
              role="listitem"
            >
              <div className="w-12 h-12 text-primary-accent-teal mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-card-text-primary mb-2">{service.title}</h3>
              <p className="text-card-text-secondary text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSummary;
