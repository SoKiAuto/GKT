import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ✅ change from BrowserRouter to HashRouter
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename="/GKT">
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
