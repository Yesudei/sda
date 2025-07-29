import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Admin.css";
import { UserContext } from "../../UserContext";
const AdminSidebar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>
          {user?.firstName && user?.lastName
            ? `${user.firstName} ${user.lastName}`
            : "Админ"}
        </h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/admin/panel"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              🏠 Дашбоард
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/teacher"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              👩‍🏫 Багш
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/content"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              📚 Контент
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/shop"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              🛒 Дэлгүүр
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/financial"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              🛒 Санхүү
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/adduser"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              ➕ Хэрэглэгч нэмэх
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              ⚙️ Тохиргоо
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/login"
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
