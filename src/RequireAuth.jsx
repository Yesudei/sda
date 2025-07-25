// RequireAuth.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import axiosInstance from './axiosInstance';

const RequireAuth = ({ children }) => {
  const { token, refreshToken, login, logout } = useContext(UserContext);
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token && refreshToken) {
        try {
          const response = await axiosInstance.post('/user/refreshToken', {
            refreshToken,
          });

          const newAccessToken = response.data.accessToken;
          const userData = response.data.user;
          login(userData, newAccessToken, refreshToken); // Reuse old refreshToken
        } catch (err) {
          console.error('Token refresh failed:', err);
          logout();
        }
      }
      setIsChecking(false);
    };

    verifyToken();
  }, [token, refreshToken, login, logout]);

  if (isChecking) return null; // or a spinner/loading component

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
