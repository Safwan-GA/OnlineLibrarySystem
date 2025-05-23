import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you requested does not exist.</p>
    <Link to="/">Back to Home</Link>
  </div>
);

export default Error;
