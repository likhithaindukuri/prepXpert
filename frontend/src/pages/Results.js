import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const Results = () => {
  const navigate = useNavigate();
  const result = JSON.parse(localStorage.getItem("mockResult")) || { 
    total: 0, 
    correct: 0, 
    wrong: 0,
    wrongQuestions: [],
    date: null
  };
  const wrong = result.wrong || (result.total - result.correct);
  const percentage = result.total > 0 ? Math.round((result.correct / result.total) * 100) : 0;

  const data = [
    { name: "Correct", value: result.correct },
    { name: "Wrong", value: wrong },
  ];

  const COLORS = ["#27ae60", "#e74c3c"];

  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding!", emoji: "🎉", color: "#27ae60" };
    if (percentage >= 75) return { message: "Great Job!", emoji: "👏", color: "#2ecc71" };
    if (percentage >= 60) return { message: "Good Effort!", emoji: "👍", color: "#f39c12" };
    if (percentage >= 40) return { message: "Keep Practicing!", emoji: "💪", color: "#e67e22" };
    return { message: "Don't Give Up!", emoji: "📚", color: "#e74c3c" };
  };

  const performance = getPerformanceMessage();

  if (result.total === 0) {
    return (
      <div style={noResultContainerStyle}>
        <div style={noResultCardStyle}>
          <div style={noResultIconStyle}>📊</div>
          <h2 style={noResultTitleStyle}>No Test Results Found</h2>
          <p style={noResultTextStyle}>
            You haven't taken any mock test yet. Take a test to see your results here!
          </p>
          <button
            onClick={() => navigate("/mocktest")}
            style={actionButtonStyle}
            className="action-button"
          >
            Take Mock Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={resultsContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>Test Complete!</h1>
          <p style={heroSubtitleStyle}>Here's how you performed</p>
        </div>
      </section>

      {/* Results Section */}
      <section style={resultsSectionStyle}>
        <div style={resultsContentStyle}>
          {/* Score and Chart Section */}
          <div style={scoreChartContainerStyle}>
            {/* Left: Percentage */}
            <div style={scoreLeftStyle}>
              <div style={scoreCircleStyle}>
                <div style={scorePercentageStyle}>{percentage}%</div>
                <div style={scoreLabelStyle}>Score</div>
              </div>
              <div style={{ ...performanceMessageStyle, color: performance.color }}>
                {performance.message}
              </div>
            </div>

            {/* Right: Pie Chart */}
            <div style={chartRightStyle}>
              <h3 style={chartTitleStyle}>Performance Breakdown</h3>
              <div style={chartWrapperStyle}>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div style={statsGridStyle}>
            <div style={statCardStyle} className="stat-card">
              <div style={statIconStyle} style={{ backgroundColor: "#e8f8f5" }}>
                ✓
              </div>
              <div style={statValueStyle}>{result.correct}</div>
              <div style={statLabelStyle}>Correct Answers</div>
            </div>
            <div style={statCardStyle} className="stat-card">
              <div style={statIconStyle} style={{ backgroundColor: "#fdeaea" }}>
                ✗
              </div>
              <div style={statValueStyle}>{wrong}</div>
              <div style={statLabelStyle}>Incorrect Answers</div>
            </div>
          </div>

          {/* Wrong Questions Section */}
          {result.wrongQuestions && result.wrongQuestions.length > 0 && (
            <div style={wrongQuestionsSectionStyle}>
              <h3 style={wrongQuestionsTitleStyle}>
                Questions You Got Wrong ({result.wrongQuestions.length})
              </h3>
              <div style={wrongQuestionsListStyle}>
                {result.wrongQuestions.map((wq, index) => (
                  <div key={index} style={wrongQuestionCardStyle}>
                    <div style={wrongQuestionHeaderStyle}>
                      <span style={wrongQuestionNumberStyle}>Q{index + 1}</span>
                      <div style={wrongQuestionStatusStyle}>
                        <span style={wrongLabelStyle}>Your Answer: {wq.selected}</span>
                        <span style={correctLabelStyle}>Correct: {wq.correct}</span>
                      </div>
                    </div>
                    <p style={wrongQuestionTextStyle}>{wq.question}</p>
                    <div style={wrongQuestionExplanationStyle}>
                      <strong>Explanation:</strong> {wq.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={actionsContainerStyle}>
            <button
              onClick={() => navigate("/mocktest/start")}
              style={primaryActionButtonStyle}
              className="action-button"
            >
              Retake Test
            </button>
            <button
              onClick={() => navigate("/practice")}
              style={secondaryActionButtonStyle}
              className="action-button"
            >
              Practice More
            </button>
            <button
              onClick={() => navigate("/")}
              style={tertiaryActionButtonStyle}
              className="action-button"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const resultsContainerStyle = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

const heroSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "4rem 2rem 2rem",
  color: "#ffffff",
  textAlign: "center",
};

const heroContentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const scoreChartContainerStyle = {
  display: "flex",
  gap: "2rem",
  marginBottom: "3rem",
  alignItems: "center",
  flexWrap: "wrap",
};

const scoreLeftStyle = {
  flex: "1 1 300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const chartRightStyle = {
  flex: "1 1 300px",
  backgroundColor: "#f8f9fa",
  borderRadius: "12px",
  padding: "1.5rem",
  border: "1px solid #e0e0e0",
};

const heroTitleStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  color: "#ecf0f1",
};

const heroSubtitleStyle = {
  fontSize: "1rem",
  color: "#ecf0f1",
  opacity: 0.9,
  margin: 0,
};

const resultsSectionStyle = {
  padding: "4rem 2rem 5rem",
  backgroundColor: "#ffffff",
};

const resultsContentStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const scoreCircleStyle = {
  display: "flex",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  border: "5px solid #e67e22",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "0.75rem",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
};

const scorePercentageStyle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  color: "#2c3e50",
  lineHeight: 1,
};

const scoreLabelStyle = {
  fontSize: "0.85rem",
  color: "#7f8c8d",
  marginTop: "0.25rem",
};

const performanceMessageStyle = {
  fontSize: "1.1rem",
  fontWeight: "600",
  marginTop: "0.75rem",
  textAlign: "center",
};

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1.5rem",
  marginBottom: "3rem",
};

const statCardStyle = {
  backgroundColor: "#ffffff",
  padding: "2rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  border: "1px solid #e0e0e0",
  transition: "all 0.3s ease",
};

const statIconStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  margin: "0 auto 1rem",
  color: "#2c3e50",
};

const statValueStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "0.5rem",
};

const statLabelStyle = {
  fontSize: "1rem",
  color: "#7f8c8d",
};

const chartTitleStyle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#2c3e50",
  textAlign: "center",
  marginBottom: "1rem",
};

const chartWrapperStyle = {
  width: "100%",
  margin: "0 auto",
};

const actionsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
};

const actionButtonStyle = {
  padding: "1rem 2rem",
  fontSize: "1rem",
  fontWeight: "600",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: "none",
};

const primaryActionButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: "#e67e22",
  color: "#ffffff",
  boxShadow: "0 2px 8px rgba(230, 126, 34, 0.3)",
};

const secondaryActionButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: "#3498db",
  color: "#ffffff",
  boxShadow: "0 2px 8px rgba(52, 152, 219, 0.3)",
};

const tertiaryActionButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: "transparent",
  color: "#2c3e50",
  border: "2px solid #2c3e50",
};

const noResultContainerStyle = {
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
  paddingTop: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
};

const noResultCardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "4rem",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  maxWidth: "500px",
  border: "1px solid #e0e0e0",
};

const noResultIconStyle = {
  fontSize: "4rem",
  marginBottom: "1.5rem",
};

const noResultTitleStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "1rem",
};

const noResultTextStyle = {
  fontSize: "1.1rem",
  color: "#7f8c8d",
  marginBottom: "2rem",
  lineHeight: "1.6",
};

const wrongQuestionsSectionStyle = {
  marginBottom: "3rem",
};

const wrongQuestionsTitleStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "1.5rem",
};

const wrongQuestionsListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const wrongQuestionCardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e74c3c",
  borderRadius: "10px",
  padding: "1.25rem",
  boxShadow: "0 2px 8px rgba(231, 76, 60, 0.1)",
};

const wrongQuestionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.75rem",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const wrongQuestionNumberStyle = {
  fontSize: "0.9rem",
  fontWeight: "700",
  color: "#e74c3c",
  backgroundColor: "#fdeaea",
  padding: "0.25rem 0.75rem",
  borderRadius: "4px",
};

const wrongQuestionStatusStyle = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
};

const wrongLabelStyle = {
  fontSize: "0.85rem",
  color: "#e74c3c",
  fontWeight: "600",
};

const correctLabelStyle = {
  fontSize: "0.85rem",
  color: "#27ae60",
  fontWeight: "600",
};

const wrongQuestionTextStyle = {
  fontSize: "1rem",
  color: "#2c3e50",
  marginBottom: "0.75rem",
  lineHeight: "1.5",
};

const wrongQuestionExplanationStyle = {
  fontSize: "0.9rem",
  color: "#34495e",
  padding: "0.75rem",
  backgroundColor: "#f0f8ff",
  borderRadius: "6px",
  borderLeft: "3px solid #3498db",
  lineHeight: "1.5",
};

export default Results;
