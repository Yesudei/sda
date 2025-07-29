import React, { useEffect, useState } from "react";
import "../Css/Admin.css";
import Rating from "@mui/material/Rating";
import axiosInstance from "../../axiosInstance"
function AdTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axiosInstance.get("user/getTeacherStat");
        console.log("Fetched teachers:", response.data);
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teacher stats:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="content-page">
      <h2>Багш нарын лист</h2>
      <div className="responsive-table-wrapper">
        <table className="content-table">
          <thead>
            <tr>
              <th>Багш</th>
              <th>Гүйцэтгэл</th>
              <th>Цалин</th>
              <th>Чансаа</th>
              <th>Бүртгүүлсэн</th>
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
                <td>
                  {teacher.courses} Сургалт
                  <br />
                  {teacher.students} Сурагч
                </td>
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
                  <button className="btn-edit">Профайл</button>
                  <button className="btn-delete">Холбогдох</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdTeachers;
