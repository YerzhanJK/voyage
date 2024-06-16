// src/pages/home.js
import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import adventureTimeImage from '../assets/Adventure-time.webp';
import './home.css';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="container text-center" style={{ marginTop: '50px' }}>
            <h1>{t('welcome')}</h1>
            <Link to="/create-itinerary">
                <Button variant="btn btn-secondary" size="lg" style={{ marginTop: '20px', color: '' }}>
                    {t('createTrip')}
                </Button>
            </Link>
            <h4 style={{ fontStyle: 'italic' }}>{t('appDescription')}</h4>
            <img src={adventureTimeImage} alt="Adventure Time Travel Scene" className="main-image" />
        </div>
    );
}

export default Home;
