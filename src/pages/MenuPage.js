// src/pages/MenuPage.js

// Import React to define the functional component
import React from "react";

// Import global CSS styles
import "../App.css";

// Array of pastry objects for display on the menu
// Each object contains the name, image path, and price of an item
const pastries = [
  { name: "Croissants", img: "/images/croissant.jpg", price: "R35" },
  { name: "Berry Tart", img: "/images/tart.jpg", price: "R55" },
  { name: "Muffins", img: "/images/muffin.jpg", price: "R25" },
  { name: "Cake Slice", img: "/images/cake.jpg", price: "R75" },
  { name: "Cinnamon Roll", img: "/images/roll.jpg", price: "R45" },
];

// Functional component for the Menu page
const MenuPage = () => (
  // Main container with shared and page-specific styling
  <div className="page menu">
    {/* Heading for the page */}
    <h1>Our Menu</h1>

    {/* Container for menu items styled as a grid */}
    <div className="menu-grid">
      {/* Map through the pastries array and display each item */}
      {pastries.map((item) => (
        <div key={item.name} className="menu-item">
          {/* Display pastry image */}
          <img src={item.img} alt={item.name} />

          {/* Display pastry name and price */}
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
        </div>
      ))}
    </div>
  </div>
);

// Export the component so it can be used in App.js
export default MenuPage;
