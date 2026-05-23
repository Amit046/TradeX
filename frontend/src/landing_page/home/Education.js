import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 text-center">
          <img
            src="/media/index-education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

        <div className="col-lg-6 col-md-12">
          <h1 className="fw-bold fs-2 mb-3">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 mb-4"
          >
            Varsity <FaArrowRight size={12} />
          </a>

          <p className="text-muted mt-3">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
          >
            TradingQ&amp;A <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
