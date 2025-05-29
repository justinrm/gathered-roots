import React from 'react';

const Input = ({
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = '',
  required = false,
  ariaLabel = undefined,
  ariaInvalid = undefined,
  ariaDescribedBy = undefined,
  autoComplete = undefined,
}) => {
  const baseStyle =
    'mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary-accent-cta focus:ring-1 focus:ring-primary-accent-cta disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none';

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${baseStyle} ${className}`.trim()}
      required={required}
      aria-required={required}
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
      autoComplete={autoComplete}
    />
  );
};

export default Input;

// Ensure your tailwind.config.js has the necessary colors:
// theme: {
//   extend: {
//     colors: {
//       primary_accent_teal: '#006978',
//       borders: '#E0E0E0',
//     },
//   },
// },
