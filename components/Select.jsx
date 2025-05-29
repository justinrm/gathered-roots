import React from 'react';

const Select = ({
  id,
  name,
  value,
  onChange,
  children,
  disabled = false,
  className = '',
  required = false,
  ariaLabel = undefined,
  ariaInvalid = undefined,
}) => {
  const baseStyle =
    'mt-1 block w-full pl-3 pr-10 py-2 bg-white border border-borders rounded-md text-sm shadow-sm focus:outline-none focus:border-primary-accent-cta focus:ring-1 focus:ring-primary-accent-cta disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none';

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseStyle} ${className}`.trim()}
      required={required}
      aria-required={required}
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
    >
      {children}
    </select>
  );
};

export default Select;

// Example Usage:
/*
const MyForm = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  return (
    <Select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
      <option value="" disabled>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  );
};
*/

// Ensure your tailwind.config.js has the necessary colors:
// theme: {
//   extend: {
//     colors: {
//       primary_accent_teal: '#006978',
//       borders: '#E0E0E0',
//     },
//   },
// },
