import React from "react";

const MockTest = () => {
  return (
    <div className="container" style={containerStyle}>
      <h2>Mock Test</h2>
      <p>Take full-length mock tests to evaluate your preparation.</p>
      {/* Mock test features will come later */}
    </div>
  );
};

const containerStyle = {
  paddingTop: "6rem", // 🟡 Push content below fixed navbar
  paddingLeft: "1rem",
  paddingRight: "1rem",
};

export default MockTest;
