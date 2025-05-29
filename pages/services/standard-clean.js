import React from 'react';
import Head from 'next/head';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Button from '../../components/Button';
import Link from 'next/link';

const checklistData = [
  {
    room: 'All Rooms',
    items: [
      'Dust accessible surfaces (including furniture, shelves, and baseboards)',
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
        <title>Standard Clean | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Our Standard Clean keeps your home or business fresh and tidy. See what's included and book your clean today!"
        />
        <meta property="og:title" content="Standard Clean | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="A thorough, consistent clean for your space. Perfect for regular upkeep. Book now!"
        />
      </Head>
      <main className="bg-background min-h-screen">
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img
                src="/images/standard-clean.jpg"
                alt="Clean and tidy living room"
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
            </p>
            <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6">
              What&apos;s Included
            </h2>
            <div className="text-left text-text-dark mb-8 max-w-xl mx-auto space-y-6">
              {checklistData.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="text-xl font-semibold text-primary-accent-green mb-3">
                    {section.room}
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-text-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/quote" passHref legacyBehavior>
                <Button className="text-lg px-8 py-3">Get a Standard Cleaning Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
