import React, { useState } from "react";
import axios from "../../api/axios";

const LoginForm = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [profile, setProfile] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    loginUser();
  };

  const loginUser = async () => {
    try {
      const res = await axios.post("/login", formData);
      const data = res.data;

      if (res.status === 200) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        if (typeof onSuccess === "function") onSuccess();
        fetchProfile(data.token);
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Server error. Please try again.");
    }
  };

  const fetchProfile = async (token) => {
    try {
      const res = await axios.get("/profile");

      if (res.status === 200) {
        const data = res.data;
        setProfile(data);
      } else {
        setError("Failed to fetch profile.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching profile.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Welcome Back</h2>
        {onClose && (
          <button onClick={onClose} style={closeButtonStyle} aria-label="Close">
            ×
          </button>
        )}
      </div>
      <p style={subtitleStyle}>Sign in to continue to prepXpert</p>

      <form onSubmit={handleSubmit} style={formStyle}>
        {error && (
          <div style={errorStyle}>
            <span style={errorIconStyle}>⚠</span>
            <span>{error}</span>
          </div>
        )}

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
          Sign In
        </button>
      </form>

      {profile && (
        <div style={profileStyle}>
          <h3 style={profileTitleStyle}>Welcome, {profile.name}</h3>
          <p style={profileTextStyle}>Email: {profile.email}</p>
        </div>
      )}
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

const profileStyle = {
  marginTop: "1.5rem",
  padding: "1.25rem",
  backgroundColor: "#f8f9fa",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
};

const profileTitleStyle = {
  fontSize: "1.1rem",
  color: "#2c3e50",
  marginBottom: "0.5rem",
  marginTop: 0,
};

const profileTextStyle = {
  fontSize: "0.9rem",
  color: "#7f8c8d",
  margin: 0,
};

export default LoginForm;
