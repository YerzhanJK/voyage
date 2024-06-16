import React, { createContext, useState } from 'react';

export const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
    const [trips, setTrips] = useState([]);

    const addTrip = (trip) => {
        setTrips([...trips, trip]);
    };

    const removeTrip = (tripId) => {
        setTrips(trips.filter(trip => trip.name !== tripId));
    };

    return (
        <TripsContext.Provider value={{ trips, addTrip, removeTrip }}>
            {children}
        </TripsContext.Provider>
    );
};
