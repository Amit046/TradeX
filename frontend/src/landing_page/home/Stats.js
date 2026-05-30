import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side */}

        <div className="col-lg-6 col-md-12 mb-5">
          <h1 className="fw-bold mb-4">Built for smarter investing</h1>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">Secure and reliable</h2>

            <p className="text-muted">
              Your investments and account activity stay protected with modern
              security systems and a trusted trading experience.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">Quick onboarding</h2>

            <p className="text-muted">
              Create your account with a smooth digital process and start
              exploring the market without unnecessary steps.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">Live market updates</h2>

            <p className="text-muted">
              Track market movement, discover trends and access insights that
              help you make better investment decisions.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold">Transparent pricing</h2>

            <p className="text-muted">
              Clear pricing structure with no surprises, so you focus on
              investing instead of worrying about hidden charges.
            </p>
          </div>

          <div className="d-flex gap-4 mt-4">
            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{
                color: "#387ED1",
              }}
            >
              Explore Products <FaArrowRight size={12} />
            </a>

            <a
              href="#"
              className="text-decoration-none fw-semibold"
              style={{
                color: "#387ED1",
                
              }}
            >
              Try Demo <FaArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Right Side (Keep your image) */}

        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="/media/ecosystem.png"
            alt="Trading ecosystem"
            className="img-fluid"
            style={{
              maxWidth: "550px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
