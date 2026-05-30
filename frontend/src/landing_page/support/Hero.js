import React, { useState } from "react";

function Hero() {
  const [search, setSearch] = useState("");

  const faqs = [
    {
      id: "faq1",
      title: "How to activate F&O trading?",
      answer:
        "Complete KYC verification and enable the Derivatives segment from your TRADEX profile settings.",
    },
    {
      id: "faq2",
      title: "Account opening process",
      answer:
        "Sign up, complete KYC, verify your PAN, Aadhaar and bank details. Your account will be activated after successful verification.",
    },
    {
      id: "faq3",
      title: "Add and withdraw funds",
      answer:
        "Add funds instantly using UPI or Net Banking. Withdrawals can be requested directly from the Funds section.",
    },
    {
      id: "faq4",
      title: "Understanding brokerage charges",
      answer:
        "TRADEX follows transparent pricing with low brokerage and no hidden charges. Check the pricing page for complete details.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #387ED1, #1f5fbf)",
        color: "#fff",
      }}
    >
      <div className="container">
        {/* Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4 className="fw-bold m-0">TRADEX Support</h4>

          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            🎫 Track Tickets
          </button>
        </div>

        <div className="row align-items-start">
          {/* Left Side */}
          <div className="col-lg-7 mb-4">
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "2.8rem",
                lineHeight: "1.3",
              }}
            >
              How can we help you today?
            </h1>

            <p
              style={{
                fontSize: "18px",
                opacity: "0.9",
              }}
            >
              Search FAQs, trading guides, account help and platform support.
            </p>

            <input
              type="text"
              placeholder="Search your question..."
              className="form-control mt-4 p-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                borderRadius: "12px",
                border: "none",
                fontSize: "16px",
              }}
            />

            <div className="mt-4 d-flex flex-wrap gap-4">
              <a
                href="#faq2"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Account Opening
              </a>

              <a
                href="#faq2"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                KYC Verification
              </a>

              <a
                href="#faq3"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Fund Management
              </a>

              <a
                href="#faq4"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Brokerage Charges
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-5">
            <div
              style={{
                background: "#fff",
                color: "#222",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <h3 className="fw-bold mb-4">🔥 Popular Topics</h3>

              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <details key={faq.id} id={faq.id} className="mb-3">
                    <summary className="fw-semibold">{faq.title}</summary>

                    <p className="mt-2 text-muted">{faq.answer}</p>
                  </details>
                ))
              ) : (
                <p className="text-muted">No matching support topics found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
