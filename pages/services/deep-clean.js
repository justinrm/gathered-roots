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
      'Dust accessible surfaces (including furniture, shelves, and baseboards)',
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
    items: ['Dust furniture and fixtures', 'Make beds (change linens if provided)', 'Vacuum carpets or sweep and mop floors', 'Empty trash bins and replace liners'],
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
        <title>Deep Clean | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Our Deep Clean service tackles every corner for a truly spotless space. Residential cleaning services for Lewiston, ID 83501 and Clarkston, WA 99403. See what's included and book your deep clean today!"
        />
        <meta property="og:title" content="Deep Clean | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="An intensive, top-to-bottom clean for your home or business. Book your deep clean now!"
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/services/deep-clean" />
        
        {/* Service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Deep Clean',
              description: 'Comprehensive top-to-bottom residential cleaning service for homes in Lewiston, ID 83501 and Clarkston, WA 99403. Perfect for first-time cleans, spring cleaning, or special occasions.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Gathered Roots Cleaning',
                '@id': 'https://www.gatheredrootscleaning.com'
              },
              areaServed: [
                {
                  '@type': 'Place',
                  name: 'Lewiston, ID 83501'
                },
                {
                  '@type': 'Place',
                  name: 'Clarkston, WA 99403'
                }
              ],
              serviceType: 'Deep Residential House Cleaning',
              category: 'Intensive Cleaning',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                description: 'One-time comprehensive residential cleaning service'
              }
            })
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
                Cleaning tasks, plus the detailed items listed below.<br />
                <span className='block mt-2'>Serving Lewiston, ID <strong>83501</strong> and Clarkston, WA <strong>99403</strong>.</span>
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
                <Button className="text-lg px-8 py-3 w-full sm:w-auto max-w-xs mx-auto">Get a Deep Cleaning Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
