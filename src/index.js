import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './performance.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for offline support and caching (if available)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {
      // Service worker registration failed, app will still work
    });
  });
}
