import React, { useState } from "react";

const QuestionCard = ({ question, questionNumber }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
    setShowExplanation(false);
    
    // Track practice performance
    const isCorrect = selected === question.answer;
    const topicId = question.topic || "unknown";
    
    // Get current stats
    const stats = JSON.parse(localStorage.getItem("practiceStats")) || {
      totalAttempted: 0,
      totalCorrect: 0,
      totalWrong: 0,
      byTopic: {},
      recentActivity: [],
    };
    
    // Update overall stats
    stats.totalAttempted += 1;
    if (isCorrect) {
      stats.totalCorrect += 1;
    } else {
      stats.totalWrong += 1;
    }
    
    // Update topic stats
    if (!stats.byTopic[topicId]) {
      stats.byTopic[topicId] = { attempted: 0, correct: 0, wrong: 0 };
    }
    stats.byTopic[topicId].attempted += 1;
    if (isCorrect) {
      stats.byTopic[topicId].correct += 1;
    } else {
      stats.byTopic[topicId].wrong += 1;
    }
    
    // Add to recent activity
    stats.recentActivity.unshift({
      questionId: question.id,
      topic: topicId,
      correct: isCorrect,
      date: new Date().toISOString(),
    });
    
    // Keep only last 50 activities
    if (stats.recentActivity.length > 50) {
      stats.recentActivity = stats.recentActivity.slice(0, 50);
    }
    
    // Save to localStorage
    localStorage.setItem("practiceStats", JSON.stringify(stats));
  };

  const isCorrect = selected === question.answer;

  return (
    <div style={cardStyle} className="question-card">
      {/* Question Header */}
      <div style={questionHeaderStyle}>
        <div style={questionNumberBadgeStyle}>
          <span style={questionNumberTextStyle}>Q{questionNumber || question.id}</span>
        </div>
        <div style={questionContentStyle}>
          <h3 style={questionTextStyle}>{question.question}</h3>
        </div>
      </div>

      {/* Options */}
      <div style={optionsContainerStyle}>
        {question.options.map((option, index) => {
          const isSelected = selected === option;
          const isCorrectOption = option === question.answer;
          
          let optionStyle = { ...optionItemStyle };

          if (showResult) {
            if (isCorrectOption) {
              optionStyle = { ...optionStyle, ...correctOptionStyle };
            } else if (isSelected && !isCorrect) {
              optionStyle = { ...optionStyle, ...incorrectOptionStyle };
            }
          } else if (isSelected) {
            optionStyle = { ...optionStyle, ...selectedOptionStyle };
          }

          return (
            <label
              key={index}
              style={optionStyle}
              className={showResult ? "" : "option-label"}
            >
              <input
                type="radio"
                name={`q${question.id}`}
                value={option}
                checked={selected === option}
                onChange={() => setSelected(option)}
                disabled={showResult}
                style={radioInputStyle}
              />
              <span style={optionTextStyle}>{option}</span>
            </label>
          );
        })}
      </div>

      {/* Submit Button or Result */}
      {!showResult ? (
        <div style={buttonWrapperStyle}>
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            style={{
              ...submitButtonStyle,
              ...(selected === null ? disabledButtonStyle : {}),
            }}
            className="submit-button"
          >
            {selected ? "Check Answer" : "Select an option"}
          </button>
        </div>
      ) : (
        <div style={resultContainerStyle}>
          {/* Result Banner */}
          <div
            style={{
              ...resultBannerStyle,
              ...(isCorrect ? correctBannerStyle : incorrectBannerStyle),
            }}
          >
            <div style={resultIconContainerStyle}>
              <div style={{
                ...resultIconCircleStyle,
                ...(isCorrect ? correctIconCircleStyle : incorrectIconCircleStyle),
              }}>
                {isCorrect ? "✓" : "✗"}
              </div>
            </div>
            <div style={resultTextContainerStyle}>
              <div style={resultTitleStyle}>
                {isCorrect ? "Correct Answer!" : "Incorrect Answer"}
              </div>
              <div style={resultSubtitleStyle}>
                {isCorrect
                  ? "Great job! You got it right."
                  : `The correct answer is: ${question.answer}`}
              </div>
            </div>
          </div>

          {/* Explanation Section */}
          <div style={explanationSectionStyle}>
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              style={explanationToggleButtonStyle}
              className="explanation-button"
            >
              <span>{showExplanation ? "▼" : "▶"}</span>
              <span>{showExplanation ? "Hide Explanation" : "Show Explanation"}</span>
            </button>

            {showExplanation && (
              <div style={explanationContainerStyle}>
                <div style={explanationHeaderStyle}>
                  <span style={explanationIconStyle}>💡</span>
                  <span style={explanationTitleStyle}>Explanation</span>
                </div>
                <div style={explanationTextStyle}>{question.explanation}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  borderRadius: "10px",
  padding: "1.25rem",
  marginBottom: "1.25rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s ease",
  position: "relative",
};

const questionHeaderStyle = {
  display: "flex",
  gap: "0.75rem",
  marginBottom: "1.25rem",
  alignItems: "flex-start",
};

const questionNumberBadgeStyle = {
  flexShrink: 0,
  width: "32px",
  height: "32px",
  borderRadius: "6px",
  backgroundColor: "#e67e22",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 4px rgba(230, 126, 34, 0.3)",
};

const questionNumberTextStyle = {
  fontSize: "0.85rem",
  fontWeight: "700",
  color: "#ffffff",
};

const questionContentStyle = {
  flex: 1,
};

const questionTextStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#2c3e50",
  margin: 0,
  lineHeight: "1.5",
};

const optionsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.625rem",
  marginBottom: "1.25rem",
};

const optionItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "0.75rem 0.875rem",
  border: "1.5px solid #e0e0e0",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

const selectedOptionStyle = {
  borderColor: "#e67e22",
  backgroundColor: "#fff5f0",
};

const correctOptionStyle = {
  borderColor: "#27ae60",
  backgroundColor: "#e8f8f5",
};

const incorrectOptionStyle = {
  borderColor: "#e74c3c",
  backgroundColor: "#fdeaea",
};

const radioInputStyle = {
  cursor: "pointer",
  width: "16px",
  height: "16px",
  marginRight: "0.625rem",
  flexShrink: 0,
};

const optionTextStyle = {
  fontSize: "0.9rem",
  color: "#2c3e50",
  flex: 1,
  lineHeight: "1.4",
};

const buttonWrapperStyle = {
  display: "flex",
  justifyContent: "center",
};

const submitButtonStyle = {
  padding: "0.625rem 1.5rem",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  fontSize: "0.9rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 6px rgba(230, 126, 34, 0.3)",
  width: "100%",
};

const disabledButtonStyle = {
  backgroundColor: "#bdc3c7",
  cursor: "not-allowed",
  boxShadow: "none",
};

const resultContainerStyle = {
  marginTop: "1rem",
};

const resultBannerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
  padding: "0.625rem 0.875rem",
  borderRadius: "6px",
  marginBottom: "0.75rem",
};

const correctBannerStyle = {
  backgroundColor: "#e8f8f5",
  border: "1.5px solid #27ae60",
};

const incorrectBannerStyle = {
  backgroundColor: "#fdeaea",
  border: "1.5px solid #e74c3c",
};

const resultIconContainerStyle = {
  flexShrink: 0,
};

const resultIconCircleStyle = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: "#ffffff",
};

