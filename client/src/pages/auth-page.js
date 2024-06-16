import './auth-pages.css'
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthPage = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement your authentication logic here
        const userData = { email, username }; // Replace with real data
        login(userData);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Implement your registration logic here
        const userData = { email, username }; // Replace with real data
        login(userData); // Automatically log in the user after registration
    };

    return (
        <div className="auth-container">
            {isRegistering ? (
                <>
                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => setIsRegistering(false)}>
                            Already have an account? Login
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                        <button type="button" onClick={() => setIsRegistering(true)}>
                            Don't have an account? Register
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default AuthPage;
