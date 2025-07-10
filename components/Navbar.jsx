import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // For hamburger and close icons

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-[#333333] hover:text-[#006978] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
    legacyBehavior
  >
    {children}
  </Link>
);

const MobileNavLink = React.forwardRef(({ href, children, onClick }, ref) => (
  <Link
    href={href}
    ref={ref}
    onClick={onClick}
    className="block text-[#333333] hover:text-white hover:bg-[#006978] px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
  >
    {children}
  </Link>
));
MobileNavLink.displayName = 'MobileNavLink';

const Navbar = ({ logoText = 'Gathered Roots Cleaning', navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);

  // Close menu on Escape key and outside clicks
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
      // Focus trap
      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusableEls = mobileMenuRef.current.querySelectorAll('a, button');
        if (focusableEls.length === 0) return;
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    // Note: Removed touchstart to prevent interference with mobile link clicks
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus first link when menu opens
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);

  const defaultNavItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/service-areas', label: 'Service Areas' },
    { href: '/terms-of-service', label: 'Terms' },
    { href: '/contact', label: 'Contact' },
  ];

  const itemsToRender = navItems || defaultNavItems;

  return (
    <div className="sticky top-4 z-50 w-full flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto bg-background/90 backdrop-blur-md shadow-card border border-borders rounded-full max-w-5xl w-[95%] mx-auto px-6 py-2 flex items-center justify-between transition-all duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo/Brand Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-[#333333]" legacyBehavior>
            {logoText}
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {itemsToRender.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* Add skip link at the top of the nav */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only absolute left-2 top-2 bg-white text-gray-900 px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
      </nav>
      {/* Mobile Menu Content */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-[#F5F5DC] bg-opacity-95 backdrop-blur-sm animate-fade-in"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          ref={mobileMenuRef}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col h-full">
            {itemsToRender.map((item, idx) => (
              <MobileNavLink
                key={item.label}
                href={item.href}
                ref={
                  idx === 0
                    ? firstLinkRef
                    : idx === itemsToRender.length - 1
                      ? lastLinkRef
                      : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <button
              className="mt-auto mb-4 text-gray-700 text-sm underline focus:outline-none hover:text-[#333333]"
              onClick={() => setIsOpen(false)}
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// Example Usage:
/*
const customNavItems = [
  { href: '/', label: 'Welcome' },
  { href: '/portfolio', label: 'Our Work' },
  { href: '/quote', label: 'Get Quote' },
];

const App = () => (
  <Navbar logoText="My Site" navItems={customNavItems} />
  // Or use default items:
  // <Navbar />
);
*/

// Ensure your tailwind.config.js has the necessary colors:
// theme: {
//   extend: {
//     colors: {
//       background: '#F5F5DC',
//       primary-accent-cta: '#7A9A8D',
//       brand-accent: '#2F4F4F',
//       secondary-accent-hover: '#5FB09C',
//       text-dark: '#333333',
//     },
//   },
// },
