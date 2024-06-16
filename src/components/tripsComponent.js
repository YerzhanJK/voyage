// src/pages/trips.js
import React, { useContext, useState } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItineraryModal from '../components/ItineraryModal';
import './my-trips.css';

function MyTrips() {
    const { trips, removeTrip } = useContext(TripsContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedTrip, setSelectedTrip] = useState(null);

    const handleShowModal = (trip) => {
        setSelectedTrip(trip);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTrip(null);
    };

    return (
        <div>
            <h3>My Trips</h3>
            {trips.length === 0 ? (
                <p>No trips added yet.</p>
            ) : (
                <div className="d-flex flex-wrap">
                    {trips.map((trip, index) => (
                        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                            <Card.Body>
                                <Card.Title>{trip.name}</Card.Title>
                                <Card.Text>
                                    {trip.cities.join(', ')}
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleShowModal(trip)}>
                                    View Itinerary
                                </Button>
                                <Button variant="danger" onClick={() => removeTrip(trip.id)} style={{ marginLeft: '10px' }}>
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
            <ItineraryModal show={showModal} handleClose={handleCloseModal} trip={selectedTrip} />
        </div>
    );
}

export default MyTrips;
