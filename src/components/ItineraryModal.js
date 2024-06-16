import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ItineraryModal = ({ show, handleClose, trip }) => {
  if (!trip) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Itinerary for {trip.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {trip.itinerary && trip.itinerary.length > 0 ? (
          <ul>
            {trip.itinerary.map((item, index) => (
              <li key={index}>
                <strong>Day {item.day}:</strong> {item.activity} <br />
                <em>Transport:</em> {item.transport} <br />
                <em>Metro Station:</em> {item.metro}
              </li>
            ))}
          </ul>
        ) : (
          <p>No itinerary available for this trip.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItineraryModal;
