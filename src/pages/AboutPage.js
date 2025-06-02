// src/pages/AboutPage.js

// Import React to define a functional component
import React from "react";

// Import global CSS for consistent styling across pages
import "../App.css";

// Functional component for the About Us page
const AboutPage = () => (
  // Container div with classes for shared and page-specific styling
  <div className="page about">
    {/* Main heading for the page */}
    <h1>About Us</h1>

    {/* Company history and values */}
    <p>Sweet Crumbs Bakery began in 2001 as a small family-owned business...</p>
    <p>Our mission is to bring warmth and sweetness into every home.</p>
    <p>We value tradition, community, and quality in every bite.</p>
  </div>
);

// Export the component to make it available for routing in App.js
export default AboutPage;
