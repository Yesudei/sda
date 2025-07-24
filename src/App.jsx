import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Assuming you have a Login component
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute'; // Assuming you have a PrivateRoute component
import OTPVerification from './components/OTPVerification';

// A simple Home component for demonstration
function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontSize: '2em',
      color: '#333',
    }}>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      
      {/* Protected route (requires authentication) */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;