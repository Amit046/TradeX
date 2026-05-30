import React from "react";

const Positions = () => {
  const positions = [
    {
      stock: "NIFTY 50",
      product: "MIS",
      qty: 50,
      avg: 24500,
      ltp: 24650,
      pnl: "+750",
      change: "+0.61%",
    },
    {
      stock: "BANKNIFTY",
      product: "NRML",
      qty: 25,
      avg: 55800,
      ltp: 55500,
      pnl: "-750",
      change: "-0.54%",
    },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">📊 Open Positions</h2>

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
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((position, index) => (
              <tr key={index}>
                <td>{position.product}</td>
                <td>{position.stock}</td>
                <td>{position.qty}</td>
                <td>₹{position.avg}</td>
                <td>₹{position.ltp}</td>

                <td
                  style={{
                    color: position.pnl.includes("-") ? "#dc3545" : "#28a745",
                    fontWeight: "600",
                  }}
                >
                  {position.pnl}
                </td>

                <td
                  style={{
                    color: position.change.includes("-")
                      ? "#dc3545"
                      : "#28a745",
                  }}
                >
                  {position.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ color: "#28a745" }}>+₹750</h4>
            <p className="text-muted mb-0">Best Performing Position</p>
          </div>
        </div>

        <div className="col-md-6">
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
          >
            <h4 style={{ color: "#dc3545" }}>-₹750</h4>
            <p className="text-muted mb-0">Loss Making Position</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;
