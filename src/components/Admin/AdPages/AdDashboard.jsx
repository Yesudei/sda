import React from 'react';
import AdminLayout from '../AdComponents/AdminLayout';
import AdminStatCard from '../AdComponents/AdminStatCard';
import "../AdminCss/AdminDashboard.css"

const stats = [
  { title: 'Total Users', value: '1,234', growth: '+12% from last month' },
  { title: 'Active Teachers', value: '20', growth: '+1% from last month' },
  { title: 'Total Courses', value: '156', growth: '+12% from last month' },
  { title: 'Shop Revenue', value: '₮2.4M', growth: '+12% from last month' },
  { title: 'Monthly Revenue', value: '₮2.4M', growth: '+12% from last month' },
  { title: 'Growth Rate', value: '15.3%', growth: '+1% from last month' },
];

const AdDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="stat-grid">
            {stats.map((item, index) => (
              <AdminStatCard key={index} title={item.title} value={item.value} growth={item.growth} />
            ))}
          </div>

          <div className="activity-box">
            <h3>Recent Activity</h3>
            <ul>
              <li>New teacher registered - 5 min ago</li>
              <li>New teacher registered - 5 min ago</li>
              <li>New teacher registered - 6 min ago</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdDashboard;
