import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';

const RequireAuth = ({ children }) => {
  const { user, token } = useContext(UserContext);
  const location = useLocation();

  if (!user || !token) {
    // Not logged in, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
