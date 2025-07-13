import React from 'react';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/Button';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Contact Gathered Roots Cleaning for reliable, professional residential cleaning services in Lewiston, ID 83501, Clarkston, WA 99403, and surrounding areas. Request a quote or schedule a service today."
        />
        <meta property="og:title" content="Contact Us | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Get in touch with Gathered Roots Cleaning - Lewiston, ID 83501, Clarkston, WA 99403, and surrounding areas' trusted cleaning service. Request a quote, ask questions, or schedule your service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatheredrootscleaning.com/contact" />
        <meta
          property="og:image"
          content="https://www.gatheredrootscleaning.com/images/logo-complete.svg"
        />
        <meta
          property="og:image:alt"
          content="Gathered Roots Cleaning - Professional house cleaning services in Lewiston ID and Clarkston WA"
        />
      </Head>
      <main id="main-content" className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-accent-brand mb-4">Contact Us</h1>
            <p className="text-lg text-text-dark max-w-2xl mx-auto mb-6">
              Have questions about our services or need general information? Fill out the form
              below, and one of our team members will get back to you as soon as possible.
            </p>
            
            {/* Quote Request CTA */}
            <div className="bg-primary-accent-teal/10 border border-primary-accent-teal/20 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <h2 className="text-xl font-semibold text-primary-accent-teal mb-3">
                Looking for a Cleaning Quote?
              </h2>
              <p className="text-text-dark mb-4">
                For personalized cleaning quotes and service requests, please use our dedicated quote form for the fastest response.
              </p>
              <Link href="/quote" legacyBehavior>
                <Button className="inline-flex items-center">
                  Get Your Quote
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-primary-accent-brand mb-2">General Inquiries</h2>
              <p className="text-text-light">Use this form for questions, feedback, or other non-quote related matters.</p>
            </div>
            <ContactForm />
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-card-background rounded-xl shadow-lg p-8 border border-card-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-primary-accent-brand mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-primary-accent-brand">Phone</h3>
                    <p className="text-text-light">
                      <a href="tel:+12087171192" className="hover:text-secondary-accent-hover">
                        (208) 717-1192
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-accent-brand">Email</h3>
                    <p className="text-text-light">
                      <a
                        href="mailto:hello@gatheredrootscleaning.com"
                        className="hover:text-secondary-accent-hover"
                      >
                        hello@gatheredrootscleaning.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-accent-brand">Hours of Operation</h3>
                    <p className="text-text-light">Monday - Friday: 9:30 AM - 5:00 PM</p>
                    <p className="text-text-light">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-text-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary-accent-brand mb-4">
                  Service Areas
                </h2>
                <p className="text-text-light mb-4">We provide cleaning services throughout:</p>
                <ul className="list-disc pl-5 text-text-light space-y-1">
                  <li>
                    <strong>Lewiston, ID 83501</strong> - Our cherished home base!
                  </li>
                  <li>
                    <strong>Clarkston, WA 99403</strong> - Just across the river
                  </li>
                  <li>And surrounding areas within a 25km radius</li>
                </ul>
                <p className="mt-4 text-text-light">
                  We provide <strong>residential cleaning services</strong> for all these areas.
                </p>
                <p className="mt-4 text-text-light">
                  <Link
                    href="/service-areas"
                    className="text-primary-accent-brand hover:text-secondary-accent-hover underline"
                  >
                    View our complete service areas
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
