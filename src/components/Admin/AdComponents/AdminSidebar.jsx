import React from "react";
import { NavLink } from "react-router-dom";
import "../AdminCss/AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/admin-panel"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              🏠 Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-teacher"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              👩‍🏫 Teachers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-content"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              📚 Content
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-shop"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              🛒 Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-AddUser"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              ➕ Add User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin-login"
              className={({ isActive }) =>
                `sidebar-link logout-link ${isActive ? "active-link" : ""}`
              }
            >
              🚪 Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
