import React from 'react';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Contact Gathered Roots Cleaning for reliable, professional cleaning services. Request a quote or schedule a service today."
        />
        <meta property="og:title" content="Contact Us | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Get in touch with Gathered Roots Cleaning - Lewiston and Clarkston's trusted cleaning service. Request a quote, ask questions, or schedule your service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gatheredrootscleaning.com/contact" />
      </Head>
      <main id="main-content" className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-accent-brand mb-4">Contact Us</h1>
            <p className="text-lg text-text-dark max-w-2xl mx-auto">
              Have questions about our services or ready to schedule a cleaning? Fill out the form
              below, and one of our team members will get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-background rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-primary-accent-brand mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-primary-accent-brand">Phone</h3>
                    <p className="text-text-light">
                      <a href="tel:+12082986965" className="hover:text-secondary-accent-hover">
                        (208) 298-6965
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
                    <p className="text-text-light">Monday - Friday: 8:00 AM - 6:00 PM</p>
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
                    <strong>Lewiston, Idaho</strong> - Our cherished home base!
                  </li>
                  <li>
                    <strong>Clarkston, Washington</strong> - Just across the river
                  </li>
                  <li>And surrounding areas within a 25km radius</li>
                </ul>
                <p className="mt-4 text-text-light">
                  <Link href="/service-areas" className="text-primary-accent-brand hover:text-secondary-accent-hover underline">
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
