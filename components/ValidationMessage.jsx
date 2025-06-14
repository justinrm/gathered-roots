import React from 'react';

const ValidationMessage = ({ children, className = '', id, role = 'alert' }) => {
  if (!children) {
    return null;
  }

  return (
    <p
      className={`text-sm text-red-600 mt-1 ${className}`.trim()}
      id={id}
      role={role}
      aria-live="polite"
    >
      {children}
    </p>
  );
};

export default ValidationMessage;
