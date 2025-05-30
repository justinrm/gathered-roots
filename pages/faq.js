import React from 'react';
import Button from '../components/Button';
import Link from 'next/link';
import Head from 'next/head';

const faqs = [
  {
    question: 'What cleaning products do you use?',
    answer:
      'We use eco-friendly cleaning products that are safe for your family, pets, and the environment. If you have specific product preferences or sensitivities, please let us know.',
  },
  {
    question: 'How do I book a cleaning?',
    answer:
      'You can book online through our website, call us directly, or send us an email. Our team will confirm your appointment and answer any questions you may have.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      "We kindly ask for at least 24 hours' notice for cancellations or rescheduling. Late cancellations may be subject to a fee.",
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer:
      'No, you do not need to be home as long as we have access to your space. Many clients provide a key or entry code. Your security and privacy are always respected.',
  },
  {
    question: 'Do you bring your own supplies and equipment?',
    answer:
      'Yes, our team brings all necessary cleaning supplies and equipment. If you have a preferred product or tool, we are happy to use it—just let us know.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Lewiston (ID), Clarkston (WA), and surrounding areas. See our Service Areas page for details.',
  },
  {
    question: 'How do I pay for my cleaning?',
    answer:
      'We accept cash, check, and most major credit/debit cards. Payment is due at the time of service unless otherwise arranged.',
  },
  {
    question: 'Can I request a specific cleaner?',
    answer:
      'We do our best to accommodate requests for specific team members, but cannot always guarantee availability.',
  },
  {
    question: 'What if I am not satisfied with the cleaning?',
    answer:
      'Your satisfaction is our priority. If you are not happy with any aspect of your cleaning, please contact us within 24 hours and we will make it right.',
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Find answers to common questions about Gathered Roots Cleaning services."
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/faq" />
        <meta property="og:title" content="FAQ - Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Find answers to common questions about Gathered Roots Cleaning services in Lewiston, ID and Clarkston, WA."
        />
        
        {/* FAQ Schema for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer
                }
              }))
            })
          }}
        />
      </Head>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold text-primary-accent-cta mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-text-light mb-8">
            Find answers to common questions below. If you don&apos;t see your question, please{' '}
            <Link href="/contact" className="text-primary-accent-cta underline hover:text-secondary-accent-hover">
              contact us
            </Link>{' '}
            for more information.
          </p>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-borders pb-6">
                <h2 className="text-xl font-semibold text-brand-accent mb-2">{faq.question}</h2>
                <p className="text-text-light text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-brand-accent mb-4">Still Have Questions?</h2>
            <p className="text-text-light mb-6">
              If you can&apos;t find the answer you&apos;re looking for, please don&apos;t hesitate
              to contact us. We&apos;re happy to help!
            </p>
            <Link href="/quote" passHref legacyBehavior>
              <Button className="text-lg px-8 py-3">Request a Quote</Button>
            </Link>
            <a href="https://gathered-roots-cleaning.square.site/" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="text-lg px-8 py-3 ml-0 sm:ml-4 mt-4 sm:mt-0">
                Book Your Cleaning
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
