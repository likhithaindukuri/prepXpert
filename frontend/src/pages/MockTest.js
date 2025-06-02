import React from "react";
import { useNavigate } from "react-router-dom";
import testImg from "../assets/mock.svg"; 

const MockTest = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "6rem", justifyContent: "space-between", flexWrap: "wrap" }}>
      <div style={{ maxWidth: "600px", paddingRight: "2rem" }}>
        <h2>Ready to Challenge Yourself?</h2>
        <p>
          This mock test consists of 10 randomly selected questions from Aptitude, Reasoning, and Verbal Ability.
          You’ll face one question at a time. Let's see how well you do!
        </p>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/mocktest/start")}
        >
          Take Test
        </button>
      </div>
      <img src={testImg} alt="Mock Test" style={{ maxWidth: "400px", width: "100%", height: "auto" }} />
    </div>
  );
};

export default MockTest;
