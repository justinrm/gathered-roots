import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { CheckCircleIcon } from '@heroicons/react/24/solid'; // Removed unused import
import Button from '../../components/Button';
import Link from 'next/link';

// Standard cleaning tasks that are included in deep clean
const standardCleaningTasks = [
  {
    category: 'All Rooms',
    items: [
      'Dust accessible surfaces (including furniture and shelves)',
      'Vacuum carpets and rugs',
      'Sweep and mop hard floors',
      'Empty trash bins and replace liners',
      'Tidy up and organize general areas',
    ],
  },
  {
    category: 'Kitchen',
    items: [
      'Clean countertops and backsplash',
      'Wipe exterior of appliances (fridge, oven, microwave, dishwasher)',
      'Clean sink and faucet',
      'Spot clean cabinet exteriors',
      'Sanitize high-touch areas (e.g., light switches, handles)',
    ],
  },
  {
    category: 'Bathrooms',
    items: [
      'Clean and disinfect sinks, countertops, and faucets',
      'Scrub and disinfect toilets, tubs, and showers',
      'Clean mirrors',
      'Empty trash bins and replace liners',
      'Sanitize high-touch areas (e.g., light switches, handles)',
    ],
  },
  {
    category: 'Bedrooms',
    items: [
      'Dust furniture and fixtures',
      'Make beds (change linens if provided)',
      'Vacuum carpets or sweep and mop floors',
      'Empty trash bins and replace liners',
    ],
  },
];

// Additional deep cleaning tasks
const additionalDeepCleaningTasks = [
  {
    category: 'All Rooms',
    items: [
      'Clean baseboards and door frames',
      'Dust ceiling fans and light fixtures',
      'Clean interior windows and window sills',
      'Vacuum under furniture (if accessible)',
      'Wipe down doors and door frames',
    ],
  },
  {
    category: 'Kitchen',
    items: [
      'Clean interior of microwave',
      'Wipe down cabinet interiors (if empty)',
      'Clean behind and under appliances (if accessible)',
    ],
  },
  {
    category: 'Bathrooms',
    items: [
      'Scrub grout lines',
      'Clean and disinfect trash cans',
      'Wipe down cabinet interiors (if empty)',
    ],
  },
  {
    category: 'Bedrooms',
    items: ['Clean under beds (if accessible)', 'Wipe down closet shelves and drawers (if empty)'],
  },
];

