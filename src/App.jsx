import React, { useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/register";
import OTPVerification from "./components/OTPVerification";
import Home from "./components/Home";
import Subject from "./components/Subject";
import Shop from "./components/Shop";
import Description from "./components/Description";
import ShoppingCart from "./components/ShoppingCart";   // <-- added import
import StudentPortal from "./components/StudentPortal";
import LessonFree from "./components/LessonFree";
import Assignments from "./components/Assignments";

import AdAddUser from "./Admin/Pages/AdAddUser";
import AdContent from "./Admin/Pages/AdContent";
import AdDashboard from "./Admin/Pages/AdDashboard";
import AdLogin from "./Admin/Pages/AdLogin";
import AdSettings from "./Admin/Pages/AdSettings";
import AdShop from "./Admin/Pages/AdShop";
import AdTeachers from "./Admin/Pages/AdTeachers";
import AdminLayout from "./Admin/Components/AdminLayout";
import AdFinancial from "./Admin/Pages/AdFinancial";

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
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<ShoppingCart />} /> {/* <-- new cart route */}
      <Route path="/description/:kitId" element={<Description />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OTPVerification />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="panel" element={<AdDashboard />} />
        <Route path="settings" element={<AdSettings />} />
        <Route path="addUser" element={<AdAddUser />} />
        <Route path="shop" element={<AdShop />} />
        <Route path="teacher" element={<AdTeachers />} />
        <Route path="content" element={<AdContent />} />
        <Route path="financial" element={<AdFinancial />} />
      </Route>

      <Route path="/admin/login" element={<AdLogin />} />

      {/* Protected routes */}
      <Route
        element={
          <RequireAuth>
            <LayoutWithSidebar />
          </RequireAuth>
        }
      />

      {/* Routes with sidebar */}
      <Route element={<LayoutWithSidebar />}>
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
