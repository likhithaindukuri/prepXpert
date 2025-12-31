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
      style={cardStyle}
      className="topic-card"
    >
      <div style={imageContainerStyle}>
        <img
          src={topicImages[topic.id]}
          alt={topic.name}
          style={imageStyle}
        />
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{topic.name}</h3>
        <button style={buttonStyle} className="topic-button">
          Start Practice
        </button>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  padding: "1.5rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #e0e0e0",
  height: "100%",
};

const imageContainerStyle = {
  width: "100%",
  height: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  backgroundColor: "#f8f9fa",
  borderRadius: "12px",
  padding: "0.75rem",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

const contentStyle = {
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "1rem",
  marginTop: 0,
};

const buttonStyle = {
  padding: "0.625rem 1.5rem",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
  fontSize: "0.95rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(230, 126, 34, 0.3)",
  width: "100%",
};

export default TopicCard;
