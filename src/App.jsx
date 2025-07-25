import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";

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

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
