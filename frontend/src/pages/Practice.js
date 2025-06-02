// src/pages/Practice.js

import React, { useState } from "react";
import practiceTopics from "../data/practiceTopics";
import TopicCard from "../components/practice/TopicCard";
import QuestionCard from "../components/practice/QuestionCard";

const Practice = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div
      className="container"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "6rem 1rem 2rem", // top padding for fixed navbar
      }}
    >
      <h2
        style={{
          marginBottom: "2rem",
          fontSize: "2rem",
          color: "#2c3e50",
          textAlign: "center",
        }}
      >
        Practice Questions
      </h2>

      {!selectedTopic ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            paddingTop: "1rem",
          }}
        >
          {practiceTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              onSelect={setSelectedTopic}
            />
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedTopic(null)}
            style={{
              marginBottom: "1.5rem",
              padding: "0.5rem 1.2rem",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          >
            ← Back to Topics
          </button>
          <h3
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.5rem",
              color: "#2c3e50",
            }}
          >
            {selectedTopic.name} Questions
          </h3>
          {selectedTopic.questions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Practice;
