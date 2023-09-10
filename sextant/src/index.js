import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className="header">
      <h1>Welcome to Sextant</h1>
      <p>Your journey to explore the world begins here.</p>
    </header>
    <App />
  </React.StrictMode>
);

reportWebVitals();
