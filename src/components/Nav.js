import React from 'react';
import { Link, Route } from 'react-router-dom';

export default () => {

  return (
    <nav className="header-nav">
      <div className="logo-container">
        <h1>Smart Aina: Virtual Fence</h1>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="/dashboard"><li>Dashboard</li></Link>
          <Link to="/logout"><li>Logout</li></Link>
        </ul>
      </div>
    </nav>
  )
}