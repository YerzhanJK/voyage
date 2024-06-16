// src/components/auth.js
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Auth.css';

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="auth-page">
            <div className="form-container">
                {isSignIn ? <SignInForm /> : <RegisterForm />}
                <button onClick={toggleForm}>
                    {isSignIn ? "Don't have an account? Register" : 'Already have an account? Sign In'}
                </button>
            </div>
        </div>
    );
};

const SignInForm = () => {
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Perform authentication logic here

        login({ username: email.split('@')[0] }); // Dummy logic for username
    };

    return (
        <div className="sign-in-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

const RegisterForm = () => {
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Perform registration logic here

        login({ username }); // Dummy logic for username
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button className='submit-button' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Auth;
