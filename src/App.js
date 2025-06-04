// src/App.js

// Import React core library
import React from "react";

// Import necessary components from React Router for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import custom components and pages
import Navigation from "./components/navigation"; // Navigation bar shown on all pages
import HomePage from "./pages/HomePage";         // Homepage component
import AboutPage from "./pages/AboutPage";       // About Us page component
import MenuPage from "./pages/MenuPage";         // Menu page component
import Footer from "./components/footer";  // Import Footer

// Import main stylesheet for consistent styling across the app
import "./App.css";

// Root App component that sets up routing using React Router
const App = () => (
  <Router>
    {/* Main application wrapper */}
    <div className="App">

      {/* Navigation bar that appears on all pages */}
      <Navigation />

      {/* Define application routes */}
      <Routes>
        {/* Home route (default path) */}
        <Route path="/" element={<HomePage />} />

        {/* About Us route */}
        <Route path="/about" element={<AboutPage />} />

        {/* Menu route */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      <Footer />
    </div>
  </Router>
);

// Export the App component as default so it can be rendered in index.js
export default App;
