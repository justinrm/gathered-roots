import React, { useState } from 'react';
import Head from 'next/head';
import apiClient from '../lib/apiClient';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'standard',
    preferredContactMethod: '',
    preferredDate: '',
    preferredTimeSlot: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState({ type: '', message: '' });
  const [validationErrors, setValidationErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    // Clear validation error for this field when user changes it
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus({ type: '', message: '' });
    setValidationErrors({});

    try {
      const response = await apiClient.post('/submit-booking-request', formData);
      
      setSubmissionStatus({ type: 'success', message: response.data.message || 'Booking request submitted successfully!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: 'standard',
        preferredContactMethod: '',
        preferredDate: '',
        preferredTimeSlot: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error.response || error);
      
      // Handle validation errors if returned from API
      if (error.response?.data?.details) {
        setValidationErrors(error.response.data.details);
        setSubmissionStatus({ 
          type: 'error',
          message: 'Please correct the errors in the form.'
        });
      } else {
        setSubmissionStatus({ 
          type: 'error',
          message: error.response?.data?.error || 'An error occurred. Please try again.' 
        });
      }
    }
    setIsLoading(false);
  };

  // Time slot options
  const timeSlots = [
    '9:30 AM - 11:30 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '3:00 PM - 5:00 PM'
  ];

  // Contact method options
  const contactMethods = [
    { value: '', label: 'Select your preferred contact method' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'text', label: 'Text Message' },
    { value: 'any', label: 'Any method is fine' },
  ];

  // Helper for field error message display
  const ErrorMessage = ({ field }) => {
    if (!validationErrors[field]) return null;
    return (
      <p className="mt-1 text-sm text-red-600">{validationErrors[field]}</p>
    );
  };

  return (
    <>
      <Head>
        <title>Book Our Services - Gathered Roots Cleaning</title>
        <meta
          name="description"
          content="Schedule your preferred cleaning service with Gathered Roots Cleaning. Easy online booking for Lewiston, Clarkston, and surrounding areas."
        />
        <meta name="robots" content="noindex,nofollow" />{' '}
        {/* Generally, booking pages are not for SEO indexing */}
        <meta property="og:title" content="Book Our Services | Gathered Roots Cleaning" />
        <meta
          property="og:description"
          content="Get a free quote and book your next cleaning appointment with Gathered Roots Cleaning. Serving Lewiston and nearby communities."
        />
        {/* Add other relevant meta tags, e.g., for specific service areas if applicable */}
      </Head>
      <main className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <section className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-lg shadow-xl border border-borders">
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary-accent-teal mb-6 text-center">
            Book Your Cleaning Service
          </h1>
          <p className="text-text_light mb-8 text-center">
            Fill out the form below to request a cleaning service. We&apos;ll get back to you as
            soon as possible to confirm your appointment.
          </p>

          {submissionStatus.message && (
            <div
              className={`p-3 mb-5 border rounded-md ${
                submissionStatus.type === 'error'
                  ? 'border-red-500 text-red-700 bg-red-100'
                  : 'border-green-500 text-green-700 bg-green-100'
              }`}
            >
              {submissionStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-dark">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.name ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
              />
              <ErrorMessage field="name" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dark">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.email ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
              />
              <ErrorMessage field="email" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-dark">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.phone ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
              />
              <ErrorMessage field="phone" />
            </div>

            <div>
              <label htmlFor="preferredContactMethod" className="block text-sm font-medium text-text-dark">
                Preferred Contact Method
              </label>
              <select
                name="preferredContactMethod"
                id="preferredContactMethod"
                required
                value={formData.preferredContactMethod}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.preferredContactMethod ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
              >
                {contactMethods.map((method) => (
                  <option
                    key={method.value}
                    value={method.value}
                    disabled={method.value === ''}
                    className={method.value === '' ? 'text-gray-500' : 'text-gray-900'}
                  >
                    {method.label}
                  </option>
                ))}
              </select>
              <ErrorMessage field="preferredContactMethod" />
              <p className="mt-1 text-xs text-gray-500">
                We&apos;ll reach out using your preferred method. If unavailable, we may use an alternative method.
              </p>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-text-dark">
                Service Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.address ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
                placeholder="Street, City, State, Zip Code"
              />
              <ErrorMessage field="address" />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-text-dark">
                Type of Service
              </label>
              <select
                name="serviceType"
                id="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.serviceType ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
              >
                <option value="standard">Standard Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="move-in-out">Move-In/Move-Out Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="custom">Custom Request (Detail in message)</option>
              </select>
              <ErrorMessage field="serviceType" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-text-dark">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  id="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    validationErrors.preferredDate ? 'border-red-500' : 'border-borders'
                  } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
                />
                <ErrorMessage field="preferredDate" />
              </div>
              
              <div>
                <label htmlFor="preferredTimeSlot" className="block text-sm font-medium text-text-dark">
                  Preferred Time
                </label>
                <select
                  name="preferredTimeSlot"
                  id="preferredTimeSlot"
                  required
                  value={formData.preferredTimeSlot}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    validationErrors.preferredTimeSlot ? 'border-red-500' : 'border-borders'
                  } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <ErrorMessage field="preferredTimeSlot" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-dark">
                Additional Message or Specific Requests
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  validationErrors.message ? 'border-red-500' : 'border-borders'
                } rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent sm:text-sm`}
                placeholder="E.g., focus areas, pets in home, allergies, preferred time of day."
              ></textarea>
              <ErrorMessage field="message" />
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-accent-teal hover:bg-secondary-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent-teal transition duration-150 ease-in-out"
              >
                {isLoading ? 'Submitting...' : 'Request Booking'}
              </button>
            </div>
          </form>
          <p className="mt-6 text-xs text-text_light text-center">
            By submitting this form, you agree to our Privacy Policy. We will contact you to confirm
            availability and details. This request does not guarantee a booking.
          </p>
        </section>
      </main>
    </>
  );
}
