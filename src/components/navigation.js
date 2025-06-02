// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => (
  <nav className="nav-bar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/menu">Menu</Link></li>
    </ul>
  </nav>
);

export default Navigation;
