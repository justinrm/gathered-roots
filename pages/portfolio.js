import React from 'react';
import Head from 'next/head';
import PortfolioCarousel from '../components/PortfolioCarousel';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Browse our portfolio gallery showcasing real cleaning results from Gathered Roots Cleaning. See the quality of our work throughout Lewiston, ID 83501, Clarkston, WA 99403, and surrounding areas."
        />
        <meta property="og:title" content="Portfolio | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Browse our portfolio gallery showcasing real cleaning results from Gathered Roots Cleaning. See the quality of our work throughout Lewiston, ID 83501, Clarkston, WA 99403, and surrounding areas."
        />
      </Head>
      <main id="main-content" className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-background p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-primary-accent-teal mb-6 text-center">
            Our Portfolio
          </h1>
          <p className="text-text-light mb-8 text-center max-w-3xl mx-auto">
            Browse our gallery of cleaning results to see the quality and attention to detail that
            Gathered Roots Cleaning brings to every home. Each image represents our commitment to
            excellence and the trust our clients place in us.
          </p>
          <PortfolioCarousel />
        </div>
      </main>
    </>
  );
}
