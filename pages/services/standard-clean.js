import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../../components/Button';
import Link from 'next/link';

const checklistData = [
  {
    room: 'All Rooms',
    items: [
      'Dust accessible surfaces (including furniture and shelves)',
      'Vacuum carpets and rugs',
      'Sweep and mop hard floors',
      'Empty trash bins and replace liners',
      'Tidy up and organize general areas',
    ],
  },
  {
    room: 'Kitchen',
    items: [
      'Clean countertops and backsplash',
      'Wipe exterior of appliances (fridge, oven, microwave, dishwasher)',
      'Clean sink and faucet',
      'Spot clean cabinet exteriors',
      'Sanitize high-touch areas (e.g., light switches, handles)',
    ],
  },
  {
    room: 'Bathrooms',
    items: [
      'Clean and disinfect sinks, countertops, and faucets',
      'Scrub and disinfect toilets, tubs, and showers',
      'Clean mirrors',
      'Empty trash bins and replace liners',
      'Sanitize high-touch areas (e.g., light switches, handles)',
    ],
  },
  {
    room: 'Bedrooms',
    items: [
      'Dust furniture and fixtures',
      'Make beds (change linens if provided)',
      'Vacuum carpets or sweep and mop floors',
      'Empty trash bins and replace liners',
    ],
  },
];

export default function StandardClean() {
  return (
    <>
      <Head>
        <title>Regular House Cleaning Services Lewiston ID 83501 | Clarkston WA 99403 | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Weekly, bi-weekly, and monthly house cleaning services in Lewiston ID 83501, Clarkston WA 99403, Asotin WA, and LC Valley areas. Professional residential maintenance cleaning including dusting, vacuuming, kitchen and bathroom sanitizing. Recurring home cleaning for consistent upkeep."
        />
        <meta name="keywords" content="regular house cleaning, weekly cleaning service, bi-weekly cleaning, monthly cleaning, maintenance cleaning Lewiston ID, residential cleaning Clarkston WA, recurring cleaning services, home cleaning 83501, house cleaners 99403, LC Valley cleaning" />
        <meta property="og:title" content="Regular House Cleaning Services Lewiston ID 83501 | Clarkston WA 99403" />
        <meta
          property="og:description"
          content="Weekly, bi-weekly & monthly house cleaning in Lewiston ID and Clarkston WA. Professional recurring residential cleaning services for LC Valley homes. Book your regular cleaning today!"
        />
        <meta property="og:type" content="service" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional regular house cleaning services in Lewiston ID and Clarkston WA"
        />
        <meta name="geo.region" content="US-ID" />
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Lewiston, Idaho" />
        <meta name="geo.placename" content="Clarkston, Washington" />
        <meta name="geo.position" content="46.4004;-117.0177" />
        <meta name="ICBM" content="46.4004, -117.0177" />
        <link
          rel="canonical"
          href="https://www.gatheredrootscleaning.com/services/standard-clean"
        />

        {/* Service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Regular House Cleaning Service',
              description:
                'Professional recurring house cleaning service in Lewiston ID 83501, Clarkston WA 99403, and LC Valley areas. Weekly, bi-weekly, and monthly residential maintenance cleaning including dusting, vacuuming, kitchen and bathroom sanitizing, and general upkeep. Consistent, reliable home cleaning service for busy families and professionals.',
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
                  name: 'LC Valley',
                  address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'ID',
                    addressCountry: 'US',
                  },
                },
              ],
              serviceType: 'Recurring Residential House Cleaning',
              category: 'House Cleaning Service',
              additionalType: 'https://schema.org/HomeAndConstructionBusiness',
              serviceOutput: 'Regularly maintained clean residential property',
              audience: {
                '@type': 'Audience',
                audienceType: 'Homeowners, Renters, and Busy Professionals',
                geographicArea: 'Lewiston-Clarkston LC Valley',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Regular Cleaning Service Options',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    name: 'Weekly House Cleaning',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Weekly Residential Cleaning',
                      description: 'Weekly recurring house cleaning service for consistent maintenance',
                    },
                  },
                  {
                    '@type': 'Offer',
                    name: 'Bi-Weekly House Cleaning',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bi-Weekly Residential Cleaning',
                      description: 'Every other week house cleaning service for regular upkeep',
                    },
                  },
                  {
                    '@type': 'Offer',
                    name: 'Monthly House Cleaning',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Monthly Residential Cleaning',
                      description: 'Monthly house cleaning service for basic maintenance',
                    },
                  },
                ],
              },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                description: 'Recurring residential cleaning service available weekly, bi-weekly, or monthly',
                validFrom: '2024-01-01',
                businessFunction: 'https://schema.org/Sell',
                itemCondition: 'https://schema.org/NewCondition',
                warranty: 'Satisfaction guaranteed',
                schedule: {
                  '@type': 'Schedule',
                  repeatFrequency: ['P1W', 'P2W', 'P1M'],
                  description: 'Available weekly, bi-weekly, or monthly',
                },
              },
            }),
          }}
        />
      </Head>
      <main className="bg-background min-h-screen">
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/standard-clean.jpg"
                alt="Clean and tidy living room"
                width={800}
                height={256}
                className="rounded-lg shadow-lg w-full mx-auto object-cover h-64"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
              Standard Clean
            </h1>
            <p className="text-lg text-text-dark mb-8 max-w-2xl mx-auto">
              Ideal for regular upkeep and maintenance, our Standard Clean is perfect for
              maintaining a consistently clean and healthy home. This recurring service (weekly,
              bi-weekly, or monthly) covers all the essentials to keep your space fresh and
              comfortable.
              <br />
              <span className="block mt-2">
                Serving Lewiston, ID <strong>83501</strong>, Clarkston, WA <strong>99403</strong>,
                and surrounding areas.
              </span>
            </p>
            <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6">
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
              {checklistData.map((section, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-lg shadow-md border border-borders"
                >
                  <h3 className="text-xl font-medium text-primary-accent-green mb-2">
                    {section.room}
                  </h3>
                  <ul className="list-disc list-inside text-text-light space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/quote" passHref legacyBehavior>
                <Button className="text-lg px-8 py-3 w-full sm:w-auto max-w-xs mx-auto">
                  Get a Standard Cleaning Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
