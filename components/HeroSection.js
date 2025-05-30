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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8">
          {/* Left column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo - now displayed prominently above the heading on all screen sizes */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <Image
                src="/images/logo-complete.svg"
                alt="Gathered Roots Cleaning Complete Logo"
                width={800}
                height={506}
                className="h-72 sm:h-[22.5rem] lg:h-[27rem] w-auto object-contain max-w-full"
              />
            </div>
            
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-accent-cta mb-6 font-headings">
              Rooted in clean.<br />
              <span className="text-primary-accent-green">Driven by care.</span>
            </h1>
            
            {/* Descriptive text */}
            <p className="text-lg sm:text-xl text-text-dark mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At Gathered Roots Cleaning, we tend to your home the way one might care for an old
              garden or a well-loved heirloom. Our services are thoughtfully shaped to bring back the
              stillness of early mornings, the comfort of sun-warmed floors, and the quiet pride of a
              home kept with love.
            </p>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-light mb-8 font-medium">
              Veteran owned, family operated. Serving Lewiston, ID & Clarkston, WA.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center">
              <Link href="/quote">
                <Button className="text-lg px-8 py-3 w-full sm:w-auto">Request a Quote</Button>
              </Link>
              <a href="https://gathered-roots-cleaning.square.site/" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="text-lg px-8 py-3 w-full sm:w-auto">
                  Book Your Cleaning
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right column - Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Hero Image - no logo overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-clean-home.jpg"
                  alt="Beautiful, sparkling clean living room showcasing professional cleaning results"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-accent-teal/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators/features strip */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-borders py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-accent-green/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-accent-cta mb-1">Veteran Owned</h3>
                <p className="text-sm text-text-light">Trusted service with military precision</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-accent-green/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-accent-cta mb-1">Family Operated</h3>
                <p className="text-sm text-text-light">Personal care for your home</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-accent-green/10 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-primary-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
