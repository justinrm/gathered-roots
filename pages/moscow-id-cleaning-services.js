import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Button';
import Card from '../components/Card';

const moscowAreas = [
  'University of Idaho Campus',
  'Downtown Moscow',
  'East Moscow',
  'West Moscow', 
  'College Hill',
  'Moscow Mountain',
  'Palouse Empire Mall Area',
  'Idaho State Highway 8',
];

const localLandmarks = [
  'University of Idaho',
  'Palouse Empire Mall',
  'Moscow Farmers Market',
  'Appaloosa Museum',
  'Washington State Line',
  'Moscow Mountain',
];

export default function MoscowCleaningServices() {
  return (
    <>
      <Head>
        <title>
          Professional House Cleaning Services in Moscow, ID | University of Idaho Area | Gathered Roots
        </title>
        <meta
          name="description"
          content="Top-rated residential cleaning services in Moscow, Idaho (83843). Serving University of Idaho students, faculty, and families. Student housing, apartments, and homes. Veteran-owned, fully insured. Free quotes!"
        />
        <meta
          name="keywords"
          content="residential cleaning Moscow ID 83843, house cleaning Moscow ID, maid service Moscow Idaho, University of Idaho cleaning, student housing cleaning, apartment cleaning Moscow, cleaning service near me"
        />
        <link
          rel="canonical"
          href="https://www.gatheredrootscleaning.com/moscow-id-cleaning-services"
        />

        {/* Geographic Microdata */}
        <meta name="geo.region" content="US-ID" />
        <meta name="geo.placename" content="Moscow, Idaho" />
        <meta name="geo.position" content="46.7324;-117.0002" />
        <meta name="ICBM" content="46.7324, -117.0002" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Professional House Cleaning Services in Moscow, ID | University of Idaho Area"
        />
        <meta
          property="og:description"
          content="Trusted house cleaning services in Moscow, Idaho. Serving University of Idaho community with thorough, professional cleaning. Student housing, apartments, and homes. Licensed and insured."
        />
        <meta
          property="og:url"
          content="https://www.gatheredrootscleaning.com/moscow-id-cleaning-services"
        />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional house cleaning services in Moscow ID"
        />

        {/* Local Business Schema for Moscow */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Residential Cleaning Services in Moscow, ID 83843',
              description:
                'Professional residential cleaning services in Moscow, Idaho (83843) serving University of Idaho community',
              url: 'https://www.gatheredrootscleaning.com/moscow-id-cleaning-services',
              provider: {
                '@type': 'LocalBusiness',
                '@id': 'https://www.gatheredrootscleaning.com',
                name: 'Gathered Roots Cleaning',
                areaServed: {
                  '@type': 'City',
                  name: 'Moscow',
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
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 46.7324,
                  longitude: -117.0002,
                },
              },
              mainEntity: {
                '@type': 'Service',
                name: 'Residential Cleaning Services',
                description:
                  'Professional residential cleaning services in Moscow, Idaho (83843) serving University of Idaho students, faculty, and local residents',
                areaServed: {
                  '@type': 'City',
                  name: 'Moscow',
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
              <span className="text-secondary-accent-hover">Moscow, ID</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Trusted by University of Idaho students, faculty, and families throughout Moscow and surrounding areas. 
              Veteran-owned, licensed and insured with a personal touch.
              <br />
              <span className="block mt-2">
                Serving Moscow, ID <strong>83843</strong> and the broader Palouse Region including Pullman, WA, Lewiston, ID, and Clarkston, WA. See our{' '}
                <Link href="/service-areas" className="underline text-white">
                  complete service area map
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
              Serving All Moscow, ID 83843 Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-primary-accent-green mb-4">
                  Areas We Serve in Moscow
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-text-dark">
                  {moscowAreas.map((area, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-accent-teal rounded-full mr-2"></span>
                      {area}
                    </li>
                  ))}
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-accent-teal rounded-full mr-2"></span>Zip
                    Code: 83843
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

        {/* Why Choose Us for Moscow */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal text-center mb-12">
              Why Moscow & University of Idaho Community Chooses Gathered Roots
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">
                  University Expertise
                </h3>
                <p className="text-text-dark">
                  We understand student housing, faculty homes, and university community cleaning needs.
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
                  Fully licensed and insured in Idaho, serving residential and commercial properties.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Moscow */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal text-center mb-12">
              Our Residential Cleaning Services in Moscow, ID 83843
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">
                  Standard Cleaning
                </h3>
                <p className="text-text-dark text-sm mb-4">
                  Regular maintenance cleaning for busy Moscow families and students
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
                  Thorough top-to-bottom cleaning for Moscow homes and apartments
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
                  Perfect for student housing transitions and family relocations
                </p>
                <Link href="/services/move-in-move-out" legacyBehavior>
                  <Button variant="outline" size="small">
                    Learn More
                  </Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">
                  Student Housing
                </h3>
                <p className="text-text-dark text-sm mb-4">
                  Specialized cleaning for apartments, dorms, and shared student housing
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
              Ready for a Spotless Home in Moscow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join University of Idaho students, faculty, and residents across Moscow, ID 83843. Get your free quote
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
              <Link href="/pullman-wa-cleaning-services" legacyBehavior>
                <Button
                  variant="outline"
                  size="large"
                  className="text-white border-white hover:bg-white hover:text-primary-accent-teal"
                >
                  Pullman, WA Services
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
            <strong>Moscow, ID 83843</strong> and serve the broader Palouse Region including <strong>Pullman, WA 99163</strong>, <strong>Lewiston, ID 83501</strong>, <strong>Clarkston, WA 99403</strong>, and
            surrounding areas.
          </p>
        </section>
      </main>
    </>
  );
} 