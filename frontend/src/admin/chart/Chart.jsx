import React, { useEffect, useState } from "react";
import { BarChart, Bar, Brush, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./chart.css";

// This component fetches data from the backend and displays it in a bar chart
const BarChartComponent = () => {
  const [chartData, setChartData] = useState([]); // State to hold the chart data
  const [refreshChart, setRefreshChart] = useState(false); // State to trigger chart refresh

  useEffect(() => {
    fetchData();
  }, [refreshChart]);

  // Function to fetch registration data from the backend
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/reg_dates"); 
      const result = await response.json();
      const formattedData = result.dates.map((item) => ({
        name: `${item.Year}-${item.Month}-${item.Day}`,
        "registration count": item.occurances,
      }));
      setChartData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to render the chart data for display
  return (
    <div className="chart-container">
      <h2>Registration Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Brush dataKey="name" height={15} />
          <Bar dataKey="registration count" fill="#ffa602" />
        </BarChart>
      </ResponsiveContainer>
      <button onClick={() => setRefreshChart(!refreshChart)}>Refresh Chart</button>
    </div>
    );
};

export default BarChartComponent;