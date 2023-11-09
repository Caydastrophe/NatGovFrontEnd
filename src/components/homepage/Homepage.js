// src/components/homepage/Homepage.js

import React from 'react';
import Navbar from '../navbar/Navbar';
import Posts from '../post/Post';

const Homepage = () => {
  const handleLogout = () => {
    // Perform the logout operation
    localStorage.removeItem('token');
    // Redirect to the login page or update the state to reflect the user has logged out
    // For example, using React Router:
    // useHistory().push('/login');
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <Posts />
    </div>
  );
};

export default Homepage;
