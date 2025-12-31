import React from "react";
import aboutImage from "../assets/about.svg";

const About = () => {
  const benefits = [
    {
      title: "Comprehensive Practice",
      description: "Access topic-wise questions in Aptitude, Reasoning, and Verbal Ability to strengthen your weak areas.",
      icon: "📚",
    },
    {
      title: "Mock Tests",
      description: "Take full-length mock tests to simulate real exam conditions and assess your readiness.",
      icon: "📝",
    },
    {
      title: "Track Progress",
      description: "Monitor your performance over time with detailed analytics and progress tracking.",
      icon: "📊",
    },
    {
      title: "Flexible Learning",
      description: "Learn at your own pace, anytime, anywhere. Practice whenever it's convenient for you.",
      icon: "⏰",
    },
  ];

  const features = [
    {
      title: "User-Friendly Interface",
      description: "Intuitive design that makes learning and practicing effortless.",
    },
    {
      title: "Secure Backend",
      description: "Your data is protected with robust security measures and authentication.",
    },
    {
      title: "Smart Test Generation",
      description: "AI-powered question selection to provide personalized practice sessions.",
    },
    {
      title: "Performance Analytics",
      description: "Detailed insights into your strengths and areas that need improvement.",
    },
  ];

  return (
    <div style={aboutContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>About <span style={accentStyle}>prepXpert</span></h1>
          <p style={heroSubtitleStyle}>
            Your trusted companion for competitive exam preparation
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={mainSectionStyle}>
        <div style={contentWrapperStyle}>
          <div style={imageContainerStyle}>
            <img src={aboutImage} alt="About prepXpert" style={imageStyle} />
          </div>
          <div style={textContainerStyle}>
            <h2 style={{ ...sectionTitleStyle, textAlign: "left" }}>Welcome to prepXpert</h2>
            <p style={descriptionStyle}>
              prepXpert is your one-stop platform to prepare for competitive exams with confidence. 
              We offer a comprehensive solution for mastering Aptitude, Reasoning, and Verbal Ability 
              through structured practice and full-length mock tests.
            </p>
            <p style={descriptionStyle}>
              Whether you're just starting your preparation journey or looking to improve your skills, 
              prepXpert helps you sharpen your abilities step by step. Our platform combines an 
              interactive UI, secure backend, and smart test generation features to provide you with 
              the best learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={benefitsSectionStyle}>
        <div style={benefitsContainerStyle}>
          <h2 style={sectionTitleStyle}>Why Choose prepXpert?</h2>
          <p style={sectionSubtitleStyle}>
            Everything you need to excel in competitive exams
          </p>
          <div style={benefitsGridStyle}>
            {benefits.map((benefit, index) => (
              <div key={index} style={benefitCardStyle} className="benefit-card">
                <div style={benefitIconStyle}>{benefit.icon}</div>
                <h3 style={benefitTitleStyle}>{benefit.title}</h3>
                <p style={benefitDescriptionStyle}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <div style={featuresContainerStyle}>
          <h2 style={sectionTitleStyle}>Key Features</h2>
          <p style={sectionSubtitleStyle}>
            Built with modern technology to deliver the best experience
          </p>
          <div style={featuresGridStyle}>
            {features.map((feature, index) => (
              <div key={index} style={featureCardStyle} className="feature-card">
                <h3 style={featureTitleStyle}>{feature.title}</h3>
                <p style={featureDescriptionStyle}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={missionSectionStyle}>
        <div style={missionContainerStyle}>
          <h2 style={missionTitleStyle}>Our Mission</h2>
          <p style={missionTextStyle}>
            To empower students and professionals with the tools and resources they need to succeed 
            in competitive exams. We believe that with the right preparation, anyone can achieve 
            their goals. prepXpert is designed to make exam preparation accessible, effective, 
            and enjoyable.
          </p>
        </div>
      </section>
    </div>
  );
};

// Styles
const aboutContainerStyle = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

const heroSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "8rem 2rem 4rem",
  color: "#ffffff",
  textAlign: "center",
};

const heroContentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const heroTitleStyle = {
  fontSize: "3.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#ecf0f1",
};

const accentStyle = {
  color: "#e67e22",
};

const heroSubtitleStyle = {
  fontSize: "1.3rem",
  color: "#ecf0f1",
  opacity: 0.9,
  margin: 0,
};

const mainSectionStyle = {
  padding: "5rem 2rem",
  backgroundColor: "#ffffff",
};

const contentWrapperStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4rem",
  flexWrap: "wrap",
};

const imageContainerStyle = {
  flex: "1 1 400px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))",
};

const textContainerStyle = {
  flex: "1 1 500px",
};

const sectionTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "1rem",
  textAlign: "center",
};

const descriptionStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  color: "#7f8c8d",
  marginBottom: "1.5rem",
};

const benefitsSectionStyle = {
  padding: "5rem 2rem",
  backgroundColor: "#f8f9fa",
};

const benefitsContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const sectionSubtitleStyle = {
  fontSize: "1.1rem",
  color: "#7f8c8d",
  textAlign: "center",
  marginBottom: "3rem",
  maxWidth: "600px",
  margin: "0 auto 3rem",
};

const benefitsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  marginTop: "3rem",
};

const benefitCardStyle = {
  backgroundColor: "#ffffff",
  padding: "2.5rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s ease",
  border: "1px solid #e0e0e0",
};

const benefitIconStyle = {
  fontSize: "3rem",
  marginBottom: "1.5rem",
};

const benefitTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#2c3e50",
  marginBottom: "1rem",
};

const benefitDescriptionStyle = {
  fontSize: "1rem",
  color: "#7f8c8d",
  lineHeight: "1.6",
  margin: 0,
};

const featuresSectionStyle = {
  padding: "5rem 2rem",
  backgroundColor: "#ffffff",
};

const featuresContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const featuresGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  marginTop: "3rem",
};

const featureCardStyle = {
  backgroundColor: "#f8f9fa",
  padding: "2rem",
  borderRadius: "12px",
  border: "2px solid #e0e0e0",
  transition: "all 0.3s ease",
};

const featureTitleStyle = {
  fontSize: "1.3rem",
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

const missionSectionStyle = {
  padding: "5rem 2rem",
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  color: "#ffffff",
};

const missionContainerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
};

const missionTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "#ecf0f1",
  marginBottom: "2rem",
};

const missionTextStyle = {
  fontSize: "1.2rem",
  lineHeight: "1.8",
  color: "#ecf0f1",
  opacity: 0.95,
  margin: 0,
};

export default About;
