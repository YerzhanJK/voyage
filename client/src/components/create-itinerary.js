// src/pages/create-itinerary.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FormControl, InputGroup } from 'react-bootstrap';
import CountryView from '../components/cardView'; // Ensure the correct import path

function CreateItinerary({ addDestination }) {
    const [search, setSearch] = useState('');

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
            <Form>
                <InputGroup className='my-3'>
                    <FormControl
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search countries'
                    />
                </InputGroup>
            </Form>
        </div>
    );
}

const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    textAlign: 'center' // Center-align the text
};

export default CreateItinerary;
