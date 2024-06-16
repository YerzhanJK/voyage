import React, { useContext, useState, useEffect } from 'react';
import { TripsContext } from '../contexts/TripsContext';
import CountryView from '../components/cardView';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CreateItinerary() {
  const { trips, addTrip, removeTrip } = useContext(TripsContext);
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = [
        {
          name: "France",
          cities: ["Paris"],
          description: "France is known for its cuisine, art, and culture.",
          itinerary: [/*...*/]
        },
        // Add other destination data here
      ];
      setDestinations(data);
    };

    fetchDestinations();
  }, []);

  const addDestination = (destination) => {
    addTrip(destination);
    navigate('/my-trips');
  };

  return (
    <div>
      <h3 className="container text-center">Create your own trip</h3>
      <p style={paragraphStyle}>
        "In the heart of every traveler lies a deep-rooted desire to explore, 
        to wander through the realms of the unknown, and to discover the treasures that await beyond the horizon.
        It's an insatiable craving, an irresistible urge that beckons us to set foot on unfamiliar lands,
        to immerse ourselves in diverse cultures, and to embrace the exhilarating beauty of the world."
      </p>
      <CountryView addDestination={addDestination} />
      <h3 className="container text-center">Added Trips</h3>
      {trips.length === 0 ? (
        <p>No trips added yet.</p>
      ) : (
        trips.map((trip, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{trip.name}</Card.Title>
              <Card.Text>
                {trip.cities.join(', ')}
              </Card.Text>
              <Button variant="danger" onClick={() => removeTrip(trip.name)}>
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  color: '#333',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

export default CreateItinerary;
