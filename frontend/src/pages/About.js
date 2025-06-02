import React from "react";

const About = () => {
  return (
    <div className="container" style={containerStyle}>
      <h2>About prepXpert</h2>
      <p>
        prepXpert is designed to help you prepare effectively for your competitive exams with
        topic-wise practice and dynamic mock tests.
      </p>
    </div>
  );
};

const containerStyle = {
  paddingTop: "6rem", // 🟡 Push content below fixed navbar
  paddingLeft: "1rem",
  paddingRight: "1rem",
};

export default About;
