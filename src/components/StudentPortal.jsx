import React from 'react';
import "../css/StudentPortal.css";

const StudentPortal = () => {
  return (
    <div className="student-portal">
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">📚</div>
        </div>
        
        <nav className="nav-menu">
          <div className="nav-item active">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Дашборд</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📝</span>
            <span className="nav-text">Хичээл</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📋</span>
            <span className="nav-text">Даsgал</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">➕</span>
            <span className="nav-text">Төгслөм</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📄</span>
            <span className="nav-text">Төлбөр</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Гарах</span>
          </div>
        </nav>
        
        <div className="settings">
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Тохиргоо</span>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <header className="header">
          <div className="user-info">
            <div className="user-avatar">
              <div className="avatar-circle"></div>
            </div>
            <span className="greeting">Сайн уу, ...</span>
          </div>
          
          <div className="progress-section">
            <div className="progress-circle">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  fill="none" 
                  stroke="#e0e7ff" 
                  strokeWidth="8"
                />
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="125.6"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
                <text x="60" y="65" textAnchor="middle" className="progress-text">45%</text>
              </svg>
            </div>
            <div className="progress-info">
              <div className="progress-label">1 7хонор</div>
              <div className="progress-sublabel">Сар</div>
              <div className="progress-detail">80%</div>
            </div>
          </div>
          
          <div className="notification">
            <span className="notification-icon">🔔</span>
          </div>
        </header>
        
        <div className="content-area">
          <div className="lessons-section">
            <h3>Сүүлд үзсэн хичээл</h3>
            <div className="lesson-list">
              <div className="lesson-item">Видео хичээл 2</div>
              <div className="lesson-item">Видео хичээл 1</div>
              <div className="lesson-item">Видео хичээл 5</div>
              <div className="lesson-item">Видео хичээл 10</div>
            </div>
          </div>
          
          <div className="activity-section">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-text">Amit commented on "Basic Rhythms" lesson</div>
                <div className="activity-time">5 min ago</div>
              </div>
              <div className="activity-item">
                <div className="activity-text">New course</div>
                <div className="activity-time">5 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;