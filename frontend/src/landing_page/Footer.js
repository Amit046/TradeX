import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        marginTop: "100px",
        borderTop: "1px solid #e6e6e6",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Logo + Description */}

          <div className="col-lg-4 mb-4">
            <img
              src="/media/logo.png"
              alt="TRADEX"
              style={{
                height: "45px",
                marginBottom: "20px",
              }}
            />

            <p
              style={{
                color: "#666",
                lineHeight: "1.8",
                marginTop: "20px",
              }}
            >
              TRADEX helps investors and traders access stocks, ETFs, mutual
              funds and market insights through a fast, secure and modern
              investing experience.
            </p>

            <div
              className="d-flex gap-4 mt-4"
              style={{
                fontSize: "24px",
                color: "#387ED1",
              }}
            >
              <FaTwitter style={{ cursor: "pointer" }} />
              <FaLinkedin style={{ cursor: "pointer" }} />
              <FaInstagram style={{ cursor: "pointer" }} />
              <FaYoutube style={{ cursor: "pointer" }} />
            </div>
          </div>

          {/* Company */}

          <div className="col-lg-2 col-md-6 mb-4">
            <h3 className="fw-bold mb-4" style={{ fontSize: "28px" }}>
              Company
            </h3>

            <Link className="footer-link" to="/about">
              About
            </Link>

            <Link className="footer-link" to="/careers">
              Careers
            </Link>

            <Link className="footer-link" to="/blog">
              Blog
            </Link>

            <Link className="footer-link" to="/press">
              Press
            </Link>
          </div>

          {/* Products */}

          <div className="col-lg-2 col-md-6 mb-4">
            <h3 className="fw-bold mb-4" style={{ fontSize: "28px" }}>
              Products
            </h3>

            <Link className="footer-link" to="/">
              Stocks
            </Link>

            <Link className="footer-link" to="/">
              Mutual Funds
            </Link>

            <Link className="footer-link" to="/">
              ETFs
            </Link>

            <Link className="footer-link" to="/">
              IPO
            </Link>
          </div>

          {/* Support */}

          <div className="col-lg-2 col-md-6 mb-4">
            <h3 className="fw-bold mb-4" style={{ fontSize: "28px" }}>
              Support
            </h3>

            <Link className="footer-link" to="/support">
              Help Center
            </Link>

            <Link className="footer-link" to="/contact">
              Contact
            </Link>

            <Link className="footer-link" to="/faq">
              FAQs
            </Link>
          </div>

          {/* Market */}

          <div className="col-lg-2 col-md-6 mb-4">
            <h3 className="fw-bold mb-4" style={{ fontSize: "28px" }}>
              Market
            </h3>

            <p className="market-item">NIFTY 50</p>

            <p className="market-item">SENSEX</p>

            <p className="market-item">BANK NIFTY</p>

            <p className="market-item">Top Gainers</p>
          </div>
        </div>

        <hr style={{ margin: "40px 0" }} />

        <div className="d-flex justify-content-between flex-wrap">
          <p
            style={{
              color: "#777",
            }}
          >
            © 2026 TRADEX. All rights reserved.
          </p>

          <p
            style={{
              color: "#777",
            }}
          >
            Secure • Fast • Transparent
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
