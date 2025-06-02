import React, { useState } from "react";

const QuestionCard = ({ question }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
    setShowExplanation(false); // hide explanation initially on submit
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1rem",
        backgroundColor: "#fff",
      }}
    >
      <h4>{question.question}</h4>
      {question.options.map((option, index) => (
        <div key={index}>
          <label style={{ display: "block", margin: "0.5rem 0" }}>
            <input
              type="radio"
              name={`q${question.id}`}
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              disabled={showResult} // disable options after submit
            />{" "}
            {option}
          </label>
        </div>
      ))}
      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null} // disable submit if no option selected
          style={{
            marginTop: "0.5rem",
            padding: "0.4rem 1rem",
            backgroundColor: selected !== null ? "#2ecc71" : "#95d7a7",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: selected !== null ? "pointer" : "not-allowed",
          }}
        >
          Submit
        </button>
      ) : (
        <>
          <p
            style={{
              marginTop: "0.5rem",
              color: selected === question.answer ? "green" : "red",
            }}
          >
            {selected === question.answer
              ? "Correct!"
              : `Wrong! Correct answer: ${question.answer}`}
          </p>

          {/* Explanation Button */}
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            style={{
              marginTop: "0.5rem",
              padding: "0.3rem 0.8rem",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
          </button>

          {/* Explanation Text */}
          {showExplanation && (
            <div
              style={{
                marginTop: "0.7rem",
                padding: "0.8rem",
                backgroundColor: "#f0f8ff",
                borderLeft: "4px solid #3498db",
              }}
            >
              <strong>Explanation:</strong> {question.explanation}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuestionCard;
