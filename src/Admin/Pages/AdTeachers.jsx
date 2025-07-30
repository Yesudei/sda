import React, { useEffect, useState } from "react";
import "../Css/Admin.css";
import Rating from "@mui/material/Rating";
import axiosInstance from "../../axiosInstance";

function AdTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [panelVisible, setPanelVisible] = useState(false);
  const [panelMounted, setPanelMounted] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axiosInstance.get("/admin/getTeacherStat");
        setTeachers(response.data.data);
      } catch (error) {
        console.error("Error fetching teacher stats:", error);
      }
    };

    fetchTeachers();
  }, []);

  const openPanel = (teacher) => {
    setSelectedTeacher(teacher);
    setPanelMounted(true);
    setTimeout(() => setPanelVisible(true), 10);
  };

  const closePanel = () => {
    setPanelVisible(false);
    setTimeout(() => {
      setPanelMounted(false);
      setSelectedTeacher(null);
    }, 300);
  };

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
              <tr key={teacher.teacherId}>
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
                <td className="paid">
                  ₮{(teacher.revenue || 0).toLocaleString()}
                </td>
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
                  <button
                    className="btn-edit"
                    onClick={() => openPanel(teacher)}
                  >
                    Профайл
                  </button>
                  <button className="btn-delete">Холбогдох</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {panelMounted && (
        <>
          <div
            className={`teacher-profile-panel ${
              panelVisible ? "slide-in" : "slide-out"
            }`}
          >
            <button className="close-btn" onClick={closePanel}>
              ✕
            </button>

            <div className="teacher-profile-header">
              <div className="teacher-avatar">
                {selectedTeacher?.name?.[0]?.toUpperCase() || "?"}
              </div>
              <div>
                <h3>{selectedTeacher?.name}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>
                  {selectedTeacher?.email}
                </p>
              </div>
            </div>

            <div className="profile-detail">
              <strong>Сургалт:</strong> {selectedTeacher?.courses}
            </div>
            <div className="profile-detail">
              <strong>Сурагч:</strong> {selectedTeacher?.students}
            </div>
            <div className="profile-detail">
              <strong>Цалин:</strong> ₮
              {(selectedTeacher?.revenue || 0).toLocaleString()}
            </div>
            <div className="profile-detail">
              <strong>Огноо:</strong> {selectedTeacher?.joined}
            </div>
            <div className="profile-detail">
              <strong>Чансаа:</strong>
              <Rating
                name={`rating-${selectedTeacher?.id}`}
                value={selectedTeacher?.rating}
                precision={0.1}
                readOnly
                size="small"
              />
            </div>
          </div>

          <div
            className={`profile-backdrop ${panelVisible ? "active" : ""}`}
            onClick={closePanel}
          />
        </>
      )}
    </div>
  );
}

export default AdTeachers;
