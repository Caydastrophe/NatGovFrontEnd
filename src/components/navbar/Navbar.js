// ./components/navbar/Navbar.js

import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#eee' }}>
      <span>My React App</span>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
