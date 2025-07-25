import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
import Subject from "./components/Subject"
import Shop from "./components/Shop"
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
  const location = useLocation();

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
      {/* Public routes without sidebar */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      {/* Routes with sidebar */}
      <Route element={<LayoutWithSidebar />}>
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/lessons" element={<LessonFree />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
