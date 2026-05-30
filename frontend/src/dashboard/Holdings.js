import React from "react";

const Holdings = () => {
  const holdings = [
    {
      stock: "RELIANCE",
      qty: 10,
      avg: 2500,
      ltp: 2850,
      value: 28500,
      pnl: "+3500",
      change: "+14.0%",
    },
    {
      stock: "TCS",
      qty: 5,
      avg: 3900,
      ltp: 4120,
      value: 20600,
      pnl: "+1100",
      change: "+5.64%",
    },
    {
      stock: "INFY",
      qty: 12,
      avg: 1550,
      ltp: 1620,
      value: 19440,
      pnl: "+840",
      change: "+4.51%",
    },
    {
      stock: "HDFCBANK",
      qty: 8,
      avg: 1700,
      ltp: 1780,
      value: 14240,
      pnl: "+640",
      change: "+4.70%",
    },
  ];

  return (
    <div>
      <h2 className="mb-4 fw-bold">📈 My Holdings</h2>

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
          overflowX: "auto",
        }}
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&L</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((item, index) => (
              <tr key={index}>
                <td>
                  <strong>{item.stock}</strong>
                </td>
                <td>{item.qty}</td>
                <td>₹{item.avg}</td>
                <td>₹{item.ltp}</td>
                <td>₹{item.value.toLocaleString()}</td>

                <td style={{ color: "#28a745" }}>{item.pnl}</td>

                <td style={{ color: "#28a745" }}>{item.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h4>₹29,875</h4>
            <p className="text-muted mb-0">Total Investment</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h4>₹31,429</h4>
            <p className="text-muted mb-0">Current Value</p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ color: "#28a745" }}>+₹1,553</h4>
            <p className="text-muted mb-0">Total Profit (+5.20%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
