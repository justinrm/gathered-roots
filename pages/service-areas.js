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
      'Our cherished home base! Nestled between rolling hills and flowing rivers, Gathered Roots Cleaning transforms Lewiston homes, offices, and rental properties into serene sanctuaries. We weave through every corner with care, leaving behind spaces that inspire tranquility and renewal.',
    coordinates: [46.4165, -117.0177],
  },
  {
    city: 'Clarkston',
    state: 'Washington',
    description:
      'Just across the river from Lewiston, we provide the same exceptional cleaning services to the Clarkston community—whether residential homes, office spaces, or property management units—with on-time service and attention to detail.',
    coordinates: [46.4127, -117.0454],
  },
  {
    city: 'Moscow',
    state: 'Idaho',
    description:
      'Home to the University of Idaho, we bring professional cleaning services to Moscow residents, students, faculty, and local businesses. From cozy apartments near campus to family homes in established neighborhoods, we maintain the high standards this vibrant college town deserves.',
    coordinates: [46.7324, -117.0002],
  },
  {
    city: 'Pullman',
    state: 'Washington',
    description:
      'Serving the Washington State University community and Pullman residents with dependable cleaning services. Whether you need regular home maintenance cleaning, deep cleaning for rental properties, or office cleaning for local businesses, we deliver consistent quality with a personal touch.',
    coordinates: [46.7298, -117.1817],
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
        <title>Palouse Region Cleaning Services | Lewiston ID, Moscow ID & Pullman WA | Gathered Roots</title>
        <meta
          name="description"
          content="Professional residential, property management, and office cleaning services across the Palouse Region and Lewis-Clark Valley. Serving Lewiston ID 83501, Moscow ID 83843, Pullman WA 99163, Clarkston WA 99403, and surrounding North Central Idaho/Eastern Washington communities within a 25-mile radius."
        />
        <meta name="geo.region" content="US-ID" />
        <meta name="geo.placename" content="Lewiston, Idaho; Moscow, Idaho; Pullman, Washington" />
        <meta name="geo.position" content="46.4165;-117.0177" />
        <meta name="ICBM" content="46.4165, -117.0177" />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/service-areas" />
        <meta property="og:title" content="Palouse Region Cleaning Services | Lewiston ID, Moscow ID & Pullman WA" />
        <meta
          property="og:description"
          content="Professional residential, property management, and office cleaning services across the Palouse Region and Lewis-Clark Valley. Serving Lewiston ID, Moscow ID, Pullman WA, Clarkston WA, and surrounding North Central Idaho/Eastern Washington communities."
        />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com/service-areas" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locality" content="Lewiston" />
        <meta property="og:region" content="ID" />
        <meta property="og:country-name" content="USA" />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional house cleaning services in Lewis-Clark Valley"
        />

        {/* Enhanced Service Areas schema for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Palouse Region & Lewis-Clark Valley Cleaning Services Coverage Area',
              description:
                'Professional residential, property management, and office cleaning services across the Palouse Region and Lewis-Clark Valley including Lewiston ID 83501, Moscow ID 83843, Pullman WA 99163, Clarkston WA 99403, and surrounding North Central Idaho and Eastern Washington communities within a 25-mile radius',
              url: 'https://www.gatheredrootscleaning.com/service-areas',
              provider: {
                '@type': 'HomeAndConstructionBusiness',
                '@id': 'https://www.gatheredrootscleaning.com',
                name: 'Gathered Roots Cleaning',
                alternateName: 'Palouse Region & Lewis-Clark Valley Cleaning Services',
                description: 'Professional residential, property management, and office cleaning services across the Palouse Region and Lewis-Clark Valley',
                url: 'https://www.gatheredrootscleaning.com',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lewiston',
                  addressRegion: 'ID',
                  postalCode: '83501',
                  addressCountry: 'US',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 46.4165,
                  longitude: -117.0177,
                },
                serviceArea: {
                  '@type': 'GeoCircle',
                  geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: 46.4165,
                    longitude: -117.0177,
                  },
                  geoRadius: '25000',
                },
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
                  {
                    '@type': 'City',
                    name: 'Moscow',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Idaho',
                    },
                    postalCode: '83843',
                  },
                  {
                    '@type': 'City',
                    name: 'Pullman',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Washington',
                    },
                    postalCode: '99163',
                  },
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Palouse Region & Lewis-Clark Valley Cleaning Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Residential Cleaning Services',
                        description: 'Regular, deep, and one-time cleaning for homes and apartments in the Lewis-Clark Valley',
                        areaServed: {
                          '@type': 'GeoCircle',
                          geoMidpoint: {
                            '@type': 'GeoCoordinates',
                            latitude: 46.4165,
                            longitude: -117.0177,
                          },
                          geoRadius: '25000',
                        },
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Property Management Cleaning',
                        description: 'Cleaning services for rental properties, move-in/move-out cleaning, and property management companies',
                        areaServed: {
                          '@type': 'GeoCircle',
                          geoMidpoint: {
                            '@type': 'GeoCoordinates',
                            latitude: 46.4165,
                            longitude: -117.0177,
                          },
                          geoRadius: '25000',
                        },
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Office Cleaning Services',
                        description: 'Professional cleaning services for small offices, commercial spaces, and medical offices',
                        areaServed: {
                          '@type': 'GeoCircle',
                          geoMidpoint: {
                            '@type': 'GeoCoordinates',
                            latitude: 46.4165,
                            longitude: -117.0177,
                          },
                          geoRadius: '25000',
                        },
                      },
                    },
                  ],
                },
              },
            }),
          }}
        />
      </Head>
      <main className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-teal mb-4">
              Palouse Region & Lewis-Clark Valley Cleaning Services
            </h1>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Gathered Roots Cleaning is proud to serve residents and businesses throughout the{' '}
              <strong className="text-primary-accent-green">Palouse Region</strong>,{' '}
              <strong className="text-primary-accent-green">Lewis-Clark Valley</strong>,{' '}
              <strong className="text-primary-accent-green">North Central Idaho</strong>, and{' '}
              <strong className="text-primary-accent-green">Eastern Washington communities</strong>. We are
              dedicated to providing top-quality <strong>residential cleaning services</strong>, <strong>property management cleaning</strong>, and <strong>office space cleaning</strong> including <strong>Moscow ID 83843</strong>, <strong>Pullman WA 99163</strong>, <strong>Lewiston ID 83501</strong>, and <strong>Clarkston WA 99403</strong>.
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
                    Professional residential, property management, and office cleaning in {area.city}, {area.state}
                  </p>
                </Card>
              </div>
            ))}
          </section>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-brand-accent mb-4">
              Ready for Professional Cleaning Services?
            </h3>
            <p className="text-text-light mb-6 max-w-xl mx-auto">
              If you&apos;re in the Palouse Region, Lewis-Clark Valley, North Central Idaho, Eastern Washington, or anywhere within our service radius
              and looking for reliable, high-quality cleaning services for your home, office, or rental property, Gathered Roots Cleaning is
              here to help.
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

          </div>



          <div className="mt-6 text-center">
            <p className="text-text-light">
              We provide <strong>residential cleaning services</strong>, <strong>property management cleaning</strong>, and <strong>office space cleaning</strong> for homes, offices, and rental properties throughout the Palouse Region and Lewis-Clark Valley including Moscow, ID{' '}
              <strong>83843</strong>, Pullman, WA <strong>99163</strong>, Lewiston, ID{' '}
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