export default function DeepClean() {
  return (
    <>
      <Head>
        <title>Deep House Cleaning Services Lewiston ID 83501 | LC Valley WA | Spring Cleaning Specialists</title>
        <meta
          name="description"
          content="Professional deep house cleaning in Lewiston ID 83501, Clarkston WA 99403, and LC Valley. Comprehensive residential cleaning including baseboards, ceiling fans, inside appliances, grout scrubbing, and interior windows. Perfect for spring cleaning, seasonal deep cleans, move-in preparation, and post-construction cleanup in Lewis-Clark Valley."
        />
        <meta name="keywords" content="deep cleaning service Lewiston ID, spring cleaning LC Valley, residential deep cleaning Clarkston WA, post-construction cleaning, move-in deep clean, seasonal house cleaning, detailed home cleaning 83501, grout cleaning LC Valley, baseboard cleaning Lewiston, ceiling fan cleaning, interior window cleaning Lewis-Clark Valley" />
        <meta property="og:title" content="Deep House Cleaning Services | LC Valley Spring Cleaning | Lewiston ID 83501" />
        <meta
          property="og:description"
          content="Professional deep house cleaning in Lewiston ID and Clarkston WA. Comprehensive seasonal and deep cleaning service for LC Valley homes including inside appliances, grout, and detailed sanitization. Book your spring cleaning today!"
        />
        <meta property="og:type" content="service" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional deep house cleaning services in Lewiston ID and Clarkston WA"
        />
        <meta name="geo.region" content="US-ID" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Lewiston, Idaho" />
        <meta name="geo.placename" content="Clarkston, Washington" />
        <meta name="geo.placename" content="Lewis-Clark Valley" />
        <meta name="geo.position" content="46.4004;-117.0177" />
        <meta name="ICBM" content="46.4004, -117.0177" />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/services/deep-clean" />

        {/* Service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Deep House Cleaning Service - Spring Cleaning & Seasonal Deep Cleans',
              description:
                'Professional deep house cleaning service in Lewiston ID 83501, Clarkston WA 99403, and Lewis-Clark Valley areas. Comprehensive residential cleaning including all standard maintenance tasks plus detailed cleaning of baseboards, ceiling fans, interior windows, inside appliances, grout scrubbing, and cabinet interiors. Perfect for spring cleaning, seasonal deep cleans, move-in preparation, post-construction cleanup, and special occasions in the LC Valley.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Gathered Roots Cleaning',
                '@id': 'https://www.gatheredrootscleaning.com',
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: 'ID',
                  addressLocality: 'Lewiston',
                  postalCode: '83501',
                  addressCountry: 'US',
                },
                telephone: '+1-208-555-0123',
                url: 'https://www.gatheredrootscleaning.com',
                priceRange: '$$',
                serviceArea: [
                  'Lewiston, ID 83501',
                  'Clarkston, WA 99403',
                  'Asotin, WA',
                  'Lewis-Clark Valley',
                  'LC Valley',
                ],
              },
              areaServed: [
                {
                  '@type': 'Place',
                  name: 'Lewiston',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lewiston',
                    addressRegion: 'ID',
                    postalCode: '83501',
                    addressCountry: 'US',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Clarkston',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Clarkston',
                    addressRegion: 'WA',
                    postalCode: '99403',
                    addressCountry: 'US',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Asotin',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Asotin',
                    addressRegion: 'WA',
                    addressCountry: 'US',
                  },
                },
                {
                  '@type': 'Place',
                  name: 'Lewis-Clark Valley',
                  address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'ID',
                    addressCountry: 'US',
                  },
                },
              ],
              serviceType: 'Residential Deep House Cleaning',
              category: 'Spring Cleaning and Seasonal Deep Cleaning Service',
              additionalType: 'https://schema.org/HomeAndConstructionBusiness',
              serviceOutput: 'Deep cleaned residential property with detailed sanitization',
              audience: [
                {
                  '@type': 'Audience',
                  audienceType: 'Homeowners preparing for spring season',
                  geographicArea: 'Lewiston-Clarkston LC Valley',
                },
                {
                  '@type': 'Audience',
                  audienceType: 'Busy professionals needing seasonal deep cleaning',
                  geographicArea: 'Lewis-Clark Valley',
                },
                {
                  '@type': 'Audience',
                  audienceType: 'Families preparing for special occasions',
                  geographicArea: 'Lewiston ID 83501 and Clarkston WA 99403',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Deep Cleaning Services Catalog',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Standard Cleaning Tasks Included',
                      description: 'Dusting all surfaces, vacuuming carpets, mopping floors, kitchen and bathroom cleaning, sanitizing high-touch areas',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Deep Cleaning Specialties',
                      description: 'Baseboards and door frames, ceiling fans and light fixtures, interior windows and sills, behind and inside appliances, grout scrubbing and tile detailing',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Spring Cleaning Seasonal Services',
                      description: 'Post-winter deep cleaning, seasonal organization support, detailed cabinet cleaning, comprehensive dust removal',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Move-In/Post-Construction Deep Clean',
                      description: 'Move-in preparation cleaning, post-construction cleanup, renovation cleanup, detailed sanitization',
                    },
                  },
                ],
              },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                description: 'One-time comprehensive residential deep cleaning service including spring cleaning and seasonal deep cleans',
                validFrom: '2024-01-01',
                businessFunction: 'https://schema.org/Sell',
                itemCondition: 'https://schema.org/NewCondition',
                warranty: 'Satisfaction guaranteed with quality assurance',
                areaServed: 'Lewiston ID 83501, Clarkston WA 99403, Lewis-Clark Valley',
              },
            }),
          }}
        />
      </Head>
      <main className="bg-background min-h-screen">
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/deep-clean.jpg"
                  alt="Professional deep cleaning in progress"
                  width={800}
                  height={256}
                  className="rounded-lg shadow-lg w-full mx-auto object-cover h-64"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
                Deep Clean
              </h1>
              <p className="text-lg text-text-dark mb-8 max-w-2xl mx-auto">
                Our Deep Clean service is a comprehensive top-to-bottom cleaning of your home. We
                recommend a deep clean if you have not had your home professionally cleaned within
                the past 3 months, or for special occasions. It includes all Standard Maintenance
                Cleaning tasks, plus the detailed items listed below.
                <br />
                <span className="block mt-2">
                  Serving Lewiston, ID <strong>83501</strong>, Clarkston, WA <strong>99403</strong>,
                  and surrounding areas.
                </span>
              </p>
            </div>

            {/* Standard Cleaning Tasks Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Standard Cleaning Tasks (Included)
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {standardCleaningTasks.map((section, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-lg shadow-md border border-borders"
                  >
                    <h3 className="text-xl font-medium text-primary-accent-green mb-2">
                      {section.category}
                    </h3>
                    <ul className="list-disc list-inside text-text-light space-y-1">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Deep Cleaning Tasks Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Additional Deep Cleaning Tasks
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {additionalDeepCleaningTasks.map((section, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-lg shadow-md border border-borders"
                  >
                    <h3 className="text-xl font-medium text-primary-accent-green mb-2">
                      {section.category}
                    </h3>
                    <ul className="list-disc list-inside text-text-light space-y-1">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/quote" passHref legacyBehavior>
                <Button className="text-lg px-8 py-3 w-full sm:w-auto max-w-xs mx-auto">
                  Get a Deep Cleaning Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
