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
  { value: 'eco', label: 'Eco-Friendly Options' },
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  consent: false,
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs = {};
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
    if (!form.service) errs.service = 'Please select a service.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    if (!form.consent) errs.consent = 'You must agree to the privacy policy.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
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
          message: form.message,
          consent: form.consent,
        };
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok) {
          setSubmitted(true);
        } else {
          setApiError(data.message || 'Something went wrong. Please try again later.');
        }
      } catch {
        setApiError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-md text-green-800 text-center">
        Thank you for reaching out! We have received your message and will get back to you soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background p-8 rounded-xl shadow-2xl max-w-xl mx-auto space-y-6"
      noValidate
    >
      {apiError && (
        <div className="text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-md border border-red-200">
          {apiError}
        </div>
      )}
      <div>
        <FormLabel htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </FormLabel>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          autoComplete="name"
          required
          ariaLabel="Name"
          ariaInvalid={!!errors.name}
          className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-cta focus:border-primary-accent-cta sm:text-sm text-gray-900 placeholder-gray-400"
        />
        <ValidationMessage>{errors.name}</ValidationMessage>
      </div>
      <div>
        <FormLabel htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
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
          ariaLabel="Email"
          ariaInvalid={!!errors.email}
          className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-cta focus:border-primary-accent-cta sm:text-sm text-gray-900 placeholder-gray-400"
        />
        <ValidationMessage>{errors.email}</ValidationMessage>
      </div>
      <div>
        <FormLabel htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
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
          ariaLabel="Phone"
          ariaInvalid={!!errors.phone}
          className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-cta focus:border-primary-accent-cta sm:text-sm text-gray-900 placeholder-gray-400"
        />
        <ValidationMessage>{errors.phone}</ValidationMessage>
      </div>
      <div>
        <FormLabel htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service
        </FormLabel>
        <Select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          ariaLabel="Service"
          ariaInvalid={!!errors.service}
          className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-cta focus:border-primary-accent-cta sm:text-sm text-gray-900"
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
        <FormLabel htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </FormLabel>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={4}
          required
          ariaLabel="Message"
          ariaInvalid={!!errors.message}
          className="mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-cta focus:border-primary-accent-cta sm:text-sm text-gray-900 placeholder-gray-400"
        />
        <ValidationMessage>{errors.message}</ValidationMessage>
      </div>
      <div className="flex items-start pt-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1 mr-3 h-4 w-4 text-primary-accent-cta border-gray-300 rounded focus:ring-2 focus:ring-offset-1 focus:ring-primary-accent-cta"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          I agree to the{' '}
          <a
            href="/privacy-policy"
            className="font-medium underline text-primary-accent-cta hover:text-secondary-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          .
        </label>
      </div>
      {errors.consent && <ValidationMessage>{errors.consent}</ValidationMessage>}
      <Button
        type="submit"
        className="w-full text-lg py-3 px-4 bg-primary-accent-cta text-white font-semibold rounded-lg shadow-md hover:bg-secondary-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-accent-cta transition-colors duration-150 ease-in-out disabled:opacity-70"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
