import React, { useEffect, useState } from "react";
import "../../Admin/Css/Admin.css"
function TeachContent() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const mockCourses = [
      {
        id: 1,
        title: "Мэргэжлийн",
        videos: 12,
        students: 156,
        revenue: 450000,
        rating: 4.5,
        lastUpdated: "2025-07-15",
      },
      {
        id: 2,
        title: "Цохилтот",
        videos: 10,
        students: 120,
        revenue: 390000,
        rating: 4.3,
        lastUpdated: "2025-07-20",
      },
      {
        id: 3,
        title: "Анхан шат",
        videos: 8,
        students: 95,
        revenue: 280000,
        rating: 4.1,
        lastUpdated: "2025-07-10",
      },
    ];
    setCourses(mockCourses);
  }, []);

  return (
    <div className="content-page">
      <h2>Контентууд</h2>
      <table className="content-table">
        <thead>
          <tr>
            <th>Сургалт</th>
            <th>Гүйцэтгэл</th>
            <th>Цалин</th>
            <th>Чансаа</th>
            <th>Сүүлд шинэчлэгдсэн</th>
            <th>,</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.videos} Бичлэгүүд<br />{course.students} Сурагчид</td>
              <td className="paid">₮{course.revenue.toLocaleString()}</td>
              <td>{course.rating}</td>
              <td>{course.lastUpdated}</td>
              <td>
                <button className="btn-edit">Видео нэмэх</button>
                <button className="btn-delete">Дэлгэрэнгүй</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeachContent;
