import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <header className="Navigation">
    <nav className="Container">
      <div className="d-flex-space g-10">
        <h2>My Logo</h2>
      </div>
      <div className="NavLinks">
        <div className="Hamburger">
          <span className="Bar" />
          <span className="Bar" />
          <span className="Bar" />
        </div>
        <ul className="MenuList">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/shop">Products</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavMenu;
