import React, { useContext, useState, useEffect } from 'react';
import { TripsContext } from '../contexts/TripsContext';
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
          name: 'France',
          cities: ['Paris'],
          description: 'France is known for its cuisine, art, and culture.',
          itinerary: [
            { day: 1, activity: 'Arrive in Paris, Eiffel Tower', transport: 'Take a taxi from the airport', metro: 'Bir-Hakeim' },
            { day: 2, activity: 'Louvre Museum, Seine River Cruise', transport: 'Bus 72 from Eiffel Tower', metro: 'Palais Royal - Musée du Louvre' },
            { day: 3, activity: 'Montmartre, Sacré-Cœur Basilica', transport: 'Metro Line 2', metro: 'Anvers' },
            { day: 4, activity: 'Versailles Palace, Gardens of Versailles', transport: 'RER C from Paris', metro: 'Versailles Château Rive Gauche' },
            { day: 5, activity: 'Notre-Dame Cathedral, Sainte-Chapelle', transport: 'Walk from Hôtel de Ville', metro: 'Cité' },
            { day: 6, activity: 'Musée d’Orsay, Luxembourg Gardens', transport: 'Bus 24', metro: 'Solférino' },
            { day: 7, activity: 'Shopping on Champs-Élysées, Departure', transport: 'Metro Line 1', metro: 'Franklin D. Roosevelt' }
          ]
        },
        {
          name: 'Italy',
          cities: ['Rome'],
          description: 'Italy is known for its rich history, art, and cuisine.',
          itinerary: [
            { day: 1, activity: 'Arrive in Rome, Colosseum', transport: 'Taxi from the airport', metro: 'Colosseo' },
            { day: 2, activity: 'Vatican Museums, Sistine Chapel', transport: 'Bus 49', metro: 'Ottaviano' },
            { day: 3, activity: 'St. Peter’s Basilica, Castel Sant’Angelo', transport: 'Walk from Vatican', metro: 'Ottaviano' },
            { day: 4, activity: 'Roman Forum, Palatine Hill', transport: 'Metro Line B', metro: 'Colosseo' },
            { day: 5, activity: 'Pantheon, Piazza Navona', transport: 'Walk from Trevi Fountain', metro: 'Spagna' },
            { day: 6, activity: 'Trevi Fountain, Spanish Steps', transport: 'Metro Line A', metro: 'Spagna' },
            { day: 7, activity: 'Villa Borghese, Departure', transport: 'Walk from Spagna', metro: 'Spagna' }
          ]
        },
        {
          name: 'Turkey',
          cities: ['Istanbul'],
          description: 'Istanbul is a city that straddles Europe and Asia across the Bosphorus Strait.',
          itinerary: [
            { day: 1, activity: 'Arrive in Istanbul, Hagia Sophia', transport: 'Taxi from the airport', metro: 'Sultanahmet' },
            { day: 2, activity: 'Topkapi Palace, Basilica Cistern', transport: 'Walk from Hagia Sophia', metro: 'Sultanahmet' },
            { day: 3, activity: 'Grand Bazaar, Spice Market', transport: 'Tram T1', metro: 'Beyazit' },
            { day: 4, activity: 'Blue Mosque, Hippodrome', transport: 'Walk from Sultanahmet', metro: 'Sultanahmet' },
            { day: 5, activity: 'Bosphorus Cruise', transport: 'Walk to the dock', metro: 'Eminönü' },
            { day: 6, activity: 'Dolmabahçe Palace, Taksim Square', transport: 'Funicular F1', metro: 'Taksim' },
            { day: 7, activity: 'Istiklal Street, Departure', transport: 'Walk from Taksim', metro: 'Taksim' }
          ]
        },
        {
          name: 'United Kingdom',
          cities: ['London'],
          description: 'London is the capital and largest city of England and the United Kingdom.',
          itinerary: [
            { day: 1, activity: 'Arrive in London, Buckingham Palace', transport: 'Taxi from the airport', metro: 'Victoria' },
            { day: 2, activity: 'Tower of London, Tower Bridge', transport: 'Bus 15', metro: 'Tower Hill' },
            { day: 3, activity: 'British Museum, Covent Garden', transport: 'Metro Line Piccadilly', metro: 'Holborn' },
            { day: 4, activity: 'London Eye, Southbank', transport: 'Metro Line Jubilee', metro: 'Waterloo' },
            { day: 5, activity: 'Westminster Abbey, Big Ben', transport: 'Walk from Westminster', metro: 'Westminster' },
            { day: 6, activity: 'Hyde Park, Kensington Palace', transport: 'Metro Line Central', metro: 'Lancaster Gate' },
            { day: 7, activity: 'Shopping on Oxford Street, Departure', transport: 'Metro Line Central', metro: 'Oxford Circus' }
          ]
        },
        {
          name: 'Italy',
          cities: ['Milan'],
          description: 'Milan is known for its fashion, finance, and design.',
          itinerary: [
            { day: 1, activity: 'Arrive in Milan, Milan Cathedral', transport: 'Taxi from the airport', metro: 'Duomo' },
            { day: 2, activity: 'Galleria Vittorio Emanuele II, La Scala', transport: 'Walk from Duomo', metro: 'Duomo' },
            { day: 3, activity: 'Sforza Castle, Parco Sempione', transport: 'Metro Line M1', metro: 'Cairoli' },
            { day: 4, activity: 'Brera Art Gallery, Pinacoteca di Brera', transport: 'Walk from Cairoli', metro: 'Lanza' },
            { day: 5, activity: 'Navigli Canals', transport: 'Tram 9', metro: 'Porta Genova' },
            { day: 6, activity: 'Porta Nuova, Bosco Verticale', transport: 'Metro Line M2', metro: 'Gioia' },
            { day: 7, activity: 'Shopping on Corso Buenos Aires, Departure', transport: 'Metro Line M1', metro: 'Lima' }
          ]
        }
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
      <div className="d-flex flex-wrap justify-content-center">
        {destinations.map((destination, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{destination.name}</Card.Title>
              <Card.Text>
                {destination.cities.join(', ')}
                <br />
                {destination.description}
              </Card.Text>
              <Button variant="primary" onClick={() => addDestination(destination)}>
                Add
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <h3 className="container text-center">Added Trips</h3>
      {trips.length === 0 ? (
        <p>No trips added yet.</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {trips.map((trip, index) => (
            <Card key={index} style={{ width: '18rem', margin: '10px' }}>
              <Card.Body>
                <Card.Title>{trip.name}</Card.Title>
                <Card.Text>
                  {trip.cities.join(', ')}
                </Card.Text>
                <Button variant="danger" onClick={() => removeTrip(trip.id)}>
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
