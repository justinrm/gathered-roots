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
          content="See real before and after results from Gathered Roots Cleaning. Our portfolio showcases the difference we make in homes throughout Lewiston, ID and Clarkston, WA."
        />
        <meta property="og:title" content="Portfolio | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="See real before and after results from Gathered Roots Cleaning. Our portfolio showcases the difference we make in homes throughout Lewiston, ID and Clarkston, WA."
        />
      </Head>
      <main id="main-content" className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-background p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-primary-accent-teal mb-6">Our Portfolio</h1>
          <p className="text-text-light mb-8">
            Explore our before and after gallery to see the difference Gathered Roots Cleaning brings to every home. We take pride in our work and love helping our clients rediscover the beauty of their spaces.
          </p>
          <PortfolioCarousel />
        </div>
      </main>
    </>
  );
} 