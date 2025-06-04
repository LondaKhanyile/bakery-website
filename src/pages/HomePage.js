// src/pages/HomePage.js

import React from "react";
import "../App.css";

const HomePage = () => (
  <>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Sweet Crumbs Bakery!</h1>
        <p className="hero-subtitle">Delicious, fresh pastries made with love every morning.</p>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <p>© 2025 Sweet Crumbs Bakery. Developed by Your Londa.</p>
    </footer>
  </>
);

export default HomePage;
