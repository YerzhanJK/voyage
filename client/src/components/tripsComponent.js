// trips.js
import React from 'react';
import MyTrips from '../components/myTrips';

function TripBasket({ trips }) {
    return (
        <div>
            <MyTrips trips={trips} />
        </div>
    );
}

export default TripBasket;
