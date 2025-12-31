import React from "react";
import { useNavigate } from "react-router-dom";
import onlineTest from "../assets/prep.svg";
import aptIcon from "../assets/apt.svg";
import reasIcon from "../assets/Reas.svg";
import verbIcon from "../assets/Verb.svg";
import mockIcon from "../assets/mock.svg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: aptIcon,
      title: "Aptitude",
      description: "Master quantitative aptitude with comprehensive practice questions",
      color: "#3498db",
    },
    {
      icon: reasIcon,
      title: "Reasoning",
      description: "Enhance your logical reasoning skills with structured practice",
      color: "#9b59b6",
    },
    {
      icon: verbIcon,
      title: "Verbal Ability",
      description: "Improve your English language skills and vocabulary",
      color: "#1abc9c",
    },
    {
      icon: mockIcon,
      title: "Mock Tests",
      description: "Test your knowledge with full-length mock examinations",
      color: "#e67e22",
    },
  ];

  return (
    <div style={homeContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <div style={heroTextStyle}>
            <h1 style={heroTitleStyle}>
              Master Your Skills with <span style={accentStyle}>prepXpert</span>
            </h1>
            <p style={heroDescriptionStyle}>
              Your one-stop platform for mastering Aptitude, Reasoning, and Verbal Ability. 
              Practice with topic-wise questions and test your skills with comprehensive mock tests.
            </p>
            <div style={ctaButtonsStyle}>
              <button
                onClick={() => navigate("/practice")}
                style={primaryButtonStyle}
                className="hero-primary-btn"
              >
                Start Practicing
              </button>
              <button
                onClick={() => navigate("/mocktest")}
                style={secondaryButtonStyle}
                className="hero-secondary-btn"
              >
                Take Mock Test
              </button>
            </div>
          </div>
          <div style={heroImageStyle}>
            <img src={onlineTest} alt="Online Test Illustration" style={imageStyle} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={aboutSectionStyle}>
        <div style={aboutContainerStyle}>
          <h2 style={aboutTitleStyle}>About prepXpert</h2>
          <p style={aboutDescriptionStyle}>
            prepXpert is your one-stop platform to prepare for competitive exams with confidence. 
            We offer comprehensive practice questions in Aptitude, Reasoning, and Verbal Ability, 
            along with full-length mock tests to assess your skills. Whether you're just starting 
            your preparation journey or looking to improve, prepXpert helps you sharpen your 
            abilities step by step.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <div style={featuresContainerStyle}>
          <h2 style={sectionTitleStyle}>What We Offer</h2>
          <p style={sectionSubtitleStyle}>
            Comprehensive preparation tools to help you excel in competitive exams
          </p>
          <div style={featuresGridStyle}>
            {features.map((feature, index) => (
              <div key={index} style={featureCardStyle} className="feature-card">
                <div style={featureIconContainerStyle}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    style={featureIconStyle}
                  />
                </div>
                <h3 style={featureTitleStyle}>{feature.title}</h3>
                <p style={featureDescriptionStyle}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsSectionStyle}>
        <div style={statsContainerStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>1000+</div>
            <div style={statLabelStyle}>Practice Questions</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>50+</div>
            <div style={statLabelStyle}>Mock Tests</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>3</div>
            <div style={statLabelStyle}>Core Subjects</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>24/7</div>
            <div style={statLabelStyle}>Available</div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const homeContainerStyle = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

const heroSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "8rem 2rem 6rem",
  color: "#ffffff",
};

const heroContentStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4rem",
  flexWrap: "wrap",
};

const heroTextStyle = {
  flex: 1,
  minWidth: "300px",
  maxWidth: "600px",
};

const heroTitleStyle = {
  fontSize: "3rem",
  fontWeight: "700",
  marginBottom: "1.5rem",
  lineHeight: "1.2",
  color: "#ecf0f1",
};

const accentStyle = {
  color: "#e67e22",
};

const heroDescriptionStyle = {
  fontSize: "1.25rem",
  lineHeight: "1.6",
  marginBottom: "2.5rem",
  color: "#ecf0f1",
  opacity: 0.9,
};

const ctaButtonsStyle = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  padding: "0.875rem 2rem",
  fontSize: "1.1rem",
  fontWeight: "600",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(230, 126, 34, 0.3)",
};

const secondaryButtonStyle = {
  padding: "0.875rem 2rem",
  fontSize: "1.1rem",
  fontWeight: "600",
  backgroundColor: "transparent",
  color: "#ffffff",
  border: "2px solid #ffffff",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const heroImageStyle = {
  flex: 1,
  minWidth: "300px",
  maxWidth: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))",
};

const aboutSectionStyle = {
  padding: "5rem 2rem",
  backgroundColor: "#ffffff",
};

const aboutContainerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const aboutTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "1.5rem",
};

const aboutDescriptionStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.8",
  color: "#7f8c8d",
  margin: 0,
};

const featuresSectionStyle = {
  padding: "5rem 2rem",
  backgroundColor: "#f8f9fa",
};

const featuresContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const sectionTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#2c3e50",
  textAlign: "center",
  marginBottom: "1rem",
};

const sectionSubtitleStyle = {
  fontSize: "1.1rem",
  color: "#7f8c8d",
  textAlign: "center",
  marginBottom: "3rem",
  maxWidth: "600px",
  margin: "0 auto 3rem",
};

const featuresGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  marginTop: "3rem",
};

const featureCardStyle = {
  backgroundColor: "#ffffff",
  padding: "2rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s ease",
  border: "1px solid #e0e0e0",
};

const featureIconContainerStyle = {
  width: "80px",
  height: "80px",
  margin: "0 auto 1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f8f9fa",
  borderRadius: "50%",
};

const featureIconStyle = {
  width: "50px",
  height: "50px",
};

const featureTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#2c3e50",
  marginBottom: "1rem",
};

const featureDescriptionStyle = {
  fontSize: "1rem",
  color: "#7f8c8d",
  lineHeight: "1.6",
  margin: 0,
};

const statsSectionStyle = {
  padding: "4rem 2rem",
  backgroundColor: "#2c3e50",
  color: "#ffffff",
};

const statsContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "3rem",
  textAlign: "center",
};

const statItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const statNumberStyle = {
  fontSize: "3rem",
  fontWeight: "700",
  color: "#e67e22",
  marginBottom: "0.5rem",
};

const statLabelStyle = {
  fontSize: "1.1rem",
  color: "#ecf0f1",
  opacity: 0.9,
};

export default Home;
