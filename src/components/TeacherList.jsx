import React, { useEffect, useState } from "react";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/teachers?page=${page}&limit=5`)
      .then(res => res.json())
      .then(data => setTeachers(data.data || []));
  }, [page]);

  return (
    <div>
      <ul>
        {teachers.map(t => (
          <li key={t._id}>
            {t.code} - {t.name} - {t.email} - {t.position}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(p => Math.max(1, p - 1))}>⬅ Trang trước</button>
      <button onClick={() => setPage(p => p + 1)}>Trang sau ➡</button>
    </div>
  );
}
