import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Pricing() {
  return (
    <div
      className="container py-5"
      style={{
        marginTop: "70px",
      }}
    >
      <div className="row align-items-center">
        {/* Left Section */}

        <div className="col-lg-5 mb-5">
          <span
            style={{
              backgroundColor: "#EAF3FF",
              color: "#387ED1",
              padding: "8px 18px",
              borderRadius: "25px",
              fontWeight: "600",
            }}
          >
            Simple Pricing
          </span>

          <h1
            className="fw-bold mt-4"
            style={{
              fontSize: "3rem",
            }}
          >
            Transparent pricing for every investor
          </h1>

          <p
            className="text-muted mt-4"
            style={{
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            TRADEX keeps investing simple with straightforward pricing, no
            hidden fees, and a modern trading experience.
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold"
            style={{
              color: "#387ED1",
              fontSize: "17px",
            }}
          >
            Explore Pricing <FaArrowRight size={12} />
          </a>
        </div>

        <div className="col-lg-1"></div>

        {/* Pricing Cards */}

        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-md-6">
              <div
                style={{
                  padding: "35px",
                  borderRadius: "20px",
                  background: "#fff",
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.06)",
                  height: "100%",
                }}
              >
                <h1
                  className="fw-bold"
                  style={{
                    color: "#387ED1",
                    fontSize: "3rem",
                  }}
                >
                  ₹0
                </h1>

                <h5 className="fw-bold mt-3">Long-term Investing</h5>

                <p className="text-muted mt-3">
                  Invest in stocks and mutual funds with no delivery charges.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                style={{
                  padding: "35px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg,#387ED1,#4A95EF)",
                  color: "#fff",
                  boxShadow: "0px 8px 25px rgba(56,126,209,.25)",
                  height: "100%",
                }}
              >
                <h1
                  className="fw-bold"
                  style={{
                    fontSize: "3rem",
                  }}
                >
                  ₹20
                </h1>

                <h5 className="fw-bold mt-3">Intraday & F&O</h5>

                <p
                  style={{
                    opacity: ".9",
                  }}
                >
                  Flat brokerage per executed order with fast trade execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
