import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#FFF",
        padding: "10px 0",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/logo.png"
            alt="TRADEX Logo"
            style={{
              height: "50px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {/* Dashboard Link */}
            <li className="nav-item mx-2">
              <Link
                className="btn btn-primary px-4"
                to="/dashboard"
                style={{
                  borderRadius: "8px",
                  fontWeight: "500",
                }}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
