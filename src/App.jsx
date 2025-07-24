import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Assuming you have a Login component
import Register from "./components/Register";
// import PrivateRoute from "./components/PrivateRoute"; // Assuming you have a PrivateRoute component
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
