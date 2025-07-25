import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
import Subject from "./components/Subject";
import Shop from "./components/Shop";
import StudentPortal from "./components/StudentPortal";
import LessonFree from "./components/LessonFree";
import Assignments from "./components/Assignments";
import AdminLogin from "./components/Admin/AdPages/AdminLogin";
import AdminPanel from "./components/Admin/AdPages/AdminPanel";
import AdDashboard from "./components/Admin/AdPages/AdDashboard";
import AdminLayout from "./components/Admin/AdComponents/AdminLayout";
import AdShop from "./components/Admin/AdPages/AdShop";
import AdTeachers from "./components/Admin/AdPages/AdTeachers";
import AdContent from "./components/Admin/AdPages/AdContent";
import AdAddUser from "./components/Admin/AdPages/AdAddUser";
import Sidebar from "./components/Sidebar";
<<<<<<< Updated upstream

import RequireAuth from "./RequireAuth";
import { useAxiosInterceptor } from "./axiosInterceptor";

=======
import AdminLogin from "./components/Admin/AdPages/AdminLogin";
import AdminPanel from "./components/Admin/AdPages/AdminPanel";
import AdDashboard from "./components/Admin/AdPages/AdDashboard";
import AdminLayout from "./components/Admin/AdComponents/AdminLayout";
import AdShop from "./components/Admin/AdPages/AdShop";
import AdTeachers from "./components/Admin/AdPages/AdTeachers";
import AdContent from "./components/Admin/AdPages/AdContent";
import AdAddUser from "./components/Admin/AdPages/AdAddUser";
>>>>>>> Stashed changes
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
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/admin-dashboard" element={<AdDashboard />} />
      <Route path="/admin-AddUser" element={<AdAddUser />} />
      <Route path="/admin-layout" element={<AdminLayout />} />
      <Route path="/admin-shop" element={<AdShop />} />
      <Route path="/admin-teacher" element={<AdTeachers />} />
      <Route path="/admin-content" element={<AdContent />} />
<<<<<<< Updated upstream
      {/* Protected routes */}
      <Route
        element={
          <RequireAuth>
            <LayoutWithSidebar />
          </RequireAuth>
        }
      >
=======

      {/* Routes with sidebar */}
      <Route element={<LayoutWithSidebar />}>
>>>>>>> Stashed changes
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/lessons" element={<LessonFree />} />
        <Route path="/assignments" element={<Assignments />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
