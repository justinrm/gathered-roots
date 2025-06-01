import React from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Learn how Gathered Roots Cleaning collects, uses, and protects your information. Your privacy matters to us."
        />
        <meta property="og:title" content="Privacy Policy | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="How Gathered Roots Cleaning collects, uses, and protects your information."
        />
      </Head>
      <main className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-primary-accent-teal mb-6">Privacy Policy</h1>
          <p className="text-text-light mb-6">
            This Privacy Policy explains how Gathered Roots Cleaning (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your information when
            you use our website and services. We are committed to safeguarding your privacy and
            ensuring your information is handled responsibly.
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 text-text-dark">
              <li>
                <strong>Contact/Booking Information:</strong> Name, email, phone number, service
                selection, and message submitted via our contact or booking forms.
              </li>
              <li>
                <strong>Usage Data:</strong> We use Google Analytics to collect anonymous data about
                how visitors use our website (e.g., pages visited, region, device type). This data
                does not identify you personally.
              </li>
              <li>
                We do not collect payment information directly; payments are processed securely by
                third-party providers (e.g., Stripe).
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-text-dark">
              <li>To respond to your inquiries and provide requested services.</li>
              <li>To process bookings and payments (via secure third-party platforms).</li>
              <li>To improve our website and services through anonymous analytics.</li>
              <li>
                For regional marketing analysis (no personally identifiable information is used for
                marketing without your consent).
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              3. Data Sharing
            </h2>
            <ul className="list-disc pl-6 text-text-dark">
              <li>
                We do <strong>not</strong> sell or rent your personal information.
              </li>
              <li>
                We only share your information with trusted third parties as necessary to provide
                our services (e.g., analytics providers, payment processors, booking platforms).
              </li>
              <li>
                All third parties are required to protect your information and use it only for the
                purposes we specify.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              4. Data Retention
            </h2>
            <ul className="list-disc pl-6 text-text-dark">
              <li>
                Contact and booking information is stored in our secure database for up to 90 days,
                after which it is automatically deleted unless needed for ongoing bookings or
                invoicing.
              </li>
              <li>
                Analytics data is retained according to Google Analytics policies and is not
                personally identifiable.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              5. Your Rights & Choices
            </h2>
            <ul className="list-disc pl-6 text-text-dark">
              <li>
                You may request access to, correction of, or deletion of your personal information
                at any time by contacting us at{' '}
                <a
                  href="mailto:hello@gatheredrootscleaning.com"
                  className="underline text-primary-accent-teal hover:text-secondary-accent-hover"
                >
                  hello@gatheredrootscleaning.com
                </a>
                .
              </li>
              <li>
                You may opt out of analytics tracking by adjusting your browser settings or using
                available opt-out tools.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">6. Security</h2>
            <ul className="list-disc pl-6 text-text-dark">
              <li>We use SSL encryption to protect data transmitted through our website.</li>
              <li>
                Your information is stored in a secure PostgreSQL database with access limited to
                authorized personnel only.
              </li>
              <li>
                <strong>Enhanced Protection:</strong> Sensitive contact details you submit (such as
                your name, email, and phone number) are{' '}
                <span className="text-primary-accent-teal font-medium">
                  encrypted using industry-standard AES-256 encryption
                </span>{' '}
                before being stored in our database. This means your personal information is
                protected both in transit and at rest, and cannot be read by anyone without special
                authorization—even in the unlikely event of a data breach.
              </li>
              <li>We regularly review our data handling and security practices.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-text-dark">
              Our services are intended for individuals 18 years of age or older. We do not
              knowingly collect personal information from children under 18. If you believe a child
              has provided us with personal information, please contact us and we will promptly
              delete it.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              8. Changes to This Policy
            </h2>
            <p className="text-text-dark">
              We may update this Privacy Policy from time to time. The latest version will always be
              posted on this page with the effective date below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">9. Contact Us</h2>
            <p className="text-text-dark">
              If you have any questions or concerns about this Privacy Policy or your data, please
              contact us at{' '}
              <a
                href="mailto:hello@gatheredrootscleaning.com"
                className="underline text-primary-accent-teal hover:text-secondary-accent-hover"
              >
                hello@gatheredrootscleaning.com
              </a>
              .
            </p>
            <p className="text-text-light mt-2">
              Effective Date: {new Date().toLocaleDateString('en-US')}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
