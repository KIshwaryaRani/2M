import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}`);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <br /><br />
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
