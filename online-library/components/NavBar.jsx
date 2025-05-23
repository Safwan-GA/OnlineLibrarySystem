import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
        Home
      </NavLink>{' | '}
      <NavLink to="/books/Fiction" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Browse Books
      </NavLink>{' | '}
      <NavLink to="/add" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Add Book
      </NavLink>
    </nav>
  );
};

export default Navbar;
