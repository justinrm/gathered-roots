import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* Footer is handled in _app.js */}
    </>
  );
};

export default Layout;
