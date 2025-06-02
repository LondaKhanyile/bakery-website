// Import the React library to enable JSX and component usage
import React from 'react';

// Import ReactDOM for rendering components to the DOM
import ReactDOM from 'react-dom/client';

// Import the main App component (root of your application)
import App from './App';

// Optional: Import global CSS styles (can include resets or global layout rules)
import './index.css';

// Create a root DOM node where your entire React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the <App /> component into the root DOM node
// <React.StrictMode> helps highlight potential problems in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
