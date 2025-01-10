import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <button
      style={{ marginBottom: '100' }}
      onClick={() => console.log('Click on button')}
    >
      Click Button
    </button>
  </React.StrictMode>
);
