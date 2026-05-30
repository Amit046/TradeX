import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-lg-8">
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}
          >
            <h3
              className="fw-bold mb-4"
              style={{
                color: "#387ED1",
              }}
            >
              Why Choose TRADEX?
            </h3>

            <ul
              style={{
                textAlign: "left",
                lineHeight: "2.5",
                fontSize: "15px",
                color: "#666",
                marginBottom: "0",
              }}
            >
              <li>
                ₹0 account opening charges with a completely digital onboarding
                process.
              </li>

              <li>Zero brokerage on long-term equity investments.</li>

              <li>Flat ₹10 brokerage on Intraday and F&O orders.</li>

              <li>Real-time market tracking and portfolio monitoring.</li>

              <li>Advanced charts, analytics and trading insights.</li>

              <li>Fast order execution powered by modern infrastructure.</li>

              <li>Secure and transparent pricing with no hidden fees.</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <div
            style={{
              background: "linear-gradient(135deg,#387ED1,#2D6FC2)",
              color: "#fff",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(56,126,209,0.25)",
              height: "100%",
            }}
          >
            <h3 className="fw-bold mb-4">Pricing Snapshot</h3>

            <div className="mb-4">
              <h2 className="fw-bold">₹0</h2>
              <p>Account Opening</p>
            </div>

            <div className="mb-4">
              <h2 className="fw-bold">₹0</h2>
              <p>Equity Delivery</p>
            </div>

            <div>
              <h2 className="fw-bold">₹10</h2>
              <p>Intraday & F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

