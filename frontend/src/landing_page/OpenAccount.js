import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        
        <h1 className="mt-3">Invest in Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "1.25rem",
            width: "15%",
            margin: "25px auto",
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
