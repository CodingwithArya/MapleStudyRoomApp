import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <nav>
      <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <Button variant="contained">Home</Button>
      </Link>
      <Link to="/map" className="nav-link">
        <Button variant="contained">View Available Lounges</Button>
      </Link>
      <Link to="/lounges" className="nav-link">
        <Button variant="contained">View Available Lounges</Button>
      </Link>
      {/* Add more links/buttons as needed */}
    </nav>
    </nav>
  );
}

export default NavBar;