import React, { useState } from "react";

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    registerUser();
  };

  const registerUser = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Registered successfully!");
        setFormData({ name: "", email: "", password: "" });
        if (typeof onSuccess === "function") onSuccess(); // Close modal & update state
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ marginBottom: "1rem" }}>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

const formStyle = {
  width: "300px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#27ae60",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default RegisterForm;
