import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Button from '../components/Button';
import Card from '../components/Card';
import Link from 'next/link';

// Use dynamic import for Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});
const Circle = dynamic(() => import('react-leaflet').then((mod) => mod.Circle), {
  ssr: false,
});
const CircleMarker = dynamic(() => import('react-leaflet').then((mod) => mod.CircleMarker), {
  ssr: false,
});

const serviceAreas = [
  {
    city: 'Lewiston',
    state: 'Idaho',
    description:
      'Our cherished home base! Nestled between rolling hills and flowing rivers, Gathered Roots Cleaning transforms Lewiston homes into serene sanctuaries. We weave through every corner with care, leaving behind spaces that inspire tranquility and renewal.',
    coordinates: [46.4165, -117.0177],
  },
  {
    city: 'Clarkston',
    state: 'Washington',
    description:
      'Just across the river from Lewiston, we provide the same exceptional cleaning services to the Clarkston community with on-time service and attention to detail.',
    coordinates: [46.4127, -117.0454],
  },
];

export default function ServiceAreas() {
  // React Leaflet requires useEffect for initialization in Next.js
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Service Areas | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Gathered Roots Cleaning serves Lewiston, ID and Clarkston, WA. Check if we clean in your area and schedule your service today."
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/service-areas" />
        <meta property="og:title" content="Service Areas | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Professional cleaning services in Lewiston, Idaho and Clarkston, Washington. Find out if we serve your area."
        />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com/service-areas" />
        
        {/* Service Areas schema for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Service Areas',
              description: 'Areas served by Gathered Roots Cleaning including Lewiston, ID and Clarkston, WA',
              url: 'https://www.gatheredrootscleaning.com/service-areas',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Gathered Roots Cleaning',
                '@id': 'https://www.gatheredrootscleaning.com',
                areaServed: [
                  {
                    '@type': 'City',
                    name: 'Lewiston',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho'
                    }
                  },
                  {
                    '@type': 'City',
                    name: 'Clarkston',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Washington'
                    }
                  },
                  {
                    '@type': 'City',
                    name: 'Asotin',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Washington'
                    }
                  },
                  {
                    '@type': 'City',
                    name: 'Lapwai',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho'
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <main className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-teal mb-4">
              Our Service Areas
            </h1>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Gathered Roots Cleaning is proud to serve residents and businesses in{' '}
              <strong className="text-primary-accent-green">Lewiston, Idaho</strong>,{' '}
              <strong className="text-primary-accent-green">Clarkston, Washington</strong>, and{' '}
              <strong className="text-primary-accent-green">Surrounding Areas</strong>. We are
              dedicated to providing top-quality cleaning services to our local communities.
            </p>
          </header>

          {/* Interactive Map */}
          <div className="mb-10 flex justify-center">
            <div className="w-full max-w-lg h-96 rounded-lg overflow-hidden border-2 border-borders">
              {isMounted && (
                <MapContainer
                  center={[46.4165, -117.0177]} // Lewiston, Idaho coordinates
                  zoom={10}
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Primary service area radius */}
                  <Circle
                    center={[46.4165, -117.0177]} // Lewiston coordinates
                    radius={25000} // 25km radius
                    pathOptions={{
                      fillColor: '#3D7B6B',
                      fillOpacity: 0.1,
                      color: '#3D7B6B',
                      weight: 1,
                    }}
                  >
                    <Popup>
                      Our primary service area
                      <br />
                      Approximately 25km radius from Lewiston
                    </Popup>
                  </Circle>

                  {/* Replace markers with small circle markers */}
                  {serviceAreas.map((area) => (
                    <CircleMarker
                      key={area.city}
                      center={area.coordinates}
                      radius={6}
                      pathOptions={{
                        fillColor: '#3D7B6B',
                        fillOpacity: 1,
                        color: '#006978',
                        weight: 1,
                      }}
                    >
                      <Popup>
                        <strong>
                          {area.city}, {area.state}
                        </strong>
                        <br />
                        {area.description}
                      </Popup>
                    </CircleMarker>
                  ))}
                </MapContainer>
              )}
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {serviceAreas.map((area) => (
              <div key={area.city} className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-primary-accent-teal mb-2 text-center">
                  {area.city}, {area.state}
                </h2>
                <Card className="text-center w-full">
                  <p className="text-card-text-secondary mb-2 text-base">{area.description}</p>
                  <p className="text-sm text-card-text-secondary">
                    Professional cleaning in {area.city}, {area.state}
                  </p>
                </Card>
              </div>
            ))}
          </section>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-brand-accent mb-4">
              Ready for a Cleaner Home?
            </h3>
            <p className="text-text-light mb-6 max-w-xl mx-auto">
              If you&apos;re in Lewiston, Clarkston, or the surrounding areas and looking for
              reliable, high-quality cleaning services, Gathered Roots Cleaning is here to help.
            </p>
            <Link href="/quote" passHref legacyBehavior>
              <Button className="text-lg px-8 py-3">Request a Quote</Button>
            </Link>
            <Link href="/booking" passHref legacyBehavior>
              <Button variant="secondary" className="text-lg px-8 py-3 ml-0 sm:ml-4 mt-4 sm:mt-0">
                Book Your Cleaning
              </Button>
            </Link>
          </div>

          <div className="mt-12 prose prose-lg max-w-none text-text-dark">
            <p>
              If you are unsure whether we service your specific location within these regions,
              please don&apos;t hesitate to reach out. We are continually evaluating opportunities
              to expand our reach to serve more clients.
            </p>
            <h2 className="text-2xl font-semibold text-primary-accent-teal mb-2">
              Contact Us for Confirmation
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
