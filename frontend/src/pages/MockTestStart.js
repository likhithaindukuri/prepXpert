import React, { useEffect, useState } from "react";
import practiceTopics from "../data/practiceTopics";
import { useNavigate } from "react-router-dom";

// Flatten all questions from all topics into a single array
const flattenQuestions = () =>
  practiceTopics.flatMap((topic) =>
    topic.questions.map((q) => ({ ...q, topic: topic.name }))
  );

// Get n random questions, keep original question ids
const getRandomQuestions = (n) => {
  const all = flattenQuestions();
  const shuffled = all.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n); // Keep original IDs intact
};

const MockTestStart = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(getRandomQuestions(10));
  }, []);

  const handleOptionSelect = (index, selectedOption) => {
    const correctAnswer = questions[index].answer; // <-- use 'answer' here
    setAnswers((prev) => ({
      ...prev,
      [index]: {
        selected: selectedOption,
        correct: correctAnswer,
      },
    }));
  };

  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleSubmit = () => {
    let correctCount = 0;

    questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (
        ans &&
        typeof ans.selected === "string" &&
        typeof ans.correct === "string" &&
        ans.selected.trim().toLowerCase() === ans.correct.trim().toLowerCase()
      ) {
        correctCount++;
      }
    });

    localStorage.setItem(
      "mockResult",
      JSON.stringify({
        total: questions.length,
        correct: correctCount,
      })
    );

    navigate("/results");
  };

  if (questions.length === 0) return <p style={{ paddingTop: "6rem" }}>Loading test...</p>;

  const q = questions[current];
  const selected = answers[current]?.selected;

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Question {current + 1} of {questions.length}
        </h2>
        <p style={questionStyle}>{q.question}</p>
        <div style={optionsStyle}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(current, opt)}
              style={{
                ...optionBtnStyle,
                backgroundColor: selected === opt ? "#3498db" : "#f0f0f0",
                color: selected === opt ? "white" : "#333",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
        {selected && (
          <div style={{ marginTop: "2rem", textAlign: "right" }}>
            <button
              style={navBtnStyle}
              onClick={current === questions.length - 1 ? handleSubmit : handleNext}
            >
              {current === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Styles
const wrapperStyle = {
  minHeight: "100vh",
  backgroundColor: "#f4f6f8",
  paddingTop: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  background: "white",
  padding: "2.5rem",
  borderRadius: "12px",
  maxWidth: "900px",
  width: "100%",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
};

const questionStyle = {
  fontSize: "1.3rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
};

const optionsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const optionBtnStyle = {
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  textAlign: "left",
  transition: "all 0.3s ease",
};

const navBtnStyle = {
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default MockTestStart;
