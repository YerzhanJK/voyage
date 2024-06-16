import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const countries = [
    {
        name: 'France',
        cities: ['Paris'],
        description: 'France is known for its cuisine, art, and culture.',
        // Add other fields if necessary
    },
    // Add other countries here
];

function CountryView({ addDestination }) {
    const [show, setShow] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (description) => {
        setCurrentDescription(description);
        setShow(true);
    };

    return (
        <div className="d-flex flex-wrap">
            {countries.map((country, index) => (
                <Card key={index} style={{ width: '18rem', margin: '10px' }}>
                    <Card.Body>
                        <Card.Title>{country.name}</Card.Title>
                        <Card.Text>
                            {country.cities.join(', ')}
                        </Card.Text>
                        <Button variant="primary" onClick={() => addDestination(country)}>
                            Add to My Trips
                        </Button>
                        <Button variant="secondary" style={{ marginTop: '10px' }} onClick={() => handleShow(country.description)}>
                            View Description
                        </Button>
                    </Card.Body>
                </Card>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Country Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>{currentDescription}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CountryView;
