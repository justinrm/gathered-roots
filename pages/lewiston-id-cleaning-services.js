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
  'Bryden Canyon'
];

const localLandmarks = [
  'Lewis-Clark State College',
  'Nez Perce County Historical Society Museum',
  'Hells Gate State Park',
  'Lewiston Civic Theatre',
  'Swallows Park',
  'Locomotive Park'
];

export default function LewistonCleaningServices() {
  return (
    <>
      <Head>
        <title>Professional House Cleaning Services in Lewiston, ID | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Top-rated house cleaning services in Lewiston, Idaho. Serving Normal Hill, Orchards, Downtown, and all Lewiston neighborhoods. Veteran-owned, fully insured. Free quotes!"
        />
        <meta
          name="keywords"
          content="house cleaning Lewiston ID, maid service Lewiston Idaho, residential cleaning Lewiston, cleaning service near me, Lewiston house cleaners, Normal Hill cleaning service"
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/lewiston-id-cleaning-services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional House Cleaning Services in Lewiston, ID | Gathered Roots Cleaning" />
        <meta property="og:description" content="Trusted house cleaning services in Lewiston, Idaho. Serving all neighborhoods with eco-friendly, thorough cleaning. Book your free quote today!" />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com/lewiston-id-cleaning-services" />
        <meta property="og:image" content="https://www.gatheredrootscleaning.com/images/lewiston-cleaning-service.jpg" />
        
        {/* Local Business Schema for Lewiston */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'House Cleaning Services in Lewiston, ID',
              description: 'Professional house cleaning services in Lewiston, Idaho and surrounding neighborhoods',
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
                    name: 'Idaho'
                  }
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lewiston',
                  addressRegion: 'ID',
                  addressCountry: 'US'
                }
              },
              mainEntity: {
                '@type': 'Service',
                name: 'House Cleaning Services',
                description: 'Professional residential cleaning services in Lewiston, Idaho',
                areaServed: {
                  '@type': 'City',
                  name: 'Lewiston',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Idaho'
                  }
                }
              }
            })
          }}
        />
      </Head>

      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary-accent-teal text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Professional House Cleaning Services in <span className="text-secondary-accent-hover">Lewiston, ID</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Trusted by families across Normal Hill, Orchards, Downtown Lewiston, and surrounding neighborhoods. 
              Veteran-owned, eco-friendly cleaning with a personal touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button variant="secondary" size="large">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/booking">
                <Button variant="outline" size="large" className="text-white border-white hover:bg-white hover:text-primary-accent-teal">
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
              Serving All Lewiston, ID Neighborhoods
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
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">Local Expertise</h3>
                <p className="text-text-dark">
                  We know Lewiston homes and understand the unique cleaning needs of Idaho families.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🇺🇸</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">Veteran Owned</h3>
                <p className="text-text-dark">
                  Reliable, disciplined service with military precision and attention to detail.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-accent-green mb-3">Eco-Friendly</h3>
                <p className="text-text-dark">
                  Safe for your family, pets, and the beautiful Lewiston environment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Lewiston */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal text-center mb-12">
              Our Cleaning Services in Lewiston, ID
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">Standard Cleaning</h3>
                <p className="text-text-dark text-sm mb-4">
                  Regular maintenance cleaning for busy Lewiston families
                </p>
                <Link href="/services/standard-clean">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">Deep Cleaning</h3>
                <p className="text-text-dark text-sm mb-4">
                  Thorough top-to-bottom cleaning for Lewiston homes
                </p>
                <Link href="/services/deep-clean">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">Move-In/Out</h3>
                <p className="text-text-dark text-sm mb-4">
                  Perfect for Lewiston relocations and transitions
                </p>
                <Link href="/services/move-in-move-out">
                  <Button variant="outline" size="small">Learn More</Button>
                </Link>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-accent-green mb-3">Eco-Friendly</h3>
                <p className="text-text-dark text-sm mb-4">
                  Green cleaning for environmentally conscious Lewiston residents
                </p>
                <Link href="/services/eco-friendly">
                  <Button variant="outline" size="small">Learn More</Button>
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
              Join hundreds of satisfied customers across Lewiston, ID. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button variant="secondary" size="large">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="tel:+12087171192">
                <Button variant="outline" size="large" className="text-white border-white hover:bg-white hover:text-primary-accent-teal">
                  Call (208) 717-1192
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 