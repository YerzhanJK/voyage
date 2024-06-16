// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TripsProvider } from './contexts/TripsContext';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n'; // Import i18n configuration

ReactDOM.render(
  <AuthProvider>
    <TripsProvider>
      <Router>
        <App />
      </Router>
    </TripsProvider>
  </AuthProvider>,
  document.getElementById('root')
);
