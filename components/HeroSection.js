import React from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

const usps = [
  {
    id: 1,
    title: 'Veteran Owned',
    description:
      'Gathered Roots Cleaning is proudly owned and operated by a United States Army veteran. We carry the spirit of service into every home we care for and remain deeply thankful for those who serve and the families who stand beside them.',
    icon: (
      <Image
        src="/images/rustic-flag.svg"
        alt="Veteran Owned Icon"
        width={64}
        height={64}
        className="w-full h-full"
      />
    ),
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
    title: 'Licensed and Insured',
    description:
      "Clean with confidence knowing we carry liability insurance for your complete peace of mind. We're fully licensed and insured, so you can relax while we take care of your home.",
    icon: <CheckCircleIcon className="w-full h-full" />,
  },
];

const HeroSection = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Hero Content Container */}
      <div className="relative z-10">
        {/* Top section with logo and hero image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[32vh] py-4 px-4 sm:px-6 lg:px-8">
          {/* Left column - Logo */}
          <div className="text-center lg:text-left order-1 lg:order-1 flex items-center justify-center lg:justify-start">
            {/* Logo - now displayed prominently and larger */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/logo-complete.svg"
                alt="Gathered Roots Cleaning Complete Logo"
                width={800}
                height={506}
                className="w-full h-auto object-contain max-w-full"
              />
            </div>
          </div>

          {/* Right column - Hero Image */}
          <div className="order-2 lg:order-2 flex items-center justify-center">
            <div className="relative">
              {/* Hero Image - no logo overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/portfolio/portfolio-27.jpg"
                  alt="Beautiful, sparkling clean living room showcasing professional cleaning results"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />

                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-accent-teal/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered content below logo and image */}
        <div className="text-center px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          {/* Descriptive text */}
          <p className="text-lg sm:text-xl text-text-dark mb-10 max-w-4xl mx-auto leading-relaxed">
            At Gathered Roots Cleaning, we bring peace of mind to your home with our comprehensive
            cleaning services. From standard maintenance cleanings to deep cleans, move-in/move-out
            services, and property management solutions, we serve Lewiston, ID, Clarkston, WA, and
            surrounding areas with the care your home deserves. We are fully licensed in Idaho and
            carry liability insurance, so you can trust us to protect both your space and your peace
            of mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center">
            <Link href="/quote" legacyBehavior>
              <Button className="text-lg px-8 py-3 w-full sm:w-auto">Request a Quote</Button>
            </Link>
          </div>
        </div>

        {/* Why Choose Gathered Roots Cleaning Section */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-borders py-16 px-4 sm:px-6 lg:px-8">
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
                <Card key={usp.id} className="flex flex-col items-center" role="listitem">
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
            <div className="mt-12 flex justify-center">
              <Link href="/quote" passHref legacyBehavior>
                <Button className="text-lg px-8 py-3 w-full sm:w-auto">Request a Quote</Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
