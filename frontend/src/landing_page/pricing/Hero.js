import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1
          className="fw-bold"
          style={{
            fontSize: "4rem",
            color: "#222",
          }}
        >
          Simple Pricing
        </h1>

        <h3
          className="text-muted mt-3 fs-5"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Transparent pricing built for modern investors. No hidden charges, no
          complicated plans — just simple and affordable trading.
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-lg-4 p-4">
          <img src="media/pricing-eq.svg" alt="" style={{ height: "120px" }} />

          <h1 className="fs-3 mt-4">₹0 Account Opening</h1>

          <p className="text-muted">
            Create your TRADEX account instantly with a fully digital onboarding
            process at no cost.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <img
            src="media/other-trades.svg"
            alt=""
            style={{ height: "120px" }}
          />

          <h1 className="fs-3 mt-4">₹10 Trading Fee</h1>

          <p className="text-muted">
            Flat ₹10 brokerage on Intraday and F&O trades with lightning-fast
            order execution.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <img src="media/pricing-eq.svg" alt="" style={{ height: "120px" }} />

          <h1 className="fs-3 mt-4">Free Portfolio Tools</h1>

          <p className="text-muted">
            Track investments, monitor performance, and analyze markets using
            powerful tools.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