const correctIconCircleStyle = {
  backgroundColor: "#27ae60",
};

const incorrectIconCircleStyle = {
  backgroundColor: "#e74c3c",
};

const resultTextContainerStyle = {
  flex: 1,
};

const resultTitleStyle = {
  fontSize: "0.9rem",
  fontWeight: "700",
  marginBottom: "0.15rem",
  color: "#2c3e50",
};

const resultSubtitleStyle = {
  fontSize: "0.8rem",
  color: "#7f8c8d",
  lineHeight: "1.3",
};

const explanationSectionStyle = {
  marginTop: "1rem",
};

const explanationToggleButtonStyle = {
  width: "100%",
  padding: "0.625rem 0.875rem",
  backgroundColor: "#f8f9fa",
  color: "#2c3e50",
  border: "1px solid #e0e0e0",
  borderRadius: "6px",
  fontSize: "0.85rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  justifyContent: "center",
};

const explanationContainerStyle = {
  marginTop: "0.625rem",
  padding: "0.875rem",
  backgroundColor: "#f0f8ff",
  border: "1px solid #3498db",
  borderRadius: "6px",
  borderLeft: "3px solid #3498db",
};

const explanationHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "0.625rem",
};

const explanationIconStyle = {
  fontSize: "1rem",
};

const explanationTitleStyle = {
  fontSize: "0.9rem",
  fontWeight: "700",
  color: "#2c3e50",
};

const explanationTextStyle = {
  fontSize: "0.875rem",
  color: "#34495e",
  lineHeight: "1.5",
  margin: 0,
};

export default QuestionCard;
