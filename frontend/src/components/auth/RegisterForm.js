import React, { useState } from "react";
import axios from "../../api/axios";

const RegisterForm = ({ onSuccess, onClose }) => {
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
      const res = await axios.post("/register", formData);
      const data = res.data;

      if (res.status === 200 || res.status === 201) {
        alert(data.message || "Registered successfully!");
        setFormData({ name: "", email: "", password: "" });
        if (typeof onSuccess === "function") onSuccess();
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Server error. Please try again.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Create Account</h2>
        {onClose && (
          <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
            ×
          </button>
        )}
      </div>
      <p style={subtitleStyle}>Join prepXpert and start your learning journey</p>

      <form onSubmit={handleSubmit} style={formStyle}>
        {error && (
          <div style={errorStyle}>
            <span style={errorIconStyle}>⚠</span>
            <span>{error}</span>
          </div>
        )}

        <div style={inputGroupStyle}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Create Account
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  width: "100%",
  maxWidth: "420px",
  margin: "0 auto",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.5rem",
};

const titleStyle = {
  fontSize: "1.75rem",
  fontWeight: "700",
  color: "#2c3e50",
  margin: 0,
};

const subtitleStyle = {
  fontSize: "0.95rem",
  color: "#7f8c8d",
  marginBottom: "1.75rem",
  marginTop: 0,
};

const closeButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "2rem",
  color: "#7f8c8d",
  cursor: "pointer",
  padding: 0,
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "all 0.2s ease",
  lineHeight: 1,
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle = {
  padding: "0.875rem 1rem",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "2px solid #e0e0e0",
  backgroundColor: "#ffffff",
  color: "#2c3e50",
  transition: "all 0.3s ease",
  outline: "none",
  fontFamily: "inherit",
};

const buttonStyle = {
  padding: "0.875rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  marginTop: "0.5rem",
  boxShadow: "0 2px 8px rgba(230, 126, 34, 0.3)",
};

const errorStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.75rem 1rem",
  backgroundColor: "#fee",
  border: "1px solid #fcc",
  borderRadius: "8px",
  color: "#c33",
  fontSize: "0.9rem",
};

const errorIconStyle = {
  fontSize: "1.1rem",
};

export default RegisterForm;
