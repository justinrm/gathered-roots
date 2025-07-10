import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F5F5DC] text-text-dark py-10 px-4 text-center border-t border-borders">
      <div className="container mx-auto space-y-3">
        <div>
          <p className="text-base">
            <span className="font-semibold">Gathered Roots Cleaning</span> &copy;{' '}
            {new Date().getFullYear()}
          </p>
          <p className="text-sm text-text-light mt-1">
            Serving Lewiston, ID & Clarkston, WA
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            <a
              href="tel:+12087171192"
              className="hover:text-primary-accent-teal transition-colors duration-200"
            >
              (208) 717-1192
            </a>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            <a
              href="mailto:hello@gatheredrootscleaning.com"
              className="hover:text-primary-accent-teal transition-colors duration-200"
            >
              hello@gatheredrootscleaning.com
            </a>
          </p>
          <p className="text-xs text-text-light mt-2">Website &copy; Justin R. Merwin</p>
        </div>
        <div className="pt-1 space-x-3">
          <Link
            href="/privacy-policy"
            className="text-xs text-text-light hover:text-primary-accent-teal hover:underline transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span className="text-xs text-gray-400">|</span>
          <Link
            href="/accessibility"
            className="text-xs text-text-light hover:text-primary-accent-teal hover:underline transition-colors duration-200"
          >
            Accessibility
          </Link>
          <span className="text-xs text-gray-400">|</span>
          <Link
            href="/terms-of-service"
            className="text-xs text-text-light hover:text-primary-accent-teal hover:underline transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
