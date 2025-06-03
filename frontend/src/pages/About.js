import React from "react";
import aboutImage from "../assets/about.svg";

const About = () => {
  return (
    <div className="container" style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={imageContainerStyle}>
          <img src={aboutImage} alt="About prepXpert" style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
          <h2>About prepXpert</h2>
          <p>
            prepXpert is a simple and effective platform to practice for competitive exams. It offers topic-wise questions in Aptitude, Reasoning, and Verbal Ability, along with mock tests to test your skills. Whether you're just starting or want to improve, prepXpert helps you prepare better, step by step.
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  paddingTop: "6rem",
  paddingLeft: "3rem",
  paddingRight: "1rem",
};

const contentWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap", // Responsive on smaller screens
};

const imageContainerStyle = {
  flex: "1 1 40%",
  padding: "1rem",
  textAlign: "center",
};

const textContainerStyle = {
  flex: "1 1 50%",
  padding: "3rem",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
};

export default About;
