import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Summary = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Value",
        data: [20000, 22000, 25000, 24000, 28000, 31430],
        borderColor: "#387ED1",
        backgroundColor: "rgba(56,126,209,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div>
      <h2 className="mb-4 fw-bold">👋 Welcome Back, Amit</h2>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h6 className="text-muted">Available Balance</h6>
            <h2 style={{ color: "#387ED1" }}>₹3,740</h2>
            <p className="text-muted mb-0">Ready for your next investment</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h6 className="text-muted">Portfolio Value</h6>
            <h2 style={{ color: "#28a745" }}>₹31,430</h2>
            <p className="text-muted mb-0">Current holdings value</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h6 className="text-muted">Profit & Loss</h6>
            <h2 style={{ color: "#28a745" }}>+₹1,550</h2>
            <p className="text-success mb-0">+5.20% Growth</p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          marginTop: "20px",
        }}
      >
        <h4 className="mb-4">📊 Portfolio Overview</h4>

        <div className="row">
          <div className="col-md-6">
            <p>
              <strong>Total Holdings:</strong> 13
            </p>

            <p>
              <strong>Investment:</strong> ₹29,880
            </p>
          </div>

          <div className="col-md-6">
            <p>
              <strong>Current Value:</strong> ₹31,430
            </p>

            <p>
              <strong>Total Returns:</strong>{" "}
              <span style={{ color: "#28a745" }}>+₹1,550</span>
            </p>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
