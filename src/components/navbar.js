// src/components/navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Voyage-Voyage</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/my-account">{t('myAccount')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-trips">{t('myTrips')}</Link>
            </li>
          </ul>
          <div className="d-flex">
            {user ? (
              <>
                <span className="navbar-text me-3">{t('signedInAs')}: {user.name}</span>
                <button className="btn btn-outline-danger" onClick={logout}>{t('logout')}</button>
              </>
            ) : (
              <Link className="btn btn-outline-primary" to="/auth">{t('login')}</Link>
            )}
            <div className="btn-group ms-3">
              <button className="btn btn-outline-secondary" onClick={() => changeLanguage('en')}>EN</button>
              <button className="btn btn-outline-secondary" onClick={() => changeLanguage('cs')}>CS</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
