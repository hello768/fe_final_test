import React, { useState } from "react";

export default function TeacherForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("✅ Tạo giáo viên thành công");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Tên" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="SĐT" onChange={handleChange} />
      <button type="submit">Thêm</button>
    </form>
  );
}
