import React from "react";
import { FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 border-top pt-5">
        <h1 className="text-center fw-bold mb-5" style={{ fontSize: "3rem" }}>
          Meet the Founder
        </h1>

        {/* Left Founder Card */}

        <div className="col-lg-4 mb-4">
          <div
            className="text-center"
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "25px",
              boxShadow: "0px 10px 30px rgba(0,0,0,.08)",
              height: "100%",
            }}
          >
            <img
              src="media/hero.png"
              alt="Amit"
              style={{
                width: "230px",
                height: "230px",
                borderRadius: "50%",
                objectFit: "cover",

                /* Face fix */
                objectPosition: "center 15%",

                border: "5px solid #387ED1",

                boxShadow: "0px 10px 30px rgba(56,126,209,.25)",
              }}
            />

            <h2 className="mt-4 fw-bold">Amit</h2>

            <p
              style={{
                color: "#387ED1",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Founder & Developer, TRADEX
            </p>

            <div
              className="d-flex justify-content-center gap-4 mt-4"
              style={{
                fontSize: "28px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/-amit/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#387ED1",
                }}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/Amit046_"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#387ED1",
                }}
              >
                <FaTwitter />
              </a>

              <a
                href="https://github.com/Amit046"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#387ED1",
                }}
              >
                <FaCode />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-lg-8">
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.7rem",
            }}
          >
            Building TRADEX with technology 
          </h2>

          <p
            className="text-muted mt-4"
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            Amit is building TRADEX with the vision of creating a modern
            investing ecosystem that makes trading and investing simpler,
            smarter and more accessible for everyone.
          </p>

          <p
            className="text-muted"
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            Passionate about Artificial Intelligence, Full Stack Development and
            FinTech systems, he focuses on building practical products that
            combine clean design with real-world functionality.
          </p>

          <p
            className="text-muted"
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}
          >
            Along with web technologies, he has worked on AI-powered dashboards,
            predictive analytics, real-time applications and data-driven
            systems. TRADEX represents a journey toward building next-generation
            financial technology solutions.
          </p>

          {/* Skills */}

          <div className="row mt-5 g-4">
            <div className="col-md-4">
              <div
                style={{
                  background: "linear-gradient(135deg,#fff,#f8fbff)",

                  padding: "25px",

                  borderRadius: "18px",

                  border: "1px solid #EAF3FF",

                  boxShadow: "0px 8px 25px rgba(56,126,209,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#387ED1",
                  }}
                >
                  🤖 AI
                </h3>

                <p className="mb-0">ML & Analytics</p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                style={{
                  background: "linear-gradient(135deg,#fff,#f8fbff)",

                  padding: "25px",

                  borderRadius: "18px",

                  border: "1px solid #EAF3FF",

                  boxShadow: "0px 8px 25px rgba(56,126,209,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#387ED1",
                  }}
                >
                  💻 Full Stack
                </h3>

                <p className="mb-0">React + Node.js</p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                style={{
                  background: "linear-gradient(135deg,#fff,#f8fbff)",

                  padding: "25px",

                  borderRadius: "18px",

                  border: "1px solid #EAF3FF",

                  boxShadow: "0px 8px 25px rgba(56,126,209,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#387ED1",
                  }}
                >
                  📈 FinTech
                </h3>

                <p className="mb-0">Trading Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
