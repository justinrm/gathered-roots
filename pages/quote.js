import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card';

export default function Quote() {
  return (
    <>
      <Head>
        <title>Request a Cleaning Quote | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Request a personalized quote for our professional cleaning services. Tell us about your space and needs, and we'll provide a custom cleaning plan."
        />
        <meta property="og:title" content="Request a Cleaning Quote | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Get a personalized quote for your cleaning needs. Quick, easy, and no obligation."
        />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional house cleaning services in Lewiston ID and Clarkston WA"
        />
      </Head>
      <main className="bg-background min-h-screen">
        <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
              Request a Cleaning Quote
            </h1>
            <p className="text-lg text-text-dark max-w-3xl mx-auto">
              Tell us a bit about your space and cleaning needs, and we&apos;ll provide a
              personalized quote. Our team is ready to create a custom cleaning plan just for you.
              <br /><br />
              <strong>Property Management Companies:</strong> For consultation on ongoing cleaning services and custom property management solutions, please use our{' '}
              <Link 
                href="/contact" 
                className="text-primary-accent-teal font-medium hover:text-secondary-accent-hover transition-colors duration-300 underline"
              >
                contact form
              </Link>
              {' '}to discuss your specific needs.
            </p>
          </div>
        </section>

        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            {/* Terms of Service Notice */}
            <Card className="mb-6 bg-green-100 border border-green-300">
              <p className="text-text-dark text-center">
                By submitting this form, you agree to our{' '}
                <Link 
                  href="/terms-of-service" 
                  className="text-primary-accent-teal font-medium hover:text-secondary-accent-hover transition-colors duration-300 underline"
                >
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link 
                  href="/privacy-policy" 
                  className="text-primary-accent-teal font-medium hover:text-secondary-accent-hover transition-colors duration-300 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </Card>

            <div className="bg-card-background shadow-lg rounded-lg p-8">
              {/* ZenMaid Quote Form */}
              <div className="w-full">
                <iframe 
                  sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation" 
                  height="2200" 
                  src="https://app.zenmaid.com/booking-forms/I1S2F/book" 
                  frameBorder="0" 
                  scrolling="no" 
                  className="w-full border-0 rounded-lg"
                  title="Request a Cleaning Quote"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
