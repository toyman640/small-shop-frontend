import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleMenu();
    }
  };

  return (
    <header className={`Navigation ${isOpen ? 'open' : ''}`}>
      <nav className="Container">
        <div className="d-flex-space g-10">
          <h2>My Logo</h2>
        </div>
        <div className="NavLinks">
          <div className={`Hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} role="button" onKeyDown={handleKeyDown} tabIndex="0" aria-label="Toggle Menu">
            <span className="Bar" />
            <span className="Bar" />
            <span className="Bar" />
          </div>
          <ul className={`MenuList ${isOpen ? 'open' : ''}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
            <li><NavLink to="/shop">Products</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;
