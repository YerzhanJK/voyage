// MyTrips.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MyTrips({ trips, removeDestination }) {
    return (
        <div className="container">
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
                                <Button variant="danger" onClick={() => removeDestination(index)}>
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyTrips;
