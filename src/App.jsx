<<<<<<< Updated upstream
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login"; 
import Register from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
import StudentPortal from "./components/StudentPortal"; // Import the StudentPortal component
import Shop from "./components/Shop";
import Subject from "./components/Subject";
// import PrivateRoute from "./components/PrivateRoute"; // Uncomment if you want to protect routes
=======
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
>>>>>>> Stashed changes

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/otp-verification") {
      document.body.className = "login-page";
    } else {
      document.body.className = "home-page";
    }
  }, [location.pathname]);

  return (
    <Routes>
<<<<<<< Updated upstream
      {/* Public routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />
      
      {/* Student Portal route - accessible after login */}
      <Route path="/student-portal" element={<StudentPortal />} />
      
      {/* If you want to protect the StudentPortal route, uncomment below and comment the line above */}
      {/* <Route path="/student-portal" element={<PrivateRoute><StudentPortal /></PrivateRoute>} /> */}
=======
      {/* Default route = Home */}
      <Route path="/" element={<Home />} />
      
      {/* Auth related */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      {/* Optional separate home path (redundant but ok) */}
      <Route path="/home" element={<Home />} />
>>>>>>> Stashed changes
    </Routes>
  );
}

export default App;