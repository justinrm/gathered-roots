import React from 'react';
import Head from 'next/head';
import Button from '../../components/Button';
import Link from 'next/link';
import Image from 'next/image';

// Standard cleaning tasks included in move-in/move-out
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

// Deep cleaning tasks included in move-in/move-out
const deepCleaningTasks = [
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

// Additional move-in/move-out specific tasks
const additionalMoveInOutTasks = [
  {
    category: 'Move-In/Move-Out Extras',
    items: [
      'Clean inside all cabinets and drawers',
      'Clean inside oven and refrigerator',
      'Wipe down all doors and door frames',
      'Clean inside closets',
      'Remove any remaining trash or debris',
    ],
  },
];

export default function MoveInMoveOut() {
  return (
    <>
      <Head>
        <title>Move-In/Move-Out Cleaning | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Make your move stress-free with our thorough Move-In/Move-Out cleaning service. Perfect for landlords, tenants, and homeowners."
        />
        <meta
          property="og:title"
          content="Move-In/Move-Out Cleaning | Gathered Roots Cleaning"
        />
        <meta
          property="og:description"
          content="Professional move-in and move-out cleaning services. Book your appointment today!"
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/services/move-in-move-out" />
        
        {/* Service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Move-In/Move-Out Cleaning',
              description: 'Thorough cleaning service for move-in and move-out situations. Perfect for landlords, tenants, and homeowners during transitions.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Gathered Roots Cleaning',
                '@id': 'https://www.gatheredrootscleaning.com'
              },
              areaServed: [
                {
                  '@type': 'Place',
                  name: 'Lewiston, ID'
                },
                {
                  '@type': 'Place',
                  name: 'Clarkston, WA'
                }
              ],
              serviceType: 'Move-in Move-out Cleaning',
              category: 'Transition Cleaning',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                description: 'Comprehensive cleaning for moving transitions'
              }
            })
          }}
        />
      </Head>
      <main className="bg-background min-h-screen">
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/move-out.jpg"
                  alt="Empty, clean apartment ready for new tenants"
                  className="rounded-lg shadow-sm w-full mx-auto object-cover h-64"
                  width={800}
                  height={450}
                  quality={75}
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
                Move-In/Move-Out Clean
              </h1>
              <p className="text-lg text-text-dark mb-8 max-w-2xl mx-auto">
                Our Move-In/Move-Out cleaning service is designed to make transitions smooth and
                stress-free. Whether you&apos;re a tenant looking to get your deposit back, a
                landlord preparing for new renters, or a homeowner settling into a new space, our
                team will ensure everything is spotless. This service includes all Standard and Deep Cleaning tasks, plus additional move-in/move-out specific services.
              </p>
            </div>

            {/* Standard Cleaning Tasks Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Standard Cleaning Tasks (Included)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            {/* Deep Cleaning Tasks Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Deep Cleaning Tasks (Included)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {deepCleaningTasks.map((section, index) => (
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

            {/* Additional Move-In/Move-Out Tasks Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Additional Move-In/Move-Out Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalMoveInOutTasks.map((section, index) => (
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
                <Button className="text-lg px-8 py-3 w-full sm:w-auto max-w-xs mx-auto">Get a Move-In/Move-Out Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
