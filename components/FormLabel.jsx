import React from 'react';

const FormLabel = ({ htmlFor, children, className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-text-dark mb-1 ${className}`.trim()}
    >
      {children}
    </label>
  );
};

export default FormLabel;
