import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Practice from "./pages/Practice";
import MockTest from "./pages/MockTest";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import MockTestStart from "./pages/MockTestStart";
import Results from "./pages/Results";

import "./styles.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = () => setShowLogin(false);
  const handleRegisterSuccess = () => setShowRegister(false);

  return (
    <Router>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      {/* Show login modal */}
      {showLogin && (
        <LoginForm
          onSuccess={handleLoginSuccess}
          onClose={() => setShowLogin(false)}
        />
      )}

      {/* Show register modal */}
      {showRegister && (
        <RegisterForm
          onSuccess={handleRegisterSuccess}
          onClose={() => setShowRegister(false)}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/mocktest" element={<MockTest />} />   
        <Route path="/mocktest/start" element={<MockTestStart />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
