import React, { createContext, useState } from 'react';

export const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
    const [trips, setTrips] = useState([]);

    const addTrip = (trip) => {
        setTrips([...trips, { ...trip, id: trips.length + 1 }]);
    };

    const removeTrip = (id) => {
        setTrips(trips.filter(trip => trip.id !== id));
    };

    return (
        <TripsContext.Provider value={{ trips, addTrip, removeTrip }}>
            {children}
        </TripsContext.Provider>
    );
};
