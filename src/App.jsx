import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";

import StudentPortal from "./components/StudentPortal";
import LessonFree from "./components/LessonFree";
import Assignments from "./components/Assignments";

import Sidebar from "./components/Sidebar";

import RequireAuth from "./RequireAuth";
import { useAxiosInterceptor } from "./axiosInterceptor";

const LayoutWithSidebar = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
  </div>
);

function App() {
  const location = useLocation();

  useAxiosInterceptor();

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/otp-verification"
    ) {
      document.body.className = "login-page";
    } else {
      document.body.className = "home-page";
    }
  }, [location.pathname]);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      {/* Protected routes */}
      <Route
        element={
          <RequireAuth>
            <LayoutWithSidebar />
          </RequireAuth>
        }
      >
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/lessons" element={<LessonFree />} />
        <Route path="/assignments" element={<Assignments />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
