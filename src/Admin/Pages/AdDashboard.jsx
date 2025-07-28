import React from "react";
import AdminLayout from "../Components/AdminLayout";
import "../Css/admin.css";

const stats = [
  { title: "Нийт хэрэглэгч", value: "1,234", growth: "Өмнөх сараас +12% " },
  { title: "Нийт багш", value: "20", growth: "Өмнөх сараас +12%" },
  { title: "Нийт сургалт", value: "156", growth: "Өмнөх сараас +12%" },
  { title: "Дэлгүүр", value: "₮3.6M", growth: "Өмнөх сараас +12%" },
  { title: "Сарын төлөв", value: "₮7.4M", growth: "Өмнөх сараас +12%" },
  { title: "Рейтинг", value: "15.3%", growth: "Өмнөх сараас +12%" },
];

const AdDashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Хяналтын самбар</h2>

      <div className="dashboard-top">
        <div className="stat-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h4 className="stat-title">{item.title}</h4>
              <p className="stat-value">{item.value}</p>
              <span className="stat-growth">{item.growth}</span>
            </div>
          ))}
        </div>

        <div className="activity-box">
          <h3>Идэвхи</h3>
          <ul>
            <li>Шинэ багш бүртгүүллээ - 5мин өмнө</li>
            <li>Шинэ хэрэглэгч бүртгүүллээ - 15мин өмнө</li>
            <li>Хэрэглэгч худалдан авалт хийлээ - 54мин өмнө</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdDashboard;
