import React, { createContext, useState, useEffect } from 'react';
import { setAuthToken } from './axiosInstance';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Restore session from localStorage
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');

      if (savedToken) {
        setToken(savedToken);
        setAuthToken(savedToken); // Set token to axios
      }

      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
        } catch (jsonErr) {
          console.error('❌ Invalid JSON in localStorage "user":', jsonErr);
          localStorage.removeItem('user'); // Clear invalid entry
        }
      }
    } catch (err) {
      console.error('❌ Error accessing localStorage:', err);
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    setAuthToken(token);

    // Save to localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setAuthToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
