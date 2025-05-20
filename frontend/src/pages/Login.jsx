import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom"; 

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/login", form);
      localStorage.setItem("user", JSON.stringify(response.data));
      setSuccess("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("User not found or incorrect password.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <div className="alert">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleLogin}>
        <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
