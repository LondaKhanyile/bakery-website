// src/components/Navigation.js

// Import React to define the functional component
import React from "react";

// Import Link from react-router-dom to enable client-side navigation without page reloads
import { Link } from "react-router-dom";

// Import global styles for consistent navigation styling
import "../App.css";

// Functional component that renders the navigation bar across all pages
const Navigation = () => (
  <nav className="nav-bar">
    {/* Unordered list to structure navigation links */}
    <ul>
      {/* Link to the Home page */}
      <li><Link to="/">Home</Link></li>

      {/* Link to the About Us page */}
      <li><Link to="/about">About Us</Link></li>

      {/* Link to the Menu page */}
      <li><Link to="/menu">Menu</Link></li>
    </ul>
  </nav>
);

// Export the component so it can be imported and used in App.js
export default Navigation;
