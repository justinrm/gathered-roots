import React from 'react';

const Textarea = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  className = '',
  required = false,
  ariaLabel = undefined,
  ariaInvalid = undefined,
}) => {
  const baseStyle =
    'mt-1 block w-full px-3 py-2 bg-white border border-borders rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary-accent-cta focus:ring-1 focus:ring-primary-accent-cta disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none';

  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      className={`${baseStyle} ${className}`.trim()}
      required={required}
      aria-required={required}
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
    />
  );
};

export default Textarea;
