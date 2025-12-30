import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Streak<span>Flow</span></div>
      <a href="#app" style={{color: 'white', textDecoration: 'none'}}>Try App</a>
    </nav>
  );
};
export default Navbar;