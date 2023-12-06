import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <header>
    <nav className="container d-flex-space">
      <div className="d-flex-space g-10">
        <h2>My Logo</h2>
      </div>
      <ul className="d-flex-space g-10">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/shop">Products</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default NavMenu;
