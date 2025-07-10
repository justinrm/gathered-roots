import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/Button';
import Image from 'next/image';

// Property management and office cleaning services
const propertyManagementServices = [
  {
    category: 'Property Management',
    items: [
      'Thorough unit turnovers between tenants',
      'Regular maintenance cleaning for rental properties',
      'Move-in/move-out cleaning services',
      'Deep cleaning for property showings',
      'Flexible scheduling to accommodate tenant needs',
    ],
  },
  {
    category: 'Office Spaces',
    items: [
      'Daily, weekly, or monthly office cleaning',
      'Conference room and break room sanitation',
      'Restroom cleaning and supply management',
      'Reception area and common space maintenance',
      'Desk and workstation cleaning',
    ],
  },
  {
    category: 'Commercial Areas',
    items: [
      'Floor care (vacuuming, mopping, and polishing)',
      'Window cleaning and glass surfaces',
      'Trash removal and recycling management',
      'Sanitization of high-touch surfaces',
      'Entrance and lobby maintenance',
    ],
  },
];

const benefits = [
  {
    category: 'Licensed & Insured',
    items: [
      'Fully licensed and insured in Idaho',
      'Bonded for your protection and peace of mind',
      'Professional liability coverage',
    ],
  },
  {
    category: 'Professional Service',
    items: [
      'Veteran-owned and operated business',
      'Reliable, consistent service schedules',
      'Trained and trustworthy cleaning professionals',
    ],
  },
];

export default function PropertyManagement() {
  return (
    <>
      <Head>
        <title>Property Management & Office Cleaning Services | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Professional cleaning services for property management companies and office spaces in Lewiston, ID 83501 and Clarkston, WA 99403. Licensed and insured in Idaho."
        />
        <meta
          property="og:title"
          content="Property Management & Office Cleaning Services | Gathered Roots Cleaning"
        />
        <meta
          property="og:description"
          content="Licensed and insured commercial cleaning services for property management and office spaces. Professional, reliable service in Idaho and Washington."
        />
        <link
          rel="canonical"
          href="https://www.gatheredrootscleaning.com/services/property-management"
        />

        {/* Service-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Property Management & Office Cleaning',
              description:
                'Professional commercial cleaning services for property management companies and office spaces in Lewiston, ID 83501 and Clarkston, WA 99403. Licensed and insured in Idaho.',
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
              serviceType: 'Commercial Property Management and Office Cleaning',
              category: 'Property Management & Office Cleaning',
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'Insurance Status',
                  value: 'Licensed and insured in Idaho',
                },
              ],
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                priceCurrency: 'USD',
                description:
                  'Professional commercial cleaning services for property management and office spaces',
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
                  src="/images/clean-home.jpg"
                  alt="Professional office and property management cleaning"
                  width={800}
                  height={256}
                  className="rounded-lg shadow-lg w-full mx-auto object-cover h-64"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
                Property Management & Office Cleaning
              </h1>
              <p className="text-lg text-text-dark mb-8 max-w-2xl mx-auto">
                At Gathered Roots, we provide professional cleaning services for property management
                companies and office spaces. As a licensed and insured business in Idaho, we
                understand the unique needs of commercial properties and offer reliable, thorough
                cleaning solutions that maintain your professional image.
                <br />
                <span className="block mt-2">
                  Serving Lewiston, ID <strong>83501</strong> and Clarkston, WA{' '}
                  <strong>99403</strong>.
                </span>
              </p>
            </div>

            {/* Services Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-6 text-center">
                Our Commercial Cleaning Services
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {propertyManagementServices.map((section, index) => (
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
                Why Choose Our Commercial Services
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

            {/* Additional Information */}
            <div className="mb-12">
              <div className="p-8 bg-primary-accent-teal text-white rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold mb-4">Licensed & Insured in Idaho</h2>
                <p className="text-lg mb-6">
                  We are fully licensed and insured in Idaho, providing you with the peace of mind
                  that comes with professional, bonded cleaning services. Our veteran-owned business
                  is committed to maintaining the highest standards of service and reliability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote" passHref legacyBehavior>
                    <Button variant="secondary" size="large">
                      Get a Quote
                    </Button>
                  </Link>
                  <Link href="/contact" passHref legacyBehavior>
                    <Button
                      variant="outline"
                      size="large"
                      className="text-white border-white hover:bg-white hover:text-primary-accent-teal"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-4">
                Ready to Schedule Your Commercial Cleaning?
              </h2>
              <p className="text-lg text-text-dark mb-6 max-w-2xl mx-auto">
                Whether you need regular maintenance cleaning for your rental properties or
                professional office cleaning services, we&apos;re here to help. Our flexible
                scheduling and reliable service make us the perfect partner for your commercial
                cleaning needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" passHref legacyBehavior>
                  <Button size="large">Request a Quote</Button>
                </Link>
                <Link href="/booking" passHref legacyBehavior>
                  <Button variant="secondary" size="large">
                    Schedule Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
