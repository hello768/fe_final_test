import React, { useState } from "react";

export default function PositionForm() {
  const [form, setForm] = useState({ code: "", name: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/teacher-positions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("✅ Tạo vị trí công tác thành công");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="code" placeholder="Mã vị trí" onChange={handleChange} required />
      <input name="name" placeholder="Tên vị trí" onChange={handleChange} required />
      <input name="description" placeholder="Mô tả" onChange={handleChange} />
      <button type="submit">Thêm</button>
    </form>
  );
}
