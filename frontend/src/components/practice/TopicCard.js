// src/components/practice/TopicCard.js

import React from "react";
import aptitudeImg from "../../assets/apt.svg";
import reasoningImg from "../../assets/Reas.svg";
import verbalImg from "../../assets/Verb.svg";

const topicImages = {
  aptitude: aptitudeImg,
  reasoning: reasoningImg,
  verbal: verbalImg,
};

const TopicCard = ({ topic, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(topic)}
      style={{
        width: "320px",
        height: "370px",
        backgroundColor: "#f5f6fa",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "1.5rem 1rem",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={topicImages[topic.id]}
        alt={topic.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.7rem",
          color: "#2c3e50",
          marginBottom: "0.5rem",
        }}
      >
        {topic.name}
      </h3>
      <button
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1.2rem",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Start Practice
      </button>
    </div>
  );
};

export default TopicCard;
