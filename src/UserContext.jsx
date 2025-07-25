import React, { createContext, useState, useEffect } from 'react';
import { setAuthToken } from './axiosInstance';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // accessToken
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('token');
      const savedRefreshToken = localStorage.getItem('refreshToken');
      const savedUser = localStorage.getItem('user');

      if (savedToken) {
        setToken(savedToken);
        setAuthToken(savedToken);
      }
      if (savedRefreshToken) {
        setRefreshToken(savedRefreshToken);
      }
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error('Error loading from localStorage:', err);
    }
  }, []);

  const login = (userData, accessToken, newRefreshToken) => {
    setUser(userData);
    setToken(accessToken);
    setRefreshToken(newRefreshToken);
    setAuthToken(accessToken);

    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setRefreshToken(null);
    setAuthToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, token, refreshToken, login, logout, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
