import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import practiceTopics from "../data/practiceTopics";

const Dashboard = () => {
  const navigate = useNavigate();
  const [practiceStats, setPracticeStats] = useState({
    totalAttempted: 0,
    byTopic: {},
  });
  const [mockTestsAttended, setMockTestsAttended] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const stats = JSON.parse(localStorage.getItem("practiceStats")) || {
      totalAttempted: 0,
      byTopic: {},
    };
    setPracticeStats(stats);

    // Count mock tests attended
    const mockTestsHistory = JSON.parse(localStorage.getItem("mockTestsHistory")) || [];
    setMockTestsAttended(mockTestsHistory.length);
  };

  const topicBreakdown = practiceTopics.map((topic) => {
    const topicStat = practiceStats.byTopic[topic.id] || { attempted: 0 };
    return {
      name: topic.name,
      attempted: topicStat.attempted,
    };
  });

  return (
    <div style={dashboardContainerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle}>
            Your <span style={accentStyle}>Dashboard</span>
          </h1>
          <p style={heroSubtitleStyle}>
            Track your progress and performance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={contentSectionStyle}>
        <div style={contentWrapperStyle}>
          {/* Overview Cards */}
          <div style={overviewGridStyle}>
            <div style={overviewCardStyle} className="overview-card">
              <div style={overviewCardHeaderStyle}>
                <div style={overviewIconStyle} style={{ backgroundColor: "#e8f8f5" }}>
                  📝
                </div>
                <div style={overviewCardContentStyle}>
                  <div style={overviewValueStyle}>{practiceStats.totalAttempted}</div>
                  <div style={overviewLabelStyle}>Questions Attempted</div>
                </div>
              </div>
            </div>
            <div style={overviewCardStyle} className="overview-card">
              <div style={overviewCardHeaderStyle}>
                <div style={overviewIconStyle} style={{ backgroundColor: "#fff5f0" }}>
                  📊
                </div>
                <div style={overviewCardContentStyle}>
                  <div style={overviewValueStyle}>{mockTestsAttended}</div>
                  <div style={overviewLabelStyle}>Tests Attended</div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart and Table Section */}
          <div style={mainContentGridStyle}>
            {/* Chart Section */}
            <div style={chartCardStyle}>
              <div style={chartHeaderStyle}>
                <h3 style={chartTitleStyle}>Practice by Topic</h3>
              </div>
              <div style={chartContentStyle}>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={topicBreakdown}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: "#7f8c8d", fontSize: 12 }}
                      axisLine={{ stroke: "#e0e0e0" }}
                    />
                    <YAxis 
                      tick={{ fill: "#7f8c8d", fontSize: 12 }}
                      axisLine={{ stroke: "#e0e0e0" }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                      }}
                    />
                    <Bar 
                      dataKey="attempted" 
                      fill="#e67e22"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Topic Breakdown */}
            <div style={topicBreakdownCardStyle}>
              <div style={topicBreakdownHeaderStyle}>
                <h3 style={sectionTitleStyle}>Topic Breakdown</h3>
              </div>
              <div style={topicListStyle}>
                {topicBreakdown.map((stat, index) => (
                  <div key={index} style={topicItemStyle}>
                    <div style={topicNameStyle}>{stat.name}</div>
                    <div style={topicValueContainerStyle}>
                      <div style={topicValueStyle}>{stat.attempted}</div>
                      <div style={topicValueLabelStyle}>questions</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={actionsContainerStyle}>
            <button
              onClick={() => navigate("/practice")}
              style={primaryButtonStyle}
              className="action-button"
            >
              Continue Practicing
            </button>
            <button
              onClick={() => navigate("/mocktest")}
              style={secondaryButtonStyle}
              className="action-button"
            >
              Take Mock Test
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const dashboardContainerStyle = {
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

const heroSectionStyle = {
  background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
  padding: "4rem 2rem 2.5rem",
  color: "#ffffff",
  textAlign: "center",
};

const heroContentStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const heroTitleStyle = {
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "0.75rem",
  color: "#ecf0f1",
};

const accentStyle = {
  color: "#e67e22",
};

const heroSubtitleStyle = {
  fontSize: "1.1rem",
  color: "#ecf0f1",
  opacity: 0.9,
  margin: 0,
};

const contentSectionStyle = {
  padding: "3rem 2rem 4rem",
  backgroundColor: "#f8f9fa",
};

const contentWrapperStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const overviewGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  marginBottom: "2.5rem",
};

const overviewCardStyle = {
  backgroundColor: "#ffffff",
  padding: "1.75rem",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e0e0e0",
  transition: "all 0.3s ease",
};

const overviewCardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
};

const overviewCardContentStyle = {
  flex: 1,
};

const overviewIconStyle = {
  width: "56px",
  height: "56px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.75rem",
  flexShrink: 0,
};

const overviewValueStyle = {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#2c3e50",
  marginBottom: "0.25rem",
  lineHeight: 1.2,
};

const overviewLabelStyle = {
  fontSize: "0.9rem",
  color: "#7f8c8d",
  fontWeight: "500",
};

const mainContentGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
};

const chartCardStyle = {
  backgroundColor: "#ffffff",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e0e0e0",
};

const chartHeaderStyle = {
  marginBottom: "1.5rem",
  borderBottom: "2px solid #f0f0f0",
  paddingBottom: "1rem",
};

const chartTitleStyle = {
  fontSize: "1.3rem",
  fontWeight: "700",
  color: "#2c3e50",
  margin: 0,
};

const chartContentStyle = {
  marginTop: "1rem",
};

const topicBreakdownCardStyle = {
  backgroundColor: "#ffffff",
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  border: "1px solid #e0e0e0",
};

const topicBreakdownHeaderStyle = {
  marginBottom: "1.5rem",
  borderBottom: "2px solid #f0f0f0",
  paddingBottom: "1rem",
};

const sectionTitleStyle = {
  fontSize: "1.3rem",
  fontWeight: "700",
  color: "#2c3e50",
  margin: 0,
};

const topicListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const topicItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
  border: "1px solid #e0e0e0",
  transition: "all 0.2s ease",
};

const topicNameStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#2c3e50",
};

const topicValueContainerStyle = {
  display: "flex",
  alignItems: "baseline",
  gap: "0.5rem",
};

const topicValueStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#e67e22",
};

const topicValueLabelStyle = {
  fontSize: "0.85rem",
  color: "#7f8c8d",
  fontWeight: "500",
};

const actionsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  padding: "1rem 2rem",
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

const secondaryButtonStyle = {
  padding: "1rem 2rem",
  fontSize: "1rem",
  fontWeight: "600",
  backgroundColor: "#3498db",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 8px rgba(52, 152, 219, 0.3)",
};

export default Dashboard;

