// src/pages/MenuPage.js

import React from "react";
import "../App.css";

// Expanded pastry and dessert menu with images, names, and prices
const pastries = [
  { name: "Croissants", img: "/images/croissant.jpg", price: "R35" },
  { name: "Berry Tart", img: "/images/tart.jpg", price: "R55" },
  { name: "Muffins", img: "/images/muffin.jpg", price: "R25" },
  { name: "Cake Slice", img: "/images/cake.jpg", price: "R75" },
  { name: "Cinnamon Roll", img: "/images/roll.jpg", price: "R45" },
  { name: "Chocolate Eclair", img: "/images/eclair.jpg", price: "R50" },
  { name: "Lemon Drizzle Cake", img: "/images/lemon-cake.jpg", price: "R60" },
  { name: "Macarons (Set of 6)", img: "/images/macarons.jpg", price: "R90" },
];

const MenuPage = () => (
  <div className="page menu">
    <h1>Our Menu</h1>
    <div className="menu-grid">
      {pastries.map((item) => (
        <div key={item.name} className="menu-item">
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <h3>{item.price}</h3>
          <button className="order-btn" onClick={() => alert(`Thank you for ordering ${item.name}!`)}>Order Now</button>
        </div>
      ))}
    </div>
  </div>
);

export default MenuPage;
