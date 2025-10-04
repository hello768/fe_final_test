import React from "react";
import TeacherList from "./components/TeacherList";
import TeacherForm from "./components/TeacherForm";
import PositionList from "./components/PositionList";
import PositionForm from "./components/PositionForm";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Quản lý thông tin giáo viên</h1>

      <h2>Danh sách giáo viên</h2>
      <TeacherList />

      <h2>Thêm giáo viên</h2>
      <TeacherForm />

      <hr />

      <h2>Danh sách vị trí công tác</h2>
      <PositionList />

      <h2>Thêm vị trí công tác</h2>
      <PositionForm />
    </div>
  );
}
