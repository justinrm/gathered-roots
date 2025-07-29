import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServicesSummary from '../components/ServicesSummary';
import UspSection from '../components/UspSection';
// import TestimonialCarousel from '../components/TestimonialCarousel'; // TODO: Enable when real testimonials are available
import Link from 'next/link';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>House Cleaning Services Lewiston ID, Moscow ID & Pullman WA | Palouse Region | Gathered Roots</title>
        <meta
          name="description"
          content="Professional house cleaning services in Lewiston ID 83501, Moscow ID 83843, Pullman WA 99163 & Clarkston WA 99403. Serving Palouse Region, Lewis-Clark Valley, university communities. Veteran-owned, licensed, insured. Free quotes for residential, move-in/out, and deep cleaning!"
        />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com" />

        {/* Geographic Microdata */}
        <meta name="geo.region" content="US-ID;US-WA" />
        <meta name="geo.placename" content="Lewiston, Idaho; Moscow, Idaho; Pullman, Washington; Clarkston, Washington" />
        <meta name="geo.position" content="46.4165;-117.0177" />
        <meta name="ICBM" content="46.4165, -117.0177" />
        <meta name="DC.title" content="House Cleaning Services Lewis-Clark Valley Idaho Washington" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com" />
        <meta
          property="og:title"
          content="House Cleaning Services Lewiston ID, Moscow ID & Pullman WA | Palouse Region"
        />
        <meta
          property="og:description"
          content="Professional house cleaning services in Lewiston ID 83501, Moscow ID 83843, Pullman WA 99163 & Clarkston WA 99403. Serving Palouse Region, Lewis-Clark Valley, university communities. Veteran-owned, licensed, insured."
        />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional house cleaning services in Lewiston ID and Clarkston WA"
        />
        <meta property="og:site_name" content="Gathered Roots Cleaning" />
        <meta property="og:locality" content="Lewiston" />
        <meta property="og:region" content="ID" />
        <meta property="og:country-name" content="USA" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.gatheredrootscleaning.com" />
        {/* TODO: Add your Twitter handle if available, e.g. @GatheredRoots */}
        {/* <meta property="twitter:site" content="@YourTwitterHandle" /> */}
        <meta
          property="twitter:title"
          content="House Cleaning Services Lewiston ID, Moscow ID & Pullman WA | Palouse Region"
        />
        <meta
          property="twitter:description"
          content="Professional house cleaning services in Lewiston ID 83501, Moscow ID 83843, Pullman WA 99163 & Clarkston WA 99403. Serving Palouse Region, Lewis-Clark Valley, university communities. Veteran-owned, licensed, insured."
        />
        <meta
          property="twitter:image"
          content="https://www.gatheredrootscleaning.com/images/hero-clean-home.jpg"
        />
        <meta
          property="twitter:image:alt"
          content="Beautiful, sparkling clean living room showcasing professional cleaning results by Gathered Roots Cleaning"
        />

        {/* Enhanced LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              '@id': 'https://www.gatheredrootscleaning.com',
              name: 'Gathered Roots Cleaning',
              alternateName: 'Palouse Region & Lewis-Clark Valley Cleaning Services',
              image: 'https://www.gatheredrootscleaning.com/images/logo-complete.svg',
              logo: 'https://www.gatheredrootscleaning.com/images/logo-complete.svg',
              url: 'https://www.gatheredrootscleaning.com',
              telephone: '+1-208-717-1192',
              email: 'hello@gatheredrootscleaning.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '212 5th Street',
                addressLocality: 'Lewiston',
                addressRegion: 'ID',
                postalCode: '83501',
                addressCountry: 'US',
              },
              description:
                'Professional house cleaning services in Lewiston ID 83501, Moscow ID 83843, Pullman WA 99163 & Clarkston WA 99403. Serving Palouse Region, Lewis-Clark Valley, university communities. Veteran-owned, licensed, insured.',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:30',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '15:00',
                },
              ],
              sameAs: [
                // TODO: Add social media links when available
                // "https://www.facebook.com/gatheredrootscleaning",
                // "https://www.instagram.com/gatheredrootscleaning"
              ],
              priceRange: '$$',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 46.4165,
                longitude: -117.0177,
              },
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 46.4165,
                  longitude: -117.0177,
                },
                geoRadius: '25000',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Lewiston',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                  postalCode: '83501',
                },
                {
                  '@type': 'City',
                  name: 'Clarkston',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Washington',
                  },
                  postalCode: '99403',
                },
                {
                  '@type': 'City',
                  name: 'Asotin',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Washington',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Lapwai',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                  postalCode: '83540',
                },
                {
                  '@type': 'City',
                  name: 'Winchester',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                  postalCode: '83555',
                },
                {
                  '@type': 'City',
                  name: 'Culdesac',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                  postalCode: '83524',
                },
                {
                  '@type': 'City',
                  name: 'Juliaetta',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                  postalCode: '83535',
                },
                {
                  '@type': 'City',
                  name: 'Moscow',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                  postalCode: '83843',
                },
                {
                  '@type': 'City',
                  name: 'Pullman',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Washington',
                  },
                  postalCode: '99163',
                },
                {
                  '@type': 'Place',
                  name: 'Normal Hill',
                  containedInPlace: {
                    '@type': 'City',
                    name: 'Lewiston',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Orchards',
                  containedInPlace: {
                    '@type': 'City',
                    name: 'Lewiston',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Downtown Lewiston',
                  containedInPlace: {
                    '@type': 'City',
                    name: 'Lewiston',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'West Lewiston',
                  containedInPlace: {
                    '@type': 'City',
                    name: 'Lewiston',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Lewis-Clark Valley',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                },
              ],
              currenciesAccepted: 'USD',
              paymentAccepted: ['Cash', 'Credit Card', 'Check'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Palouse Region & Lewis-Clark Valley Cleaning Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Residential House Cleaning',
                      description: 'Professional house cleaning services for homes and apartments in Lewis-Clark Valley',
                      areaServed: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 46.4165,
                          longitude: -117.0177,
                        },
                        geoRadius: '25000',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Deep Cleaning Services',
                      description: 'Comprehensive top-to-bottom cleaning service for homes in Lewiston ID and Clarkston WA',
                      areaServed: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 46.4165,
                          longitude: -117.0177,
                        },
                        geoRadius: '25000',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Move-in/Move-out Cleaning',
                      description: 'Thorough cleaning for moving transitions in Lewis-Clark Valley',
                      areaServed: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 46.4165,
                          longitude: -117.0177,
                        },
                        geoRadius: '25000',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Property Management Cleaning',
                      description: 'Professional cleaning services for rental properties and property management companies',
                      areaServed: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 46.4165,
                          longitude: -117.0177,
                        },
                        geoRadius: '25000',
                      },
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Office Cleaning Services',
                      description: 'Professional cleaning services for small offices and commercial spaces',
                      areaServed: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 46.4165,
                          longitude: -117.0177,
                        },
                        geoRadius: '25000',
                      },
                    },
                  },
                ],
              },
              knowsAbout: [
                'House Cleaning Lewiston ID',
                'House Cleaning Moscow ID',
                'House Cleaning Pullman WA',
                'House Cleaning Clarkston WA',
                'Lewis-Clark Valley Cleaning Services',
                'Palouse Region Cleaning Services',
                'University of Idaho Cleaning',
                'Washington State University Cleaning',
                'Student Housing Cleaning',
                'Faculty Home Cleaning',
                'Normal Hill Cleaning',
                'Orchards Cleaning',
                'Downtown Lewiston Cleaning',
                'Snake River Cleaning Services',
                'Clearwater River Cleaning',
                'Property Management Cleaning',
                'Rental Property Cleaning',
                'Office Cleaning Lewis-Clark Valley',
                'Office Cleaning Palouse Region',
                'Deep Cleaning Services',
                'Move-in Cleaning',
                'Move-out Cleaning',
                'Post-construction Cleaning',
                'Veteran-owned Cleaning Service',
                'Licensed Cleaning Idaho',
                'Insured Cleaning Washington',
                'Eco-friendly Cleaning',
                'North Central Idaho Cleaning',
                'Eastern Washington Cleaning',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '1',
                bestRating: '5',
                worstRating: '5',
              },
            }),
          }}
        />

        {/* FAQ Schema for Local Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Do you serve Normal Hill neighborhood in Lewiston?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we proudly serve Normal Hill and all neighborhoods in Lewiston, ID 83501 including Orchards, Downtown Lewiston, West Lewiston, and surrounding areas.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What areas do you serve for cleaning services?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We serve the Palouse Region and Lewis-Clark Valley including Moscow ID 83843, Pullman WA 99163, Lewiston ID 83501, Clarkston WA 99403, and surrounding areas including Lapwai, Winchester, Culdesac, Juliaetta, and Asotin.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you clean for property management companies?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide professional cleaning services for property management companies including rental property cleaning, move-in/move-out cleaning, and regular maintenance cleaning for rental units.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are you licensed in both Idaho and Washington?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we are fully licensed and insured to provide cleaning services in both Idaho and Washington, serving customers in Moscow ID, Lewiston ID, Pullman WA, and Clarkston WA.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide office cleaning services?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, we provide professional office cleaning services for small offices, commercial spaces, and medical offices throughout the Palouse Region and Lewis-Clark Valley including Moscow, Pullman, Lewiston, and Clarkston.',
                  },
                },
              ],
            }),
          }}
        />

        {/* Service-Specific Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.gatheredrootscleaning.com#service',
              name: 'Palouse Region & Lewis-Clark Valley House Cleaning Services',
              description: 'Professional house cleaning services in Moscow ID 83843, Pullman WA 99163, Lewiston ID 83501 & Clarkston WA 99403',
              serviceType: 'House Cleaning Service',
              provider: {
                '@type': 'HomeAndConstructionBusiness',
                '@id': 'https://www.gatheredrootscleaning.com',
                name: 'Gathered Roots Cleaning',
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 46.4165,
                  longitude: -117.0177,
                },
                geoRadius: '25000',
              },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: 'https://www.gatheredrootscleaning.com',
                servicePhone: '+1-208-717-1192',
                availableLanguage: 'English',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'House Cleaning Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Standard House Cleaning',
                      description: 'Regular maintenance cleaning for homes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Deep House Cleaning',
                      description: 'Comprehensive top-to-bottom cleaning service',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Move-in/Move-out Cleaning',
                      description: 'Thorough cleaning for moving transitions',
                    },
                  },
                ],
              },
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
                  reviewBody: 'The best cleaning service we\'ve ever used. Reliable, thorough, and they serve property management and office spaces with professional service.'
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
              Reach out today to request a personalized quote for your cleaning needs. Let
              Gathered Roots Cleaning bring a gentle touch to your space and a little more calm to
              your everyday.
            </p>
          </div>
        </section>
        {/* Quote & Contact Section */}
        <section
          aria-label="Get Quote or Contact Us"
          className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-borders"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold text-primary-accent-cta mb-4 text-left">
                Get Your Quote
              </h2>
              <p className="text-text-light mb-6 text-left">
                Ready for a personalized cleaning quote? Use our quick quote form or reach us directly:
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
                  <span className="font-semibold text-brand-accent">Service Area:</span> Moscow ID 83843, Pullman WA 99163, Lewiston ID 83501, Clarkston WA 99403, and surrounding areas
                </p>
              </div>
              <p className="text-text-light text-sm">Click to call or email on mobile.</p>
            </div>
            <div>
              <div className="bg-card-background border border-card-border rounded-lg p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-primary-accent-cta mb-4 text-center">
                  What can we help you with?
                </h3>
                <div className="space-y-4">
                  <Link href="/quote" legacyBehavior>
                    <Button className="w-full text-lg py-4 px-6 flex items-center justify-center group">
                      <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Get a Cleaning Quote
                    </Button>
                  </Link>
                  <Link href="/contact" legacyBehavior>
                    <Button variant="secondary" className="w-full text-lg py-4 px-6 flex items-center justify-center group">
                      <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                      </svg>
                      General Questions
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-text-light text-center mt-6">
                  For cleaning quotes, use our quick quote form. For other questions, use our contact form.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer removed, will be handled by _app.js */}
    </>
  );
}
