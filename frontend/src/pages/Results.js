import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const Results = () => {
  const result = JSON.parse(localStorage.getItem("mockResult")) || { total: 0, correct: 0 };
  const wrong = result.total - result.correct;

  const data = [
    { name: "Correct", value: result.correct },
    { name: "Wrong", value: wrong },
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <div style={{ padding: "2rem", paddingTop: "6rem", textAlign: "center" }}>
      <h2>Your Mock Test Result</h2>
      <p>
        You answered {result.correct} out of {result.total} questions correctly.
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Results;
