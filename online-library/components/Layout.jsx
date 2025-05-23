import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <main style={{ padding: '1rem', width: "100vw" }}>
      <Outlet />
    </main>
  </>
);

export default Layout;
