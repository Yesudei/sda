<<<<<<< Updated upstream
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
<<<<<<< HEAD

import StudentPortal from "./components/StudentPortal";
import LessonFree from "./components/LessonFree";

import Sidebar from "./components/Sidebar";

const LayoutWithSidebar = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
  </div>
);
=======
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
>>>>>>> ee8fad2856f1801a3da8302941f5c317d2c3fd38

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
<<<<<<< HEAD
      {/* Public routes without sidebar */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      {/* Routes with sidebar */}
      <Route element={<LayoutWithSidebar />}>
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/lessons" element={<LessonFree />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/home" replace />} />
=======
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
>>>>>>> ee8fad2856f1801a3da8302941f5c317d2c3fd38
    </Routes>
  );
}

export default App;
