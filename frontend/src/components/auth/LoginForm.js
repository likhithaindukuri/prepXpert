import React, { useState } from "react";

const LoginForm = ({ onSuccess }) => {
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
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        if (typeof onSuccess === "function") onSuccess(); // Close modal & redirect
        fetchProfile(data.token);
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  const fetchProfile = async (token) => {
    try {
      const res = await fetch("http://localhost:8080/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
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
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ marginBottom: "1rem" }}>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

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

        <button type="submit" style={buttonStyle}>Login</button>
      </form>

      {profile && (
        <div style={profileStyle}>
          <h3>Welcome, {profile.name}</h3>
          <p>Email: {profile.email}</p>
        </div>
      )}
    </div>
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
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const profileStyle = {
  width: "300px",
  margin: "2rem auto",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "10px",
  backgroundColor: "#f7f7f7",
};

export default LoginForm;
