import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import axios from 'axios';

// Configura los valores predeterminados de Axios aquí
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://back-kuro-gestor-1.onrender.com/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
