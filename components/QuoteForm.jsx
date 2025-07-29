import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import FormLabel from './FormLabel';
import ValidationMessage from './ValidationMessage';
import Button from './Button';

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service' },
  { value: 'standard', label: 'Standard Clean' },
  { value: 'deep', label: 'Deep Clean' },
  { value: 'move', label: 'Move-In/Move-Out Clean' },
  { value: 'property-management', label: 'Property Management & Office Spaces' },
  { value: 'custom', label: 'Custom Service (specify in details)' },
];

const CONTACT_METHOD_OPTIONS = [
  { value: '', label: 'Select your preferred contact method' },
  { value: 'phone', label: 'Phone Call' },
  { value: 'email', label: 'Email' },
  { value: 'text', label: 'Text Message' },
  { value: 'any', label: 'Any method is fine' },
];

const FREQUENCY_OPTIONS = [
  { value: '', label: 'Select frequency' },
  { value: 'one-time', label: 'One-time service' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'bi-weekly', label: 'Every two weeks' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'custom', label: 'Custom schedule' },
];

const PROPERTY_TYPE_OPTIONS = [
  { value: '', label: 'Select property type' },
  { value: 'house', label: 'Single-family home' },
  { value: 'apartment', label: 'Apartment/Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'office', label: 'Office space' },
  { value: 'commercial', label: 'Commercial property' },
  { value: 'other', label: 'Other (specify in details)' },
];

const BEDROOMS_OPTIONS = [
  { value: '', label: 'Select bedrooms' },
  { value: '1', label: '1 bedroom' },
  { value: '2', label: '2 bedrooms' },
  { value: '3', label: '3 bedrooms' },
  { value: '4', label: '4 bedrooms' },
  { value: '5+', label: '5+ bedrooms' },
];

const BATHROOMS_OPTIONS = [
  { value: '', label: 'Select bathrooms' },
  { value: '1', label: '1 bathroom' },
  { value: '1.5', label: '1.5 bathrooms' },
  { value: '2', label: '2 bathrooms' },
  { value: '2.5', label: '2.5 bathrooms' },
  { value: '3', label: '3 bathrooms' },
  { value: '3.5', label: '3.5 bathrooms' },
  { value: '4+', label: '4+ bathrooms' },
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  propertyType: '',
  bedrooms: '',
  bathrooms: '',
  squareFootage: '',
  service: '',
  frequency: '',
  preferredContactMethod: '',
  preferredDate: '',
  details: '',
  pets: '',
  specialRequests: '',
  consent: false,
};

const QuoteForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs = {};
    
    // Required fields
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s\-()]{7,}$/.test(form.phone)) {
      errs.phone = 'Enter a valid phone number.';
    }
    if (!form.address.trim()) errs.address = 'Property address is required.';
    if (!form.propertyType) errs.propertyType = 'Please select a property type.';
    if (!form.service) errs.service = 'Please select a service.';
    if (!form.frequency) errs.frequency = 'Please select a frequency.';
    if (!form.preferredContactMethod) errs.preferredContactMethod = 'Please select your preferred contact method.';
    if (!form.consent) errs.consent = 'You must agree to the privacy policy.';

    // Optional but validated if provided
    if (form.squareFootage && !/^\d+$/.test(form.squareFootage)) {
      errs.squareFootage = 'Square footage must be a number.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errs = validate();
    setErrors(errs);
    
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try {
        const payload = {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          propertyType: form.propertyType,
          bedrooms: form.bedrooms,
          bathrooms: form.bathrooms,
          squareFootage: form.squareFootage,
          service: form.service,
          frequency: form.frequency,
          preferredContactMethod: form.preferredContactMethod,
          preferredDate: form.preferredDate,
          details: form.details,
          pets: form.pets,
          specialRequests: form.specialRequests,
          consent: form.consent,
        };
        
        const res = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        
        const data = await res.json();
        if (res.ok) {
          setSubmitted(true);
        } else {
          if (data.errors) {
            setErrors(data.errors);
            setApiError('Please fix the errors below and try again.');
          } else {
            setApiError(data.message || 'Something went wrong. Please try again later.');
          }
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setApiError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center max-w-2xl mx-auto">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Quote Request Received!</h2>
        <p className="text-lg">
          Thank you for requesting a quote! We have received your detailed information and will contact you using your preferred method within 24 hours with a personalized quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card-background p-8 rounded-xl shadow-lg max-w-4xl mx-auto space-y-6 border border-card-border"
      noValidate
    >
      {apiError && (
        <div className="text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-md border border-red-200">
          {apiError}
        </div>
      )}

      {/* Contact Information Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-accent-teal border-b border-card-border pb-2">
          Contact Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FormLabel htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">
              Full Name *
            </FormLabel>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              required
              ariaLabel="Full Name"
              ariaInvalid={!!errors.name}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
            <ValidationMessage>{errors.name}</ValidationMessage>
          </div>

          <div>
            <FormLabel htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
              Email Address *
            </FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              autoComplete="email"
              required
              ariaLabel="Email Address"
              ariaInvalid={!!errors.email}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
            <ValidationMessage>{errors.email}</ValidationMessage>
          </div>

          <div>
            <FormLabel htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1">
              Phone Number *
            </FormLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(208) 717-1192"
              autoComplete="tel"
              required
              ariaLabel="Phone Number"
              ariaInvalid={!!errors.phone}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
            <ValidationMessage>{errors.phone}</ValidationMessage>
          </div>

          <div>
            <FormLabel htmlFor="preferredContactMethod" className="block text-sm font-medium text-text-dark mb-1">
              Preferred Contact Method *
            </FormLabel>
            <Select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={form.preferredContactMethod}
              onChange={handleChange}
              required
              ariaLabel="Preferred Contact Method"
              ariaInvalid={!!errors.preferredContactMethod}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            >
              {CONTACT_METHOD_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ''}
                  className={opt.value === '' ? 'text-gray-500' : 'text-gray-900'}
                >
                  {opt.label}
                </option>
              ))}
            </Select>
            <ValidationMessage>{errors.preferredContactMethod}</ValidationMessage>
          </div>
        </div>
      </div>

      {/* Property Information Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-accent-teal border-b border-card-border pb-2">
          Property Information
        </h2>

        <div>
          <FormLabel htmlFor="address" className="block text-sm font-medium text-text-dark mb-1">
            Property Address *
          </FormLabel>
          <Input
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Street, City, State, Zip Code"
            required
            ariaLabel="Property Address"
            ariaInvalid={!!errors.address}
            className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
          />
          <ValidationMessage>{errors.address}</ValidationMessage>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <FormLabel htmlFor="propertyType" className="block text-sm font-medium text-text-dark mb-1">
              Property Type *
            </FormLabel>
            <Select
              id="propertyType"
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              required
              ariaLabel="Property Type"
              ariaInvalid={!!errors.propertyType}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            >
              {PROPERTY_TYPE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ''}
                  className={opt.value === '' ? 'text-gray-500' : 'text-gray-900'}
                >
                  {opt.label}
                </option>
              ))}
            </Select>
            <ValidationMessage>{errors.propertyType}</ValidationMessage>
          </div>

          <div>
            <FormLabel htmlFor="bedrooms" className="block text-sm font-medium text-text-dark mb-1">
              Bedrooms
            </FormLabel>
            <Select
              id="bedrooms"
              name="bedrooms"
              value={form.bedrooms}
              onChange={handleChange}
              ariaLabel="Number of Bedrooms"
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            >
              {BEDROOMS_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ''}
                  className={opt.value === '' ? 'text-gray-500' : 'text-gray-900'}
                >
                  {opt.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <FormLabel htmlFor="bathrooms" className="block text-sm font-medium text-text-dark mb-1">
              Bathrooms
            </FormLabel>
            <Select
              id="bathrooms"
              name="bathrooms"
              value={form.bathrooms}
              onChange={handleChange}
              ariaLabel="Number of Bathrooms"
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            >
              {BATHROOMS_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ''}
                  className={opt.value === '' ? 'text-gray-500' : 'text-gray-900'}
                >
                  {opt.label}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <FormLabel htmlFor="squareFootage" className="block text-sm font-medium text-text-dark mb-1">
              Square Footage
            </FormLabel>
            <Input
              id="squareFootage"
              name="squareFootage"
              type="number"
              value={form.squareFootage}
              onChange={handleChange}
              placeholder="e.g. 1500"
              ariaLabel="Square Footage"
              ariaInvalid={!!errors.squareFootage}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
            <ValidationMessage>{errors.squareFootage}</ValidationMessage>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-accent-teal border-b border-card-border pb-2">
          Service Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FormLabel htmlFor="service" className="block text-sm font-medium text-text-dark mb-1">
              Service Type *
            </FormLabel>
            <Select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              ariaLabel="Service Type"
              ariaInvalid={!!errors.service}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ''}
                  className={opt.value === '' ? 'text-gray-500' : 'text-gray-900'}
                >
                  {opt.label}
                </option>
              ))}
            </Select>
            <ValidationMessage>{errors.service}</ValidationMessage>
          </div>

          <div>
            <FormLabel htmlFor="frequency" className="block text-sm font-medium text-text-dark mb-1">
              Frequency *
            </FormLabel>
            <Select
              id="frequency"
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
              required
              ariaLabel="Service Frequency"
              ariaInvalid={!!errors.frequency}
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            >
              {FREQUENCY_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.value === ''}
                  className={opt.value === '' ? 'text-gray-500' : 'text-gray-900'}
                >
                  {opt.label}
                </option>
              ))}
            </Select>
            <ValidationMessage>{errors.frequency}</ValidationMessage>
          </div>

          <div>
            <FormLabel htmlFor="preferredDate" className="block text-sm font-medium text-text-dark mb-1">
              Preferred Start Date
            </FormLabel>
            <Input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={form.preferredDate}
              onChange={handleChange}
              ariaLabel="Preferred Start Date"
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900"
            />
            <p className="mt-1 text-xs text-gray-500">Optional - when would you like to start?</p>
          </div>

          <div>
            <FormLabel htmlFor="pets" className="block text-sm font-medium text-text-dark mb-1">
              Pets in Home
            </FormLabel>
            <Input
              id="pets"
              name="pets"
              value={form.pets}
              onChange={handleChange}
              placeholder="e.g. 1 dog, 2 cats"
              ariaLabel="Pets in Home"
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
            <p className="mt-1 text-xs text-gray-500">Let us know about any pets we might encounter</p>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary-accent-teal border-b border-card-border pb-2">
          Additional Details
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <FormLabel htmlFor="details" className="block text-sm font-medium text-text-dark mb-1">
              Property Details & Condition
            </FormLabel>
            <Textarea
              id="details"
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Describe your property's current condition, any areas that need special attention, accessibility considerations, etc."
              rows={4}
              ariaLabel="Property Details"
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
          </div>

          <div>
            <FormLabel htmlFor="specialRequests" className="block text-sm font-medium text-text-dark mb-1">
              Special Requests or Preferences
            </FormLabel>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              value={form.specialRequests}
              onChange={handleChange}
              placeholder="Any specific cleaning products, allergies to consider, areas to focus on or avoid, time preferences, etc."
              rows={3}
              ariaLabel="Special Requests"
              className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal focus:border-primary-accent-teal sm:text-sm text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Consent */}
      <div className="flex items-start pt-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1 mr-3 h-4 w-4 text-primary-accent-teal border-gray-300 rounded focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-teal"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          I agree to the{' '}
          <a
            href="/privacy-policy"
            className="font-medium underline text-primary-accent-teal hover:text-secondary-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          {' '}and{' '}
          <a
            href="/terms-of-service"
            className="font-medium underline text-primary-accent-teal hover:text-secondary-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            terms of service
          </a>
          .
        </label>
      </div>
      {errors.consent && <ValidationMessage>{errors.consent}</ValidationMessage>}

      <Button
        type="submit"
        className="w-full text-lg py-3 px-4 bg-primary-accent-teal text-white font-semibold rounded-lg shadow-md hover:bg-secondary-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent-teal transition-colors duration-150 ease-in-out disabled:opacity-70"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Request Quote'}
      </Button>
    </form>
  );
};

export default QuoteForm; 