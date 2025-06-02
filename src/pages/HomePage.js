// src/pages/HomePage.js

// Import React to create a functional component
import React from "react";

// Import global CSS styles for consistent visual presentation
import "../App.css";

// Functional component for the Home page
const HomePage = () => (
  // Main container with shared and page-specific CSS classes
  <div className="page home">
    {/* Page heading */}
    <h1>Welcome to Sweet Crumbs Bakery!</h1>

    {/* Display a welcoming image for visual appeal */}
    <img
      src="/images/home.jpg" // Relative path to a local image (make sure this exists in public/images)
      alt="Bakery Front" // Alt text for accessibility
      className="page-image" // CSS class for styling the image
    />

    {/* Brief description or slogan */}
    <p>Delicious, fresh pastries made with love every morning.</p>
  </div>
);

// Export the component for use in routing (App.js)
export default HomePage;
