import React from "react";
import { useNavigate } from "react-router-dom";
import testImg from "../assets/mock.svg";

const MockTest = () => {
  const navigate = useNavigate();

  return (
    <div style={mockTestContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>
            Ready to <span style={accentStyle}>Challenge</span> Yourself?
          </h1>
          <p style={heroSubtitleStyle}>
            Take a comprehensive mock test with 10 randomly selected questions
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={mainSectionStyle}>
        <div style={contentWrapperStyle}>
          <div style={textContainerStyle}>
            <h2 style={sectionTitleStyle}>Mock Test Overview</h2>
            <p style={descriptionStyle}>
              This mock test consists of 10 randomly selected questions from Aptitude, 
              Reasoning, and Verbal Ability. You'll face one question at a time, allowing 
              you to focus and think carefully about each answer.
            </p>
            <p style={descriptionStyle}>
              After completing the test, you'll receive instant results showing your 
              performance. This is a great way to assess your current level and identify 
              areas that need more practice.
            </p>
            <button
              onClick={() => navigate("/mocktest/start")}
              style={startButtonStyle}
              className="mock-test-button"
            >
              Start Mock Test
            </button>
          </div>
          <div style={imageContainerStyle}>
            <img src={testImg} alt="Mock Test" style={imageStyle} />
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const mockTestContainerStyle = {
  width: "100%",
  backgroundColor: "#f8f9fa",
};

const heroSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "4rem 2rem 1.5rem",
  color: "#ffffff",
  textAlign: "center",
};

const heroContentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const heroTitleStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  color: "#ecf0f1",
};

const accentStyle = {
  color: "#e67e22",
};

const heroSubtitleStyle = {
  fontSize: "1rem",
  color: "#ecf0f1",
  opacity: 0.9,
  margin: 0,
};

const mainSectionStyle = {
  padding: "2rem 2rem",
  backgroundColor: "#ffffff",
};

const contentWrapperStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
  flexWrap: "wrap",
};

const textContainerStyle = {
  flex: "1 1 500px",
};

const sectionTitleStyle = {
  fontSize: "1.75rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "0.75rem",
};

const descriptionStyle = {
  fontSize: "0.95rem",
  lineHeight: "1.5",
  color: "#7f8c8d",
  marginBottom: "0.75rem",
};

const startButtonStyle = {
  marginTop: "0.75rem",
  padding: "0.75rem 1.75rem",
  fontSize: "0.95rem",
  fontWeight: "600",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(230, 126, 34, 0.3)",
};

const imageContainerStyle = {
  flex: "1 1 300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  maxWidth: "280px",
  width: "100%",
  height: "auto",
  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))",
};

export default MockTest;
