import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"; 
import Register from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
import StudentPortal from "./components/StudentPortal"; // Import the StudentPortal component
// import PrivateRoute from "./components/PrivateRoute"; // Uncomment if you want to protect routes

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      
      {/* Student Portal route - accessible after login */}
      <Route path="/student-portal" element={<StudentPortal />} />
      
      {/* If you want to protect the StudentPortal route, uncomment below and comment the line above */}
      {/* <Route path="/student-portal" element={<PrivateRoute><StudentPortal /></PrivateRoute>} /> */}
    </Routes>
  );
}

export default App;