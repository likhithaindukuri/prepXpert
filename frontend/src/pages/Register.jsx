import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

const handleRegister = async (e) => {
  e.preventDefault();

  // Password must meet strength criteria
  const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  if (!passwordRules.test(form.password)) {
    setError("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
    return;
  }

  try {
    await axios.post("http://localhost:8080/register", form);
    setSuccess("Registration successful! Redirecting to login...");
    setForm({ name: "", email: "", password: "" });

    // Redirect to login after 1.5 seconds
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  } catch (err) {
    setError("Registration failed. Email might already be in use.");
  }
};


  return (
    <div className="container">
      <h2>Register</h2>
      {error && <div className="alert">{error}</div>}
      {success && <div style={{ color: "green", marginBottom: "15px", textAlign: "center" }}>{success}</div>}
      <form onSubmit={handleRegister}>
        <InputField label="Name" type="text" name="name" value={form.name} onChange={handleChange} />
        <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <p style={{ fontSize: "12px", color: "#777", marginBottom: "10px" }}>
  * Password must be 8+ characters and include uppercase, lowercase, number, and special character.
</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
