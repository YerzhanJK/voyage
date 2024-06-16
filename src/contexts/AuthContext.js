// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    const fetchedUser = {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
    };
    setUser(fetchedUser);
  }, []);

  const login = (username, password) => {
    // Simulate a login request to an API
    console.log('Logging in with', username, password);
    const loggedInUser = {
      username,
      email: `${username}@example.com`,
    };
    setUser(loggedInUser);
  };

  const logout = () => {
    setUser(null);
    // Perform additional logout operations if necessary
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
