import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Sidebar.css';
import { UserContext } from '../UserContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useContext(UserContext);

  const menuItems = [
    { id: 'dashboard', icon: '🏠', text: 'Profile', path: '/student-portal' },
    { id: 'lessons', icon: '📚', text: 'Хичээл', path: '/lessons' },
    { id: 'assignments', icon: '📋', text: 'Даалгавар', path: '/assignments' },
    { id: 'completion', icon: '🎯', text: 'Тоглоом', path: '/completion' },
    { id: 'payment', icon: '🏦', text: 'Төлбөр', path: '/payment' },
    { id: 'garage', icon: '🏠', text: 'Гарах', path: '/logout' },
  ];

  const handleNavigation = (item) => {
    navigate(item.path);
  };

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();          // Clear user and tokens from context/localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">⚡</div>
        <span className="logo-text">E-Drum</span>
      </div>

      <nav className="nav-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => handleNavigation(item)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.text}</span>
          </div>
        ))}
      </nav>

      <div className="settings">
        <div className="nav-item" onClick={() => navigate('/settings')}>
          <span className="nav-icon">⚙️</span>
          <span className="nav-text">Тохиргоо</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;