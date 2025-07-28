import React, { useEffect, useState } from "react";
import "../Css/Admin.css";
import Rating from "@mui/material/Rating";
import PersonIcon from '@mui/icons-material/Person';       // Profile icon
import PhoneIcon from '@mui/icons-material/Phone'; 

function AdTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const tempTeachers = [
      {
        id: 1,
        name: "С. Болдбаатар",
        email: "boldbaatar@example.com",
        courses: 12,
        students: 156,
        revenue: 450000,
        rating: 4.5,
        joined: "2024-08-15",
      },
      {
        id: 2,
        name: "Б. Сарантуяа",
        email: "sarantuya@example.com",
        courses: 10,
        students: 120,
        revenue: 375000,
        rating: 4.2,
        joined: "2025-06-20",
      },
      {
        id: 3,
        name: "Д. Мөнх-Эрдэнэ",
        email: "munkherdene@example.com",
        courses: 8,
        students: 98,
        revenue: 290000,
        rating: 4.0,
        joined: "2025-07-12",
      },
    ];
    setTeachers(tempTeachers);
  }, []);

  return (
    <div className="content-page">
      <h2>Багш нарын лист</h2>
      <table className="content-table">
        <thead>
          <tr>
            <th>Багш</th>
            <th>Гүйцэтгэл</th>
            <th>Цалин</th>
            <th>Чансаа</th>
            <th>бүртгүүлсэн</th>
            <th>Нэмэлт</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong>{teacher.name}</strong>
                  <span style={{ fontSize: "13px", color: "#777" }}>
                    {teacher.email}
                  </span>
                </div>
              </td>
              <td>{teacher.courses} Сургалт<br />{teacher.students} сурагч</td>
              <td className="paid">₮{teacher.revenue.toLocaleString()}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name={`rating-${teacher.id}`}
                    value={teacher.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <span style={{ marginLeft: 6 }}>{teacher.rating}</span>
                </div>
              </td>
              <td>{teacher.joined}</td>
              <td>
                <button className="btn-edit">Профайл  </button>
                <button className="btn-delete">Холбогдох</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdTeachers;
