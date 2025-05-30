import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServicesSummary from '../components/ServicesSummary';
import UspSection from '../components/UspSection';
// import TestimonialCarousel from '../components/TestimonialCarousel'; // TODO: Enable when real testimonials are available
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Gathered Roots Cleaning | Rooted in clean. Driven by care. | Veteran owned, family operated.`}</title>
        <meta
          name="description"
          content="Gathered Roots Cleaning offers premium cleaning services for homes and businesses. Trusted professionals, flexible scheduling, and a spotless clean every time. Request a quote today!"
        />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com" />
        <meta
          property="og:title"
          content="Gathered Roots Cleaning | Lewiston & Clarkston Cleaning Services"
        />
        <meta
          property="og:description"
          content="Gathered Roots Cleaning offers premium, eco-friendly cleaning services for homes and businesses in Lewiston, ID and Clarkston, WA. Veteran owned, family operated."
        />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/hero-clean-home.jpg"
        />
        <meta property="og:image:alt" content="Beautiful, sparkling clean living room showcasing professional cleaning results by Gathered Roots Cleaning" />
        <meta property="og:site_name" content="Gathered Roots Cleaning" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.gatheredrootscleaning.com" />
        {/* TODO: Add your Twitter handle if available, e.g. @GatheredRoots */}
        {/* <meta property="twitter:site" content="@YourTwitterHandle" /> */}
        <meta
          property="twitter:title"
          content="Gathered Roots Cleaning | Lewiston & Clarkston Cleaning Services"
        />
        <meta
          property="twitter:description"
          content="Gathered Roots Cleaning offers premium, eco-friendly cleaning services for homes and businesses in Lewiston, ID and Clarkston, WA. Veteran owned, family operated."
        />
        <meta
          property="twitter:image"
          content="https://www.gatheredrootscleaning.com/images/hero-clean-home.jpg"
        />
        <meta property="twitter:image:alt" content="Beautiful, sparkling clean living room showcasing professional cleaning results by Gathered Roots Cleaning" />

        {/* TODO: Implement JSON-LD structured data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Gathered Roots Cleaning',
              image: 'https://www.gatheredrootscleaning.com/images/logo-complete.svg', // Or a better PNG/JPG
              url: 'https://www.gatheredrootscleaning.com',
              telephone: '+1-208-717-1192',
              email: 'hello@gatheredrootscleaning.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '212 5th Street', // TODO: Add physical address if applicable
                addressLocality: 'Lewiston',
                addressRegion: 'ID',
                postalCode: '83501', // TODO: Add postal code
                addressCountry: 'US',
              },
              description:
                'Gathered Roots Cleaning offers premium cleaning services for homes and businesses in Lewiston, ID and Clarkston, WA. Veteran owned and family operated.',
              openingHoursSpecification: [
                // Monday - Friday: 9:30 AM - 5:00 PM
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:30',
                  closes: '17:00',
                },
                // Saturday: 9:00 AM - 3:00 PM
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '15:00',
                },
              ],
              sameAs: [
                // TODO: Add social media links
                // "https://www.facebook.com/yourprofile",
                // "https://www.twitter.com/yourprofile",
                // "https://www.instagram.com/yourprofile"
              ],
              priceRange: '$$', // Optional: "$, $$, $$$"
              areaServed: [
                {
                  '@type': 'Place',
                  name: 'Lewiston, ID',
                },
                {
                  '@type': 'Place',
                  name: 'Clarkston, WA',
                },
              ],
              currenciesAccepted: 'USD'
            }),
          }}
        />
        
        {/* TODO: Enable when real testimonials are available */}
        {/* Reviews/Testimonials Schema */}
        {/*
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.gatheredrootscleaning.com',
              name: 'Gathered Roots Cleaning',
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Sarah L.'
                  },
                  reviewBody: 'Gathered Roots Cleaning has transformed our home! Their attention to detail is impeccable, and the team is so friendly and professional. Highly recommend!'
                },
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Mark P.'
                  },
                  reviewBody: 'The best cleaning service we\'ve ever used. Reliable, thorough, and they use eco-friendly products which is a huge plus for us.'
                },
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                  },
                  author: {
                    '@type': 'Person',
                    name: 'Michael R.'
                  },
                  reviewBody: 'Justin and Chelsea go above and beyond every time. Their military precision combined with genuine care makes all the difference. Our home has never felt so welcoming.'
                }
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '5',
                bestRating: '5',
                worstRating: '4'
              }
            })
          }}
        />
        */}
      </Head>
      <main id="main-content" className="bg-background min-h-screen flex flex-col">
        <HeroSection />
        <section aria-label="Summary of Services">
          <ServicesSummary />
        </section>
        <section aria-label="Why Choose Us">
          <UspSection />
        </section>
        {/* TODO: Enable when real testimonials are available */}
        {/*
        <section
          aria-label="Customer Testimonials"
          className="bg-background py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-cta text-center mb-8">
              What Our Clients Say
            </h2>
            <TestimonialCarousel />
          </div>
        </section>
        */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-4">
              Ready for a peaceful home?
            </h2>
            <p className="text-lg text-text-dark mb-6">
              Reach out today to request a personalized quote or schedule your first cleaning. Let
              Gathered Roots Cleaning bring a gentle touch to your space and a little more calm
              to your everyday.
            </p>
          </div>
        </section>
        {/* Contact/Booking Section */}
        <section
          aria-label="Contact or Booking"
          className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-borders"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-primary-accent-cta mb-4 text-left">
                Contact Us
              </h2>
              <p className="text-text-light mb-6 text-left">
                Have a question or ready to book? Fill out the form or reach us directly:
              </p>
              <div className="space-y-2 text-left">
                <p className="text-lg text-text-light">
                  <span className="font-semibold text-brand-accent">Phone:</span>{' '}
                  <a
                    href="tel:+12087171192"
                    className="block text-lg text-primary-accent-cta hover:text-secondary-accent-hover font-medium transition-colors duration-200"
                    aria-label="Call Gathered Roots Cleaning"
                  >
                    (208) 717-1192
                  </a>
                </p>
                <p className="text-lg text-text-light">
                  <span className="font-semibold text-brand-accent">Email:</span>{' '}
                  <a
                    href="mailto:hello@gatheredrootscleaning.com"
                    className="block text-lg text-primary-accent-cta hover:text-secondary-accent-hover font-medium transition-colors duration-200"
                    aria-label="Email Gathered Roots Cleaning"
                  >
                    hello@gatheredrootscleaning.com
                  </a>
                </p>
                <p className="text-lg text-text-light">
                  <span className="font-semibold text-brand-accent">Service Area:</span> Lewiston,
                  ID & Clarkston, WA
                </p>
              </div>
              <p className="text-text-light text-sm">Click to call or email on mobile.</p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      {/* Footer removed, will be handled by _app.js */}
    </>
  );
}
