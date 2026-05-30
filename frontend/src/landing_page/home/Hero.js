import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="container"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        marginBottom: "120px",
      }}
    >
      <div className="row align-items-center">
        {/* Left Side */}

        <div className="col-lg-6">
          <span
            style={{
              backgroundColor: "#EAF3FF",
              color: "#387ED1",
              padding: "8px 18px",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Smart Trading Platform
          </span>

          <h1
            className="fw-bold mt-4"
            style={{
              fontSize: "4rem",
              lineHeight: "1.2",
              color: "#222",
            }}
          >
            Trade smarter with <span style={{ color: "#387ED1" }}>TRADEX</span>
          </h1>

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Buy stocks, invest in mutual funds, track markets in real time and
            discover opportunities through a modern investing experience built
            for everyday investors.
          </p>

          <div className="d-flex gap-3 mt-5">
            {/* Signup Button */}

            <Link
              to="/signup"
              style={{
                backgroundColor: "#387ED1",
                border: "none",
                color: "#fff",
                padding: "14px 35px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "17px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Get Started
            </Link>

            {/* Dashboard Button */}

            <Link
              to="/dashboard"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                color: "#444",
                padding: "14px 35px",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "17px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Explore Markets
            </Link>
          </div>

          {/* Feature Cards */}

          <div className="row mt-5">
            <div className="col-md-4">
              <div
                style={{
                  padding: "15px",
                  borderRadius: "15px",
                  background: "#fff",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <h5 className="fw-bold">⚡ Fast</h5>

                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Fast order execution
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                style={{
                  padding: "15px",
                  borderRadius: "15px",
                  background: "#fff",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <h5 className="fw-bold">📈 Live</h5>

                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Real-time market data
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                style={{
                  padding: "15px",
                  borderRadius: "15px",
                  background: "#fff",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.06)",
                }}
              >
                <h5 className="fw-bold">🔒 Secure</h5>

                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Protected transactions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <img
            src="/media/landing.svg"
            alt="Trading Dashboard"
            className="img-fluid"
            style={{
              maxWidth: "100%",
              transform: "scale(1.05)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
