import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import Card from './Card';
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Placeholder for icons - in a real app, you'd import actual icons
// const PlaceholderIcon = ({ className }) => (
// <Image src="/images/logo-complete.svg" alt="Gathered Roots Logo" width={48} height={48} className={className} />
// );

const usps = [
  {
    id: 1,
    title: 'Veteran Owned',
    description:
      'Gathered Roots Cleaning is proudly owned and operated by a United States Army veteran. We carry the spirit of service into every home we care for and remain deeply thankful for those who serve and the families who stand beside them.',
    icon: <Image src="/images/rustic-flag.svg" alt="Veteran Owned Icon" width={64} height={64} className="w-full h-full" />,
    color: 'bg-brand-accent text-white',
  },
  {
    id: 2,
    title: 'Flexible Scheduling',
    description:
      'We understand the rhythms of a busy life. That is why we offer gentle, flexible scheduling that works around your world, making it easy to welcome cleanliness and calm into your home whenever it suits you best.',
    icon: <SparklesIcon className="w-full h-full" />,
    color: 'bg-primary-accent-cta text-white',
  },
  {
    id: 3,
    title: 'Trusted Professionals',
    description:
      'Our team is made up of kind and capable hands — experienced, thoughtful, and devoted to their craft. With every visit, we bring care, consistency, and a quiet pride in a job well done.',
    icon: <CheckCircleIcon className="w-full h-full" />,
  },
];

const UspSection = () => {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-cta mb-12 text-center">
          Why Choose Gathered Roots Cleaning?
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          role="list"
          aria-label="Unique selling propositions"
        >
          {usps.map((usp) => (
            <Card
              key={usp.id}
              className="flex flex-col items-center"
              role="listitem"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${usp.color || 'bg-opacity-0'} p-3 mb-4`}
              >
                {usp.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-text-primary mb-2">{usp.title}</h3>
              <p className="text-card-text-secondary leading-relaxed">{usp.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/quote" passHref legacyBehavior>
            <Button className="text-lg px-8 py-3 w-full sm:w-auto">Request a Quote</Button>
          </Link>
          <a href="https://gathered-roots-cleaning.square.site/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="text-lg px-8 py-3 w-full sm:w-auto">
              Book Your Cleaning
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
