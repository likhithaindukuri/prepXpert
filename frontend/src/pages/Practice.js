import React, { useState } from "react";
import practiceTopics from "../data/practiceTopics";
import TopicCard from "../components/practice/TopicCard";
import QuestionCard from "../components/practice/QuestionCard";

const Practice = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setCurrentPage(1); // Reset to page 1 when selecting a new topic
  };

  const totalPages = selectedTopic ? Math.ceil(selectedTopic.questions.length / questionsPerPage) : 0;
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = selectedTopic ? selectedTopic.questions.slice(startIndex, endIndex) : [];

  return (
    <div style={practiceContainerStyle}>
      {!selectedTopic ? (
        <>
          {/* Hero Section */}
          <section style={heroSectionStyle}>
            <div style={heroContentStyle}>
              <h1 style={heroTitleStyle}>
                Practice <span style={accentStyle}>Questions</span>
              </h1>
              <p style={heroSubtitleStyle}>
                Choose a topic to start practicing and improve your skills
              </p>
            </div>
          </section>

          {/* Topics Section */}
          <section style={topicsSectionStyle}>
            <div style={topicsContainerStyle}>
              <div style={topicsGridStyle}>
                {practiceTopics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    onSelect={handleTopicSelect}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <div style={questionsContainerStyle}>
          {/* Header Section */}
          <section style={headerSectionStyle}>
            <div style={headerContentStyle}>
              <button
                onClick={() => {
                  setSelectedTopic(null);
                  setCurrentPage(1); // Reset when going back
                }}
                style={backButtonStyle}
                className="back-button"
              >
                ← Back to Topics
              </button>
              <h2 style={topicTitleStyle}>
                {selectedTopic.name} Questions
              </h2>
            </div>
          </section>

          {/* Questions Section */}
          <section style={questionsSectionStyle}>
            <div style={questionsListStyle}>
              {currentQuestions.map((q, index) => (
                <QuestionCard 
                  key={q.id} 
                  question={{ ...q, topic: selectedTopic.id }} 
                  questionNumber={startIndex + index + 1} 
                />
              ))}
            </div>
            
            {/* Pagination Controls */}
            <div style={paginationContainerStyle}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                style={{
                  ...paginationButtonStyle,
                  ...(currentPage === 1 ? disabledPaginationButtonStyle : {}),
                }}
                className="pagination-button"
              >
                Previous
              </button>
              
              <span style={pageInfoStyle}>
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                style={{
                  ...paginationButtonStyle,
                  ...(currentPage === totalPages ? disabledPaginationButtonStyle : {}),
                }}
                className="pagination-button"
              >
                Next
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

// Styles
const practiceContainerStyle = {
  width: "100%",
  backgroundColor: "#f8f9fa",
};

const heroSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "4rem 2rem 1.5rem",
  color: "#ffffff",
  textAlign: "center",
};

const heroContentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const heroTitleStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  color: "#ecf0f1",
};

const accentStyle = {
  color: "#e67e22",
};

const heroSubtitleStyle = {
  fontSize: "1rem",
  color: "#ecf0f1",
  opacity: 0.9,
  margin: 0,
};

const topicsSectionStyle = {
  padding: "2rem 2rem",
  backgroundColor: "#ffffff",
};

const topicsContainerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const topicsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  justifyContent: "center",
};

const questionsContainerStyle = {
  width: "100%",
  minHeight: "100vh",
};

const headerSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "4rem 2rem 1.5rem",
  color: "#ffffff",
};

const headerContentStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const backButtonStyle = {
  marginBottom: "1rem",
  padding: "0.625rem 1.25rem",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#ffffff",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "8px",
  fontSize: "0.9rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const topicTitleStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "0.25rem",
  color: "#ecf0f1",
};


const questionsSectionStyle = {
  padding: "2rem 2rem 3rem",
  backgroundColor: "#f8f9fa",
};

const questionsListStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
};

const paginationContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
  marginTop: "2rem",
  flexWrap: "wrap",
};

const paginationButtonStyle = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#e67e22",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontSize: "0.95rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(230, 126, 34, 0.3)",
};

const disabledPaginationButtonStyle = {
  backgroundColor: "#bdc3c7",
  cursor: "not-allowed",
  boxShadow: "none",
};

const pageInfoStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#2c3e50",
};

export default Practice;
