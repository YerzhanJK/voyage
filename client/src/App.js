import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CreateItinerary from './pages/create-itinerary';
import MyTrips from './pages/trips';
import Auth from './pages/auth-page';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-itinerary" element={<CreateItinerary />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
