import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

export default function Quote() {
  return (
    <>
      <Head>
        <title>Request a Cleaning Quote | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Request a personalized quote for our professional cleaning services. Tell us about your space and needs, and we&apos;ll provide a custom cleaning plan."
        />
        <meta property="og:title" content="Request a Cleaning Quote | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Get a personalized quote for your cleaning needs. Quick, easy, and no obligation."
        />
      </Head>
      <main className="bg-background min-h-screen">
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
              Request a Cleaning Quote
            </h1>
            <p className="text-lg text-text-dark max-w-3xl mx-auto">
              Tell us a bit about your space and cleaning needs, and we&apos;ll provide a
              personalized quote. Our team is ready to create a custom cleaning plan just for you.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-background shadow-lg rounded-lg p-8">
              <ContactForm source="Quote Page" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
