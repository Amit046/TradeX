import React from "react";

const Funds = () => {
  return (
    <div>
      <h2 className="fw-bold mb-4">💰 Funds & Balance</h2>

      {/* Action Buttons */}

      <div className="d-flex gap-3 mb-4">
        <button className="btn btn-success px-4">
          Add Funds
        </button>

        <button className="btn btn-primary px-4">
          Withdraw
        </button>
      </div>

      {/* Summary Cards */}

      <div className="row mb-4">
        <div className="col-md-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h6 className="text-muted">Available Balance</h6>
            <h3 style={{ color: "#28a745" }}>₹4,043</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h6 className="text-muted">Used Margin</h6>
            <h3>₹3,757</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h6 className="text-muted">Total Investment</h6>
            <h3 style={{ color: "#387ED1" }}>₹29,875</h3>
          </div>
        </div>
      </div>

      {/* Fund Details */}

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h4 className="mb-4">Account Summary</h4>

        <table className="table">
          <tbody>
            <tr>
              <td>Available Margin</td>
              <td>₹4,043.10</td>
            </tr>

            <tr>
              <td>Used Margin</td>
              <td>₹3,757.30</td>
            </tr>

            <tr>
              <td>Available Cash</td>
              <td>₹4,043.10</td>
            </tr>

            <tr>
              <td>Opening Balance</td>
              <td>₹3,736.40</td>
            </tr>

            <tr>
              <td>Pay In</td>
              <td>₹4,064.00</td>
            </tr>

            <tr>
              <td>Exposure Margin</td>
              <td>₹0.00</td>
            </tr>

            <tr>
              <td>Collateral</td>
              <td>₹0.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Commodity Section */}

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          marginTop: "25px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h4>Commodity Account</h4>

        <p className="text-muted">
          You don't have an active commodity trading account.
        </p>

        <button className="btn btn-primary">
          Open Commodity Account
        </button>
      </div>
    </div>
  );
};

export default Funds;