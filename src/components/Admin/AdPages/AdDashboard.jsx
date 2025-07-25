import React from 'react';
import AdminLayout from '../AdComponents/AdminLayout'; 
import AdminStatCard from '../AdComponents/AdminStatCard';
// import "../AdminCss/AdminDashboard.css"
const stats = [
  { title: "Total Users", value: "1,234", growth: "+12%" },
  { title: "Active Teachers", value: "20", growth: "+1%" },
  { title: "Total Courses", value: "156", growth: "+12%" },
  { title: "Shop Revenue", value: "₮2.4M", growth: "+12%" },
  { title: "Monthly Revenue", value: "₮2.4M", growth: "+12%" },
  { title: "Growth Rate", value: "15.3%", growth: "+1%" },
];

const AdDashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard-grid">
        {stats.map((s, i) => (
          <AdminStatCard key={i} {...s} />
        ))}
      </div>

      <div className="recent-activity-box">
        <h2 className="section-title">Recent Activity</h2>
        <ul className="activity-list">
          <li>New teacher registered - 5 min ago</li>
          <li>New teacher registered - 5 min ago</li>
          <li>New teacher registered - 6 min ago</li>
        </ul>
      </div>
    </AdminLayout>
  );
};

export default AdDashboard;
