import React from 'react';
import Head from 'next/head';

export default function AccessibilityStatement() {
  return (
    <>
      <Head>
        <title>Accessibility Statement | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Learn about Gathered Roots Cleaning's commitment to digital accessibility and the features we've implemented to ensure our website is usable by everyone."
        />
        <meta property="og:title" content="Accessibility Statement | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Our commitment to making our website accessible to all users, including those with disabilities."
        />
      </Head>
      <main className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold text-primary-accent-teal mb-6">
            Accessibility Statement
          </h1>
          <p className="text-text-light mb-6">
            Gathered Roots Cleaning is committed to ensuring that our website is accessible to
            everyone, including people with disabilities. We serve Lewiston, ID 83501 and Clarkston,
            WA 99403. We strive to provide an inclusive digital experience that allows all users to
            access our services easily and effectively.
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Our Accessibility Commitment
            </h2>
            <p className="text-text-dark mb-4">
              We believe that everyone should have equal access to information about our cleaning
              services. Our website is designed and developed following the{' '}
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                className="underline text-primary-accent-teal hover:text-secondary-accent-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </a>{' '}
              standards to ensure accessibility for users with a wide range of disabilities.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Accessibility Features
            </h2>
            <p className="text-text-dark mb-3">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 text-text-dark space-y-2">
              <li>
                <strong>Keyboard Navigation:</strong> All interactive elements can be accessed using
                only a keyboard, with clear focus indicators showing which element is currently
                selected.
              </li>
              <li>
                <strong>Screen Reader Support:</strong> We use semantic HTML and provide descriptive
                alt text for images, proper heading structures, and ARIA labels where appropriate.
              </li>
              <li>
                <strong>Color Contrast:</strong> All text meets or exceeds WCAG 2.1 AA color
                contrast requirements (4.5:1 for normal text, 3:1 for large text) to ensure
                readability.
              </li>
              <li>
                <strong>Responsive Design:</strong> Our mobile-first design ensures the website
                works effectively across all devices and screen sizes.
              </li>
              <li>
                <strong>Clear Navigation:</strong> Consistent navigation structure with descriptive
                link text and logical page organization.
              </li>
              <li>
                <strong>Form Accessibility:</strong> Contact and booking forms include clear labels,
                instructions, and error messages that are announced by screen readers.
              </li>
              <li>
                <strong>Text Scaling:</strong> The website maintains functionality when text is
                enlarged up to 200% without horizontal scrolling.
              </li>
              <li>
                <strong>Focus Management:</strong> Interactive elements have visible focus
                indicators and focus is managed appropriately throughout the user journey.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Assistive Technology Compatibility
            </h2>
            <p className="text-text-dark mb-3">
              Our website is designed to be compatible with assistive technologies, including:
            </p>
            <ul className="list-disc pl-6 text-text-dark space-y-1">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Voice recognition software</li>
              <li>Keyboard-only navigation</li>
              <li>Switch controls and other adaptive input devices</li>
              <li>Browser zoom and magnification tools</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Browser and Device Support
            </h2>
            <p className="text-text-dark mb-3">
              Our website is tested and optimized for accessibility on:
            </p>
            <ul className="list-disc pl-6 text-text-dark space-y-1">
              <li>
                <strong>Browsers:</strong> Chrome, Firefox, Safari, Edge (latest versions)
              </li>
              <li>
                <strong>Operating Systems:</strong> Windows, macOS, iOS, Android
              </li>
              <li>
                <strong>Mobile Devices:</strong> Smartphones and tablets with touch and voice
                interfaces
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Ongoing Improvements
            </h2>
            <p className="text-text-dark">
              Accessibility is an ongoing effort. We regularly review and test our website to
              identify and address accessibility barriers. Our development team stays current with
              accessibility best practices and emerging standards to ensure our website continues to
              meet the needs of all users.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Alternative Access Methods
            </h2>
            <p className="text-text-dark mb-3">
              If you encounter any accessibility barriers on our website, we offer alternative ways
              to access our services:
            </p>
            <ul className="list-disc pl-6 text-text-dark space-y-1">
              <li>
                Phone consultations and booking: <strong>(208) 717-1192</strong>
              </li>
              <li>
                Email inquiries: <strong>hello@gatheredrootscleaning.com</strong>
              </li>
              <li>In-person consultations upon request</li>
              <li>Large print materials available upon request</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Feedback and Support
            </h2>
            <p className="text-text-dark mb-4">
              We welcome feedback about the accessibility of our website. If you encounter any
              accessibility barriers, have suggestions for improvement, or need assistance accessing
              any content or features, please don&apos;t hesitate to contact us:
            </p>
            <div className="bg-card-background border border-card-border rounded-lg p-4">
              <p className="text-text-dark mb-2">
                <strong>Accessibility Coordinator:</strong>
              </p>
              <ul className="text-text-dark space-y-1">
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:accessibility@gatheredrootscleaning.com"
                    className="underline text-primary-accent-teal hover:text-secondary-accent-hover"
                  >
                    accessibility@gatheredrootscleaning.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> (208) 717-1192
                </li>
                <li>
                  <strong>Response Time:</strong> We aim to respond to accessibility inquiries
                  within 2 business days.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Third-Party Content
            </h2>
            <p className="text-text-dark">
              Some content on our website may be provided by third-party services (such as booking
              platforms or maps). While we work to ensure these services meet accessibility
              standards, we cannot guarantee their accessibility. If you experience difficulties
              with third-party content, please contact us for alternative access methods.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Technical Specifications
            </h2>
            <p className="text-text-dark mb-3">
              This website relies on the following technologies for accessibility:
            </p>
            <ul className="list-disc pl-6 text-text-dark space-y-1">
              <li>HTML5 semantic elements</li>
              <li>CSS3 for visual presentation</li>
              <li>
                JavaScript for enhanced functionality (website remains functional without
                JavaScript)
              </li>
              <li>ARIA (Accessible Rich Internet Applications) attributes</li>
              <li>SVG graphics with appropriate descriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-2">
              Compliance and Testing
            </h2>
            <p className="text-text-dark mb-4">
              This website has been tested for compliance with WCAG 2.1 Level AA guidelines using:
            </p>
            <ul className="list-disc pl-6 text-text-dark space-y-1 mb-4">
              <li>Automated accessibility testing tools</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Screen reader testing (NVDA, VoiceOver, JAWS)</li>
              <li>Color contrast verification</li>
              <li>Mobile accessibility testing</li>
            </ul>
            <p className="text-text-light">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US')}
            </p>
            <p className="text-text-light">
              <strong>Last Accessibility Review:</strong> {new Date().toLocaleDateString('en-US')}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
