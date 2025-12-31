// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import RegisterForm from "./auth/RegisterForm";
import LoginForm from "./auth/LoginForm";

const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const closeModals = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModals();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <nav style={navStyle}>
        <div className="logo" style={logoStyle}>prepXpert</div>
        <ul style={ulStyle}>
          <li><NavItem to="/" label="Home" /></li>
          <li><NavItem to="/practice" label="Practice" /></li>
          <li><NavItem to="/mocktest" label="Mock Test" /></li>
          <li><NavItem to="/dashboard" label="Dashboard" /></li>
          <li><NavItem to="/results" label="Results" /></li>
        </ul>
        <div style={authButtonsStyle}>
          {!isLoggedIn ? (
            <>
              <button onClick={() => setShowRegister(true)} style={buttonStyle}>Register</button>
              <button onClick={() => setShowLogin(true)} style={buttonStyle}>Login</button>
            </>
          ) : (
            <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          )}
        </div>
      </nav>

      {showRegister && (
        <div style={modalOverlay} onClick={closeModals}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <RegisterForm
              onSuccess={() => {
                setShowRegister(false);
                setIsLoggedIn(true);
                navigate("/");
              }}
              onClose={closeModals}
            />
          </div>
        </div>
      )}

      {showLogin && (
        <div style={modalOverlay} onClick={closeModals}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <LoginForm
              onSuccess={() => {
                setShowLogin(false);
                setIsLoggedIn(true);
                navigate("/");
              }}
              onClose={closeModals}
            />
          </div>
        </div>
      )}
    </>
  );
};

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    end
    style={({ isActive }) => ({
      color: isActive ? "#e67e22" : "#ecf0f1",
      textDecoration: "none",
      fontWeight: "bold"
    })}
  >
    {label}
  </NavLink>
);

// Styles
const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "#2c3e50",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  height: "60px",
};

const logoStyle = {
  color: "#ecf0f1",
  fontSize: "24px",
  fontWeight: "bold",
};

const ulStyle = {
  display: "flex",
  listStyle: "none",
  gap: "25px",
  margin: 0,
  padding: 0,
};

const authButtonsStyle = {
  display: "flex",
  gap: "10px",
};

const buttonStyle = {
  backgroundColor: "#e67e22",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "8px 12px",
  cursor: "pointer",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent = {
  backgroundColor: "white",
  padding: "2.5rem",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "450px",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
  position: "relative",
};

export default Navbar;
