// src/pages/AboutPage.js

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const AboutPage = () => (
  <div className="page about">
    <h1>About Sweet Crumbs Bakery</h1>
    <p>
      At Sweet Crumbs Bakery, we believe that every bite should bring joy. 
      Founded in 2010 by passionate bakers, our bakery has grown from a small neighborhood shop 
      into a beloved community staple, known for our dedication to quality and authentic flavors.
    </p>
    <p>
      Our expert bakers craft every pastry with the finest ingredients, ensuring freshness and flavor 
      in every crumb. We specialize in both classic favorites and innovative creations, always made 
      with love and care.
    </p>
    <p>
      We are proud to serve our community by creating moments of sweetness, whether for your morning coffee, 
      a special celebration, or a simple treat to brighten your day.
    </p>

    {/* See Our Menu button */}
    <Link to="/menu" className="btn-see-menu">
      See Our Menu
    </Link>
  </div>
);

export default AboutPage;