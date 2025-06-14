import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button';
import Image from 'next/image';

// Standard cleaning tasks (done with eco-friendly products)
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
    items: [
      'Dust furniture and fixtures',
      'Make beds (change linens if provided)',
      'Vacuum carpets or sweep and mop floors',
      'Empty trash bins and replace liners',
    ],
  },
];

const benefits = [
  {
    category: 'Health & Safety',
    items: [
      'Safe for sensitive individuals, children, and pets',
      'No harsh chemicals or toxic residues',
      'Reduced allergens and improved indoor air quality',
    ],
  },
  {
    category: 'Environmental Impact',
    items: [
      'Effective cleaning without environmental harm',
      'Sustainable practices that minimize waste',
      'Biodegradable products with eco-friendly packaging',
    ],
  },
];

export default function EcoFriendly() {
  return (
    <>
      <Head>
        <title>Eco-Friendly Cleaning Options | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Our eco-friendly residential cleaning services use safe, natural products for homes in Lewiston, ID 83501 and Clarkston, WA 99403. Effective and better for your family and the environment."
        />
        <meta
          property="og:title"
          content="Eco-Friendly Cleaning Options | Gathered Roots Cleaning"
        />
        <meta
          property="og:description"
          content="Safe, non-toxic cleaning products and methods for your family and pets. Book eco-friendly cleaning today!"
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/services/eco-friendly" />

        {/* Service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Eco-Friendly Cleaning',
              description:
                'Environmentally conscious residential cleaning using safe, non-toxic products for homes in Lewiston, ID 83501 and Clarkston, WA 99403. Perfect for families with children, pets, or sensitivities.',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Gathered Roots Cleaning',
                '@id': 'https://www.gatheredrootscleaning.com',
              },
              areaServed: [
                {
                  '@type': 'Place',
                  name: 'Lewiston, ID 83501',
                },
                {
                  '@type': 'Place',
                  name: 'Clarkston, WA 99403',
                },
              ],
              serviceType: 'Green Residential House Cleaning',
              category: 'Eco-Friendly Cleaning',
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'Cleaning Method',
                  value: 'Non-toxic, environmentally safe products',
                },
              ],
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                description: 'Safe, eco-friendly residential cleaning services',
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
                  src="/images/eco-friendly.jpg"
                  alt="Natural eco-friendly cleaning products"
                  width={800}
                  height={256}
                  className="rounded-lg shadow-lg w-full mx-auto object-cover h-64"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
                Eco-Friendly Cleaning
              </h1>
              <p className="text-lg text-text-dark mb-8 max-w-2xl mx-auto">
                At Gathered Roots, we&apos;re committed to offering eco-friendly cleaning options
                that protect your family&apos;s health and the environment. Our green cleaning
                services use plant-based, biodegradable products that are free from harsh chemicals
                yet highly effective. This option can be applied to any of our cleaning services.
                <br />
                <span className="block mt-2">
                  Serving Lewiston, ID <strong>83501</strong> and Clarkston, WA{' '}
                  <strong>99403</strong>.
                </span>
              </p>
            </div>

            {/* Standard Cleaning Tasks Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Standard Cleaning Tasks (With Eco-Friendly Products)
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

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Benefits of Eco-Friendly Cleaning
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {benefits.map((section, index) => (
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

            <div className="text-center mb-8">
              <p className="text-lg text-text-dark mb-8 max-w-2xl mx-auto">
                Our eco-friendly option can be applied to any of our cleaning services, from
                standard recurring cleans to deep cleans and move-in/move-out services.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link href="/quote" passHref legacyBehavior>
                <Button className="text-lg px-8 py-3 w-full sm:w-auto max-w-xs mx-auto">
                  Get an Eco-Friendly Cleaning Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
