import React from 'react';
import './AdminStatCard.css';

const AdminStatCard = ({ title, value, growth }) => {
  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-growth">{growth}</div>
    </div>
  );
};

export default AdminStatCard;
