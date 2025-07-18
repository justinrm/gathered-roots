import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Button';
import Card from '../components/Card';

const lewistonAreas = [
  'Downtown Lewiston',
  'Normal Hill',
  'Orchards',
  'West Lewiston',
  'Tammany Creek',
  'Snake River Avenue',
  'Preston Avenue',
  'Bryden Canyon',
];

const localLandmarks = [
  'Lewis-Clark State College',
  'Nez Perce County Historical Society Museum',
  'Hells Gate State Park',
  'Lewiston Civic Theatre',
  'Swallows Park',
  'Locomotive Park',
];

export default function LewistonCleaningServices() {
  return (
    <>
      <Head>
        <title>
          Professional House Cleaning Services in Lewiston, ID | Gathered Roots Cleaning
        </title>
        <meta
          name="description"
          content="Top-rated residential cleaning services in Lewiston, Idaho (83501). Serving Normal Hill, Orchards, Downtown, and all Lewiston neighborhoods. Veteran-owned, fully insured. Free quotes!"
        />
        <meta
          name="keywords"
          content="residential cleaning Lewiston ID 83501, house cleaning Lewiston ID, maid service Lewiston Idaho, cleaning service near me, Lewiston house cleaners, Normal Hill cleaning service, property management cleaning Lewiston"
        />
        <link
          rel="canonical"
          href="https://www.gatheredrootscleaning.com/lewiston-id-cleaning-services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Professional House Cleaning Services in Lewiston, ID | Gathered Roots Cleaning"
        />
        <meta
          property="og:description"
          content="Trusted house cleaning services in Lewiston, Idaho. Serving all neighborhoods with thorough, professional cleaning. Licensed and insured. Book your free quote today!"
        />
        <meta
          property="og:url"
          content="https://www.gatheredrootscleaning.com/lewiston-id-cleaning-services"
        />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional house cleaning services in Lewiston ID"
        />

        {/* Local Business Schema for Lewiston */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Residential Cleaning Services in Lewiston, ID 83501',
              description:
                'Professional residential cleaning services in Lewiston, Idaho (83501) and surrounding neighborhoods',
              url: 'https://www.gatheredrootscleaning.com/lewiston-id-cleaning-services',
              provider: {
                '@type': 'LocalBusiness',
                '@id': 'https://www.gatheredrootscleaning.com',
                name: 'Gathered Roots Cleaning',
                areaServed: {
                  '@type': 'City',
                  name: 'Lewiston',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lewiston',
                  addressRegion: 'ID',
                  postalCode: '83501',
                  addressCountry: 'US',
                },
              },
              mainEntity: {
                '@type': 'Service',
                name: 'Residential Cleaning Services',
                description:
                  'Professional residential cleaning services in Lewiston, Idaho (83501)',
                areaServed: {
                  '@type': 'City',
                  name: 'Lewiston',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho',
                  },
                },
              },
            }),
          }}
        />
      </Head>
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary-accent-teal text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Professional House Cleaning Services in{' '}
              <span className="text-secondary-accent-hover">Lewiston, ID</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Trusted by families across Normal Hill, Orchards, Downtown Lewiston, and surrounding
              neighborhoods. Veteran-owned, licensed and insured with a personal touch.
              <br />
              <span className="block mt-2">
                Serving Lewiston, ID <strong>83501</strong>, Clarkston, WA <strong>99403</strong>,
                and surrounding areas. For Clarkston-specific information, see our{' '}
                <Link href="/clarkston-wa-cleaning-services" className="underline text-white">
                  Clarkston page
                </Link>
                .
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" legacyBehavior>
                <Button variant="secondary" size="large">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/booking" legacyBehavior>
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-accent-teal"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal text-center mb-12">
              Serving All Lewiston, ID 83501 Neighborhoods
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-primary-accent-green mb-4">
                  Residential Areas We Serve
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-text-dark">
                  {lewistonAreas.map((area, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-accent-teal rounded-full mr-2"></span>
                      {area}
                    </li>
                  ))}
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-accent-teal rounded-full mr-2"></span>Zip
                    Code: 83501
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-primary-accent-green mb-4">
                  Near Local Landmarks
                </h3>
                <ul className="grid grid-cols-1 gap-2 text-text-dark">
                  {localLandmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-secondary-accent-hover rounded-full mr-2"></span>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Lewiston */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal text-center mb-12">
              Why Lewiston Families Choose Gathered Roots Cleaning
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">
                  Local Expertise
                </h3>
                <p className="text-text-dark">
                  We know Lewiston homes and understand the unique cleaning needs of Idaho families.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🇺🇸</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">
                  Veteran Owned
                </h3>
                <p className="text-text-dark">
                  Reliable, disciplined service with military precision and attention to detail.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-text-dark">
                  Fully licensed and insured in Idaho, serving property management and office
                  spaces.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Lewiston */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal text-center mb-12">
              Our Residential Cleaning Services in Lewiston, ID 83501
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">
                  Standard Cleaning
                </h3>
                <p className="text-text-dark text-sm mb-4">
                  Regular maintenance cleaning for busy Lewiston families
                </p>
                <Link href="/services/standard-clean" legacyBehavior>
                  <Button variant="outline" size="small">
                    Learn More
                  </Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">
                  Deep Cleaning
                </h3>
                <p className="text-text-dark text-sm mb-4">
                  Thorough top-to-bottom cleaning for Lewiston homes
                </p>
                <Link href="/services/deep-clean" legacyBehavior>
                  <Button variant="outline" size="small">
                    Learn More
                  </Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">
                  Move-In/Out
                </h3>
                <p className="text-text-dark text-sm mb-4">
                  Perfect for Lewiston relocations and transitions
                </p>
                <Link href="/services/move-in-move-out" legacyBehavior>
                  <Button variant="outline" size="small">
                    Learn More
                  </Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">
                  Property Management & Office
                </h3>
                <p className="text-text-dark text-sm mb-4">
                  Professional commercial cleaning services for property managers and offices
                </p>
                <Link href="/services/property-management" legacyBehavior>
                  <Button variant="outline" size="small">
                    Learn More
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-accent-teal text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready for a Spotless Home in Lewiston?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied customers across Lewiston, ID 83501. Get your free quote
              today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" legacyBehavior>
                <Button variant="secondary" size="large">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/service-areas" legacyBehavior>
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-accent-teal"
                >
                  View All Service Areas
                </Button>
              </Link>
              <Link href="/clarkston-wa-cleaning-services" legacyBehavior>
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-accent-teal"
                >
                  Clarkston, WA Services
                </Button>
              </Link>
              <Link href="tel:+12087171192" legacyBehavior>
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-accent-teal"
                >
                  Call (208) 717-1192
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-text-light mb-4">
            We provide <strong>residential cleaning services</strong> for homes in{' '}
            <strong>Lewiston, ID 83501</strong>, <strong>Clarkston, WA 99403</strong>, and
            surrounding areas.
          </p>
        </section>
      </main>
    </>
  );
}
