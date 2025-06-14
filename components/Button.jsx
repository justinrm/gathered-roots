import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  className = '',
  ariaLabel,
  ariaDescribedBy,
}) => {
  const baseStyle =
    'font-medium py-2 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';

  let variantStyle = '';
  switch (variant) {
    case 'secondary':
      variantStyle =
        'bg-transparent border border-primary-accent-green text-primary-accent-green hover:bg-primary-accent-green hover:text-white focus:ring-primary-accent-green disabled:hover:bg-transparent disabled:hover:text-primary-accent-green';
      break;
    case 'outline':
    case 'primary':
    default:
      variantStyle =
        'bg-primary-accent-green text-white hover:bg-secondary-accent-hover focus:ring-primary-accent-green disabled:hover:bg-primary-accent-green';
      break;
  }

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${baseStyle} ${variantStyle} ${className}`.trim()}
    >
      {loading && (
        <span className="inline-block mr-2" aria-hidden="true">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;

// Example Usage:
/*
const App = () => (
  <div className="p-4 space-x-2">
    <Button onClick={() => alert('Primary clicked!')}>Primary Button</Button>
    <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>Secondary Button</Button>
    <Button disabled onClick={() => alert('Disabled clicked!')}>Disabled Button</Button>
    <Button variant="secondary" disabled onClick={() => alert('Disabled clicked!')}>Disabled Secondary</Button>
    <Button className="bg-red-500 hover:bg-red-700">Custom Class</Button>
  </div>
);
*/

// Ensure your tailwind.config.js has the necessary colors:
// theme: {
//   extend: {
//     colors: {
//       primary_accent_teal: '#006978', // Deep Teal
//       secondary_accent_hover: '#5FB09C', // Lighter Teal/Green for hover (used for primary hover)
//     },
//   },
// },
