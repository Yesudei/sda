// src/Teacher/Components/TeachSidebar.jsx
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../css/Teacher.css"
import { UserContext } from "../../UserContext";

const TeachSidebar = () => {
  const { user } = useContext(UserContext);
  const teacherName = user ? `${user.firstName} ${user.lastName}` : "Teacher Panel";

  return (
    <div className="teach-sidebar">
      <div className="sidebar-header">
        <h2>teacher panel</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink
              to="/teacher/panel"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              🏠 Дашбоард
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teacher/content"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              📚 Контент
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teacher/student"
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active-link" : ""}`
              }
            >
              👩‍🎓 Сурагчид
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teacher/settings"
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
              🚪 Гарах
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TeachSidebar;
