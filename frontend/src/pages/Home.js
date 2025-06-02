import React from "react";
import onlineTest from "../assets/prep.svg"; // Use your downloaded undraw image

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="home-hero" style={heroStyle}>
        <div className="text" style={textStyle}>
          <h1>Welcome to prepXpert </h1>
          <p>
            Your one-stop platform for mastering Aptitude, Reasoning, and Verbal Ability with practice questions and mock tests.
          </p>
        </div>
        <img src={onlineTest} alt="Online Test Illustration" style={imageStyle} />
      </section>
    </div>
  );
};

// Styles
const heroStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "6rem 2rem 2rem",
  flexWrap: "wrap",
};

const textStyle = {
  flex: 1,
  maxWidth: "500px",
  paddingRight: "2rem",
};

const imageStyle = {
  maxWidth: "400px",
  width: "100%",
  height: "auto",
};

export default Home;
