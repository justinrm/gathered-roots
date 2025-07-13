import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Terms and conditions for Gathered Roots Cleaning services. Read our policies on payment, cancellation, and service agreements."
        />
        <meta property="og:title" content="Terms of Service | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Terms and conditions for Gathered Roots Cleaning services including payment policies and service agreements."
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
      <main className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-primary-accent-teal mb-4 font-headings">
              Terms of Service
            </h1>
            <h2 className="text-2xl font-medium text-primary-accent-green mb-2 font-headings">
              Gathered Roots Cleaning
            </h2>
            <p className="text-text-light text-lg">Effective Date: 7/01/2025</p>
            <p className="text-text-dark mt-4 max-w-2xl mx-auto">
              By scheduling and receiving services from Gathered Roots Cleaning, you agree to the
              following terms and conditions:
            </p>
          </div>

          {/* Terms Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Scope of Services */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                1. Scope of Services
              </h3>
              <p className="text-text-dark mb-4">
                We will provide residential, property management, and office cleaning services as
                discussed and agreed upon for homes, offices, and commercial properties in Lewiston,
                ID 83501, Clarkston, WA 99403, and surrounding areas.
              </p>
              <p className="text-text-dark mb-4">
                <strong>Standard cleaning tasks may include:</strong>
              </p>
              <ul className="list-disc list-inside text-text-dark space-y-1 mb-4 ml-4">
                <li>Dusting furniture, surfaces, and light fixtures (excluding baseboards)</li>
                <li>Vacuuming carpets, rugs, and upholstery</li>
                <li>Sweeping and mopping hard floors</li>
                <li>Bathroom cleaning (toilets, sinks, tubs, showers, mirrors, floors)</li>
                <li>Kitchen cleaning (countertops, sinks, stovetops, exteriors of appliances)</li>
                <li>Trash removal and liner replacement</li>
                <li>Window sill cleaning and interior window cleaning</li>
                <li>General surface sanitization and tidying</li>
                <li>
                  Office-specific tasks (desk cleaning, conference room maintenance, break room
                  cleaning)
                </li>
              </ul>
              <p className="text-text-dark mb-4">
                <strong>Baseboards</strong> are typically cleaned only during deep cleans, move-in/move-out services, or upon prior agreement. They are not included in standard cleaning services.
              </p>
              <p className="text-text-dark mb-4">
                <strong>Floor polishing/refinishing</strong> is outside our scope of services and would require a specialized contractor.
              </p>
              <p className="text-text-dark">
                <strong>Specialty services</strong> (e.g., deep cleans, move-out services) must be
                scheduled in advance and may incur additional charges.
              </p>
            </Card>

            {/* Supplies and Equipment */}
            <Card>
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                2. Supplies and Equipment
              </h3>
              <p className="text-text-dark mb-4">
                All necessary cleaning supplies and equipment will be provided by Gathered Roots
                Cleaning, unless otherwise agreed upon.
              </p>
              <p className="text-text-dark">
                If the client prefers specific products, we can procure them if reasonable in cost,
                or they must be supplied by the client and discussed in advance.
              </p>
            </Card>

            {/* Access to Property */}
            <Card>
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                3. Access to Property
              </h3>
              <p className="text-text-dark mb-4">
                The client must ensure the cleaner has access to the property at the scheduled
                service time.
              </p>
              <p className="text-text-dark">
                If access is not available and service cannot be performed, a cancellation fee may
                apply.
              </p>
            </Card>

            {/* Payment Terms */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                4. Payment Terms
              </h3>
              <div className="space-y-4 text-text-dark">
                <p>
                  Payment is due upon completion of service unless otherwise agreed upon in writing.
                </p>

                <div className="bg-card-accent-light p-4 rounded-lg">
                  <p className="font-medium text-primary-accent-teal mb-2">
                    Deep Cleans & Move-Out Services:
                  </p>
                  <p>
                    A non-refundable deposit of 25% is required at the time of booking to secure
                    your appointment. The remaining balance is due upon completion.
                  </p>
                </div>

                <p>
                  Invoices will be sent via Square and can be paid online or with other approved
                  methods.
                </p>

                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="font-medium text-red-800 mb-2">Late Payment Fees:</p>
                  <ul className="list-disc list-inside text-red-700 space-y-1">
                    <li>If payment is not received within 5 days, a $25 late fee will apply</li>
                    <li>An additional $5 per day will accrue after 10 days past due</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Cancellations & Rescheduling */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                5. Cancellations &amp; Rescheduling
              </h3>
              <div className="space-y-4 text-text-dark">
                <p>
                  If you need to cancel or reschedule your appointment, please provide at least 24
                  hours&apos; notice.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center">
                    <p className="font-medium text-yellow-800 mb-2">&lt; 24 Hours Notice</p>
                    <p className="text-2xl font-bold text-yellow-700">$30</p>
                    <p className="text-sm text-yellow-600">Cancellation Fee</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
                    <p className="font-medium text-red-800 mb-2">Same Day (&lt; 6 Hours)</p>
                    <p className="text-2xl font-bold text-red-700">$50</p>
                    <p className="text-sm text-red-600">Cancellation Fee</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-center">
                    <p className="font-medium text-gray-800 mb-2">No-Shows</p>
                    <p className="text-2xl font-bold text-gray-700">$50</p>
                    <p className="text-sm text-gray-600">Cancellation Fee</p>
                  </div>
                </div>

                <p className="text-center text-text-light italic">
                  More than 2 short-notice cancellations may result in termination of ongoing
                  service.
                </p>
              </div>
            </Card>

            {/* Client Responsibilities */}
            <Card>
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                6. Client Responsibilities
              </h3>
              <p className="text-text-dark mb-4">
                Clients are expected to pick up personal items and valuables prior to service.
              </p>
              <p className="text-text-dark mb-4">
                Please secure pets or inform us of them. We love the furry friends, and
                introductions go a long way!
              </p>
              <p className="text-text-dark mb-4">
                Please notify the cleaner of any safety hazards, broken fixtures, or special
                instructions.
              </p>
              <p className="text-text-dark">
                Ensure access to all cleaning areas and that the home temperature is below 75°F.
                Maintain the home between cleanings to avoid excessive mess. Additional fees may
                apply for extreme messes.
              </p>
            </Card>

            {/* Damage and Liability */}
            <Card>
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                7. Damage and Liability
              </h3>
              <p className="text-text-dark mb-4">
                We take great care in your home, using researched products and proper techniques for
                each surface. While we do our absolute best to prevent damage, accidents can happen.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800 font-medium mb-2">Insurance Protection:</p>
                <p className="text-green-700 mb-2">
                  Gathered Roots Cleaning is a licensed business in Idaho and carries liability
                  insurance coverage.
                </p>
                <p className="text-green-700">
                  This coverage protects both our clients and our business in the unlikely event of
                  accidental damage during service.
                </p>
              </div>
              <p className="text-text-dark mt-4">
                Any damage claims will be handled professionally through our insurance provider.
                Please report any concerns immediately so we can address them promptly.
              </p>
            </Card>

            {/* Termination of Services */}
            <Card>
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                8. Termination of Services
              </h3>
              <p className="text-text-dark">
                Either party may cancel this agreement at any time with written notice. Any unpaid
                balances must be resolved before the final service.
              </p>
            </Card>

            {/* Photo Permission */}
            <Card>
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                9. Photo Permission
              </h3>
              <p className="text-text-dark mb-4">
                Gathered Roots Cleaning may take before and after photos of cleaned areas for
                quality assurance, documentation, or marketing purposes.
              </p>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="text-green-800 font-medium mb-2">Privacy Protection:</p>
                <p className="text-green-700 mb-2">
                  Photos will never include identifying details such as faces, names, addresses, or
                  personal belongings.
                </p>
                <p className="text-green-700">
                  All images will be used respectfully and stored securely.
                </p>
              </div>
              <p className="text-text-dark mt-4">
                Clients will be asked to indicate &quot;Yes&quot; or &quot;No&quot; to photo
                permission in the custom field provided at the time of signing.
              </p>
            </Card>

            {/* Health & Safety Conditions */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                10. Health &amp; Safety Conditions
              </h3>
              <p className="text-text-dark mb-4">
                For the safety and comfort of both the cleaner and the client, Gathered Roots
                Cleaning requires the following conditions to be met:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🌡️</div>
                  <p className="font-medium text-blue-800">Temperature</p>
                  <p className="text-blue-700">75°F or below</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">💧</div>
                  <p className="font-medium text-blue-800">Running Water</p>
                  <p className="text-blue-700">Must be available</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <p className="font-medium text-blue-800">Lighting</p>
                  <p className="text-blue-700">Working lights required</p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-red-800 font-medium mb-2">
                  Services will NOT be performed in homes with:
                </p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Excessive mold</li>
                  <li>Infestations</li>
                  <li>Bodily fluids</li>
                  <li>Other hazardous conditions</li>
                </ul>
              </div>

              <p className="text-text-dark mt-4">
                Gathered Roots Cleaning reserves the right to refuse or discontinue service if these
                conditions are not met.
              </p>
            </Card>

            {/* Rescheduling Due to Weather or Emergency */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                11. Biohazard Fee
              </h3>
              <p className="text-text-dark mb-4">
                At Gathered Roots Cleaning, the health and safety of our team is a priority. A $50
                biohazard cleaning fee will be applied when cleaning involves small biohazard
                situations, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-text-dark space-y-2 mb-4">
                <li>Bodily fluids (human or pet)</li>
                <li>Feces or urine</li>
                <li>Vomit</li>
                <li>Blood</li>
                <li>Rodent or pest droppings (e.g., mouse droppings)</li>
                <li>Other hazardous materials requiring additional safety measures</li>
              </ul>
              <p className="text-text-dark mb-4">
                This fee helps cover the cost of personal protective equipment, disinfectants, and
                the extra time and care needed to clean and sanitize the affected area.
              </p>
              <p className="text-text-dark">
                If the issue is larger in scope or requires professional remediation, we reserve the
                right to decline service and refer you to a qualified specialty cleanup provider.
              </p>
            </Card>

            {/* Excessive Trash or Debris */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                12. Excessive Trash or Debris
              </h3>
              <p className="text-text-dark mb-4">
                To ensure efficient cleaning service, clients are expected to maintain reasonable
                tidiness between cleanings. An additional fee applies when excessive clutter or
                debris requires removal before cleaning can begin.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center mb-4">
                <p className="text-yellow-800 font-medium mb-2">Excessive Cleanup Fee</p>
                <p className="text-3xl font-bold text-yellow-700 mb-2">$50</p>
                <p className="text-yellow-700">
                  Applied when decluttering is required before cleaning
                </p>
              </div>

              <p className="text-text-dark mb-4">
                <strong>This fee may apply to situations including:</strong>
              </p>
              <ul className="list-disc list-inside text-text-dark space-y-1 mb-4 ml-4">
                <li>Excessive personal items covering surfaces that need cleaning</li>
                <li>Large amounts of trash or debris throughout the home</li>
                <li>Clutter that prevents access to cleaning areas</li>
                <li>Items that require significant time to move before cleaning can begin</li>
              </ul>

              <p className="text-text-dark">
                This fee helps cover the additional time and effort required to prepare the space
                for proper cleaning service.
              </p>
            </Card>

            {/* Rescheduling Due to Weather or Emergency */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                13. Rescheduling Due to Weather or Emergency
              </h3>
              <p className="text-text-dark mb-4">
                In the event of extreme weather, personal illness, or emergency, Gathered Roots
                Cleaning may need to reschedule your appointment. We will notify you as soon as
                possible and work to find a new time that fits your schedule.
              </p>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
                <p className="text-green-800 font-medium mb-2">Flexibility Appreciation</p>
                <p className="text-3xl font-bold text-green-700 mb-2">25% OFF</p>
                <p className="text-green-700">
                  Applied to rescheduled cleaning only as a thank-you for your flexibility
                </p>
              </div>
            </Card>

            {/* Veteran Discount */}
            <Card className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
                14. Veteran Discount
              </h3>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center mb-4">
                <p className="text-blue-800 font-medium mb-2">Thank You for Your Service</p>
                <p className="text-3xl font-bold text-blue-700 mb-2">25% OFF</p>
                <p className="text-blue-700">Available for all veterans</p>
              </div>
              <p className="text-text-dark">
                We offer a 25% discount for veterans. Please mention your status when booking.
              </p>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-primary-accent-green mb-4 font-headings">
              Questions About Our Terms?
            </h3>
            <p className="text-text-dark mb-6">
              If you have any questions or concerns about these terms of service, please don&apos;t
              hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@gatheredrootscleaning.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-accent-teal text-white font-medium rounded-lg hover:bg-secondary-accent-hover transition-colors duration-300"
              >
                Email Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-accent-teal text-primary-accent-teal font-medium rounded-lg hover:bg-primary-accent-teal hover:text-white transition-colors duration-300"
              >
                Contact Form
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
