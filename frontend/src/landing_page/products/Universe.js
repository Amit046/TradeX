import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
          }}
        >
          TRADEX Ecosystem
        </h1>

        <p
          className="text-muted mt-3"
          style={{
            fontSize: "18px",
          }}
        >
          Discover tools and products designed to make investing smarter and
          easier.
        </p>

        {/* Card 1 */}

        <div className="col-lg-4 p-4 mt-4">
          <div
            style={{
              padding: "30px",
              borderRadius: "20px",
              background: "#fff",
              boxShadow: "0px 8px 25px rgba(0,0,0,.06)",
              height: "100%",
            }}
          >
            <img
              src="media/dashboard.png"
              alt=""
              style={{
                width: "90px",
              }}
            />

            <h4 className="mt-4 fw-bold">Dashboard</h4>

            <p className="text-muted">
              Monitor your portfolio and market activity in real time.
            </p>
          </div>
        </div>

        {/* Card 2 */}

        <div className="col-lg-4 p-4 mt-4">
          <div
            style={{
              padding: "30px",
              borderRadius: "20px",
              background: "#fff",
              boxShadow: "0px 8px 25px rgba(0,0,0,.06)",
              height: "100%",
            }}
          >
            <img
              src="media/api.png"
              alt=""
              style={{
                width: "90px",
              }}
            />

            <h4 className="mt-4 fw-bold">TRADEX API</h4>

            <p className="text-muted">
              Build modern trading apps and connect financial services.
            </p>
          </div>
        </div>

        {/* Card 3 */}

        <div className="col-lg-4 p-4 mt-4">
          <div
            style={{
              padding: "30px",
              borderRadius: "20px",
              background: "#fff",
              boxShadow: "0px 8px 25px rgba(0,0,0,.06)",
              height: "100%",
            }}
          >
            <img
              src="media/analytics.png"
              alt=""
              style={{
                width: "90px",
              }}
            />

            <h4 className="mt-4 fw-bold">Analytics</h4>

            <p className="text-muted">
              Track trends, insights and smarter investment decisions.
            </p>
          </div>
        </div>

        <button
          className="btn btn-primary mt-5"
          style={{
            width: "220px",
            padding: "14px",
            borderRadius: "12px",
            margin: "0 auto",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Universe;
