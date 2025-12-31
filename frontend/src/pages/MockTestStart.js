import React, { useEffect, useState } from "react";
import practiceTopics from "../data/practiceTopics";
import { useNavigate } from "react-router-dom";

const flattenQuestions = () =>
  practiceTopics.flatMap((topic) =>
    topic.questions.map((q) => ({ ...q, topic: topic.name }))
  );

// Fisher-Yates shuffle algorithm for proper randomization
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomQuestions = (n) => {
  const all = flattenQuestions();
  const shuffled = shuffleArray(all);
  return shuffled.slice(0, n);
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
    const correctAnswer = questions[index].answer;
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
    const wrongQuestions = [];

    questions.forEach((q, idx) => {
      const ans = answers[idx];
      const isCorrect = ans &&
        typeof ans.selected === "string" &&
        typeof ans.correct === "string" &&
        ans.selected.trim().toLowerCase() === ans.correct.trim().toLowerCase();
      
      if (isCorrect) {
        correctCount++;
      } else {
        wrongQuestions.push({
          question: q.question,
          selected: ans?.selected || "Not answered",
          correct: q.answer,
          explanation: q.explanation,
          options: q.options,
        });
      }
    });

    const testResult = {
      total: questions.length,
      correct: correctCount,
      wrong: wrongQuestions.length,
      wrongQuestions: wrongQuestions,
      date: new Date().toISOString(),
    };

    localStorage.setItem("mockResult", JSON.stringify(testResult));

    // Track test history for dashboard
    const mockTestsHistory = JSON.parse(localStorage.getItem("mockTestsHistory")) || [];
    mockTestsHistory.push(testResult);
    localStorage.setItem("mockTestsHistory", JSON.stringify(mockTestsHistory));

    navigate("/results");
  };

  if (questions.length === 0) {
    return (
      <div style={loadingContainerStyle}>
        <div style={loadingCardStyle}>
          <div style={loadingSpinnerStyle}>⏳</div>
          <p style={loadingTextStyle}>Loading test questions...</p>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const selected = answers[current]?.selected;
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div style={wrapperStyle}>
      {/* Progress Bar */}
      <div style={progressBarContainerStyle}>
        <div style={progressBarStyle}>
          <div style={{ ...progressFillStyle, width: `${progress}%` }}></div>
        </div>
        <div style={progressTextStyle}>
          Question {current + 1} of {questions.length}
        </div>
      </div>

      {/* Question Card */}
      <div style={cardStyle}>
        <div style={questionHeaderStyle}>
          <div style={questionNumberStyle}>
            <span style={numberLabelStyle}>Question</span>
            <span style={numberValueStyle}>{current + 1}</span>
          </div>
        </div>

        <h3 style={questionTextStyle}>{q.question}</h3>

        <div style={optionsContainerStyle}>
          {q.options.map((opt, idx) => {
            const isSelected = selected === opt;
            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(current, opt)}
                style={{
                  ...optionBtnStyle,
                  ...(isSelected ? selectedOptionStyle : {}),
                }}
                className="mock-option-button"
              >
                <span
                  style={{
                    ...optionLetterStyle,
                    ...(isSelected ? selectedLetterStyle : {}),
                  }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span style={optionTextStyle}>{opt}</span>
              </button>
            );
          })}
        </div>

        {selected && (
          <div style={buttonContainerStyle}>
            <button
              style={navBtnStyle}
              onClick={current === questions.length - 1 ? handleSubmit : handleNext}
              className="mock-nav-button"
            >
              {current === questions.length - 1 ? "Submit Test" : "Next Question →"}
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
  backgroundColor: "#f8f9fa",
  paddingTop: "5rem",
  paddingBottom: "3rem",
};

const progressBarContainerStyle = {
  maxWidth: "900px",
  margin: "0 auto 2rem",
  padding: "0 2rem",
};

const progressBarStyle = {
  width: "100%",
  height: "8px",
  backgroundColor: "#e0e0e0",
  borderRadius: "4px",
  overflow: "hidden",
  marginBottom: "0.5rem",
};

const progressFillStyle = {
  height: "100%",
  backgroundColor: "#e67e22",
  transition: "width 0.3s ease",
  borderRadius: "4px",
};

const progressTextStyle = {
  fontSize: "0.85rem",
  color: "#7f8c8d",
  textAlign: "center",
  fontWeight: "500",
};

const cardStyle = {
  background: "#ffffff",
  padding: "2rem",
  borderRadius: "12px",
  maxWidth: "900px",
  margin: "0 auto",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e0e0e0",
};

const questionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
  flexWrap: "wrap",
  gap: "0.75rem",
};

const questionNumberStyle = {
  display: "flex",
  flexDirection: "column",
};

const numberLabelStyle = {
  fontSize: "0.85rem",
  color: "#7f8c8d",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const numberValueStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#2c3e50",
};


const questionTextStyle = {
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#2c3e50",
  marginBottom: "1.5rem",
  lineHeight: "1.5",
};

const optionsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  marginBottom: "1.5rem",
};

const optionBtnStyle = {
  padding: "0.875rem 1.25rem",
  border: "2px solid #e0e0e0",
  borderRadius: "10px",
  fontSize: "0.95rem",
  cursor: "pointer",
  textAlign: "left",
  transition: "all 0.3s ease",
  backgroundColor: "#ffffff",
  color: "#2c3e50",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
};

const selectedOptionStyle = {
  borderColor: "#e67e22",
  backgroundColor: "#fff5f0",
  color: "#2c3e50",
};

const optionLetterStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor: "#f0f0f0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "600",
  fontSize: "0.9rem",
  color: "#2c3e50",
  flexShrink: 0,
  transition: "all 0.3s ease",
};

const selectedLetterStyle = {
  backgroundColor: "#e67e22",
  color: "#ffffff",
};

const optionTextStyle = {
  flex: 1,
  lineHeight: "1.5",
};

const buttonContainerStyle = {
  marginTop: "2rem",
  display: "flex",
  justifyContent: "flex-end",
};

const navBtnStyle = {
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(230, 126, 34, 0.3)",
};

const loadingContainerStyle = {
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
  paddingTop: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const loadingCardStyle = {
  textAlign: "center",
  padding: "3rem",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
};

const loadingSpinnerStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
};

const loadingTextStyle = {
  fontSize: "1rem",
  color: "#7f8c8d",
  margin: 0,
};

export default MockTestStart;
