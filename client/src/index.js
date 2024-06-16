import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TripsProvider } from './contexts/TripsContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <TripsProvider>
    <Router>
      <App />
    </Router>
  </TripsProvider>,
  document.getElementById('root')
);
