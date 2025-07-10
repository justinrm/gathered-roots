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
          content="Gathered Roots Cleaning provides residential and property management cleaning services in Lewiston, ID 83501, Clarkston, WA 99403, Lapwai, ID 83540, Winchester, ID 83555, Culdesac, ID 83524, and Juliaetta, ID 83535. Check if we clean in your area and schedule your service today."
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/service-areas" />
        <meta property="og:title" content="Service Areas | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Professional residential and property management cleaning services in Lewiston, Idaho, Clarkston, Washington, and surrounding areas including Lapwai, Winchester, Culdesac, and Juliaetta."
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
              description:
                'Areas served by Gathered Roots Cleaning including Lewiston, ID 83501, Clarkston, WA 99403, Lapwai, ID 83540, Winchester, ID 83555, Culdesac, ID 83524, and Juliaetta, ID 83535 for residential and property management cleaning services',
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
                      name: 'Idaho',
                    },
                    postalCode: '83501',
                  },
                  {
                    '@type': 'City',
                    name: 'Clarkston',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Washington',
                    },
                    postalCode: '99403',
                  },
                  {
                    '@type': 'City',
                    name: 'Asotin',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Washington',
                    },
                  },
                  {
                    '@type': 'City',
                    name: 'Lapwai',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho',
                    },
                    postalCode: '83540',
                  },
                  {
                    '@type': 'City',
                    name: 'Winchester',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho',
                    },
                    postalCode: '83555',
                  },
                  {
                    '@type': 'City',
                    name: 'Culdesac',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho',
                    },
                    postalCode: '83524',
                  },
                  {
                    '@type': 'City',
                    name: 'Juliaetta',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho',
                    },
                    postalCode: '83535',
                  },
                ],
              },
            }),
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
              <strong className="text-primary-accent-green">Lewiston, Idaho (83501)</strong>,{' '}
              <strong className="text-primary-accent-green">Clarkston, Washington (99403)</strong>,
              and <strong className="text-primary-accent-green">Surrounding Areas</strong>. We are
              dedicated to providing top-quality <strong>residential cleaning services</strong> to
              our local communities.
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
              <div key={area.city} className="flex flex-col items-center h-full">
                <h2 className="text-2xl font-semibold text-primary-accent-teal mb-2 text-center">
                  {area.city}, {area.state}
                </h2>
                <Card className="text-center w-full flex-1 flex flex-col justify-between min-h-[200px]">
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
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/quote" passHref legacyBehavior>
                <Button className="text-lg px-8 py-3 w-full sm:w-auto">Request a Quote</Button>
              </Link>
              <Link href="/booking" passHref legacyBehavior>
                <Button variant="secondary" className="text-lg px-8 py-3 w-full sm:w-auto">
                  Book Your Cleaning
                </Button>
              </Link>
            </div>
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

          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-primary-accent-green mb-2">
              Service Area Zip Codes
            </h3>
            <ul className="inline-block text-text-dark">
              <li>
                Lewiston, ID: <strong>83501</strong>
              </li>
              <li>
                Clarkston, WA: <strong>99403</strong>
              </li>
              <li>
                Lapwai, ID: <strong>83540</strong>
              </li>
              <li>
                Winchester, ID: <strong>83555</strong>
              </li>
              <li>
                Culdesac, ID: <strong>83524</strong>
              </li>
              <li>
                Juliaetta, ID: <strong>83535</strong>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-text-light">
              We provide <strong>residential cleaning services</strong> and{' '}
              <strong>property management cleaning</strong> for homes and properties in Lewiston, ID{' '}
              <strong>83501</strong>, Clarkston, WA <strong>99403</strong>, Lapwai, ID{' '}
              <strong>83540</strong>, Winchester, ID <strong>83555</strong>, Culdesac, ID{' '}
              <strong>83524</strong>, and Juliaetta, ID <strong>83535</strong>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
