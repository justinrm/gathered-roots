import React from 'react';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

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
                  src="/portfolio/portfolio-24.jpg"
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
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/quote" legacyBehavior>
              <Button className="text-lg px-8 py-3 w-full sm:w-auto">Request a Quote</Button>
            </Link>
            <Link href="/booking" legacyBehavior>
              <Button variant="secondary" className="text-lg px-8 py-3 w-full sm:w-auto">
                Book Your Cleaning
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust indicators/features strip */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-borders py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-accent-green/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-primary-accent-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-accent-cta mb-1">Veteran Owned</h3>
                <p className="text-sm text-text-light">Trusted service with military precision</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-accent-green/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-primary-accent-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-accent-cta mb-1">Family Operated</h3>
                <p className="text-sm text-text-light">Personal care for your home</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-accent-green/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-primary-accent-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-accent-cta mb-1">Made with Love</h3>
                <p className="text-sm text-text-light">Every detail matters to us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
