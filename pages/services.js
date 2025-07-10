import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Card from '../components/Card';

const services = [
  {
    title: 'Standard Clean',
    description:
      'A thorough, consistent clean for your home or business. Perfect for regular upkeep and peace of mind.',
    image: '/images/service-standard-clean.svg',
    altText: 'Professional cleaner wiping kitchen counter',
    ctaText: 'Learn More',
    ctaLink: '/services/standard-clean',
  },
  {
    title: 'Deep Clean',
    description:
      'An intensive, top-to-bottom clean that tackles built-up grime and hard-to-reach areas. Ideal for seasonal refreshes or special occasions.',
    image: '/images/service-deep-clean.svg',
    altText: 'Professional cleaner performing thorough deep cleaning',
    ctaText: 'Learn More',
    ctaLink: '/services/deep-clean',
  },
  {
    title: 'Move-In/Move-Out Clean',
    description:
      'Ensure your old or new space is spotless for a stress-free move. Includes detailed cleaning of all rooms, appliances, and fixtures.',
    image: '/images/service-move-clean.svg',
    altText: 'Empty, sparkling clean living room ready for move-in',
    ctaText: 'Learn More',
    ctaLink: '/services/move-in-move-out',
  },
  {
    title: 'Property Management & Office Spaces',
    description:
      'Professional cleaning services for property management companies and office spaces. Licensed and insured in Idaho, providing reliable commercial cleaning solutions.',
    image: '/images/service-eco-clean.svg',
    altText: 'Professional office and property management cleaning services',
    ctaText: 'Learn More',
    ctaLink: '/services/property-management',
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Cleaning Services | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Explore our residential cleaning services for homes in Lewiston, ID 83501 and Clarkston, WA 99403. Standard, deep, move-in/move-out, and property management cleaning options."
        />
        <meta property="og:title" content="Our Cleaning Services | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Discover our trusted, professional cleaning services including property management and office cleaning. Book your clean or request a quote today!"
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/services" />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com/services" />

        {/* Services page schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Our Cleaning Services',
              description:
                "Explore Gathered Roots Cleaning's full range of cleaning services: Standard, Deep, Move-In/Out, and Property Management cleaning.",
              url: 'https://www.gatheredrootscleaning.com/services',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Gathered Roots Cleaning',
                '@id': 'https://www.gatheredrootscleaning.com',
              },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.gatheredrootscleaning.com',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Services',
                    item: 'https://www.gatheredrootscleaning.com/services',
                  },
                ],
              },
            }),
          }}
        />
      </Head>
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-6">
                Our Cleaning Services
              </h1>
              <p className="text-lg text-text-dark max-w-3xl mx-auto">
                Gathered Roots Cleaning offers a range of professional cleaning services to fit your
                lifestyle and needs. Every service is delivered by our trusted, friendly team using
                safe, effective products.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col h-full">
                  <div className="mb-6">
                    <Image
                      src={service.image}
                      alt={service.altText}
                      width={80}
                      height={80}
                      className="w-20 h-20 mx-auto rounded-lg object-cover border-2 border-primary-accent-cta shadow-sm"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-card-text-secondary mb-4 flex-grow">{service.description}</p>
                  <div className="mt-auto">
                    <Link href={service.ctaLink} passHref legacyBehavior>
                      <Button className="inline-flex items-center w-full sm:w-auto justify-center">
                        {service.ctaText}
                        <ArrowRightIcon className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-background shadow-lg rounded-lg p-8 md:p-12">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-semibold text-primary-accent-cta mb-4">
                    Customized to Your Needs
                  </h2>
                  <p className="text-text-dark mb-4">
                    We understand that every home and business has unique cleaning requirements.
                    That&apos;s why we offer flexible scheduling options and customizable cleaning
                    plans to meet your specific needs.
                  </p>
                  <p className="text-text-dark mb-6">
                    Whether you need a one-time deep clean before a special event or regular
                    maintenance to keep your space pristine, our professional team is here to help.
                  </p>
                  <Link href="/quote" passHref legacyBehavior>
                    <Button className="text-lg w-full sm:w-auto">Get a Free Quote</Button>
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/clean-home.jpg"
                    alt="Beautifully cleaned home interior"
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                    width={600}
                    height={400}
                    quality={75}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-text-light mb-4">
            We proudly provide <strong>residential cleaning services</strong> for homes in{' '}
            <strong>Lewiston, Idaho (83501)</strong> and{' '}
            <strong>Clarkston, Washington (99403)</strong>.
          </p>
        </section>
      </main>
    </>
  );
}
