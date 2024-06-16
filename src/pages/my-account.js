// src/pages/my-account.js
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Switch from 'react-switch';
import './my-account.css'; // Make sure the CSS file is imported

const MyAccount = () => {
    const { user, logout } = useAuth();
    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const [language, setLanguage] = useState('en');
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };

    const handleSave = (e) => {
        e.preventDefault();
        // Logic to save updated user data
        console.log('User data saved:', { username, email, language });
    };

    return (
        <div className="container my-account">
            <h2>My Account</h2>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Night Theme</label>
                    <Switch
                        onChange={handleThemeToggle}
                        checked={isDarkTheme}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#4caf50"
                        offColor="#ccc"
                    />
                </div>
                <button type="submit">Save</button>
            </form>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default MyAccount;
