import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Top Heading */}

      <div
        className="row mt-5 mb-5 text-center"
        style={{
          padding: "80px 20px",
          borderRadius: "30px",
          background: "linear-gradient(135deg,#F7FAFF,#EDF5FF)",
        }}
      >
        <div className="col">
          <span
            style={{
              background: "#EAF3FF",
              color: "#387ED1",
              padding: "8px 18px",
              borderRadius: "25px",
              fontWeight: "600",
            }}
          >
            About TRADEX
          </span>

          <h1
            className="fw-bold mt-4"
            style={{
              fontSize: "3.5rem",
              lineHeight: "1.3",
            }}
          >
            Building the future of{" "}
            <span style={{ color: "#387ED1" }}>investing</span>
            <br />
            through simplicity, speed & technology
          </h1>

          <p
            className="text-muted mt-4 mx-auto"
            style={{
              maxWidth: "800px",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            TRADEX is designed to make investing easier, smarter and more
            accessible through a modern technology-driven experience.
          </p>
        </div>
      </div>

      {/* Content Section */}

      <div className="row mt-5 g-4">
        <div className="col-lg-6">
          <div
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "25px",
              height: "100%",
              boxShadow: "0px 10px 25px rgba(0,0,0,.05)",
            }}
          >
            <h3
              className="fw-bold mb-4"
              style={{
                color: "#387ED1",
              }}
            >
              🚀 Our Vision
            </h3>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
              }}
            >
              TRADEX was created with a simple vision: make investing easier,
              smarter and more accessible for everyone.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
              }}
            >
              We believe modern financial tools should be simple, powerful and
              available to all investors.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
              }}
            >
              Technology and clean design work together to remove unnecessary
              complexity.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "25px",
              height: "100%",
              boxShadow: "0px 10px 25px rgba(0,0,0,.05)",
            }}
          >
            <h3
              className="fw-bold mb-4"
              style={{
                color: "#387ED1",
              }}
            >
              📈 Our Mission
            </h3>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
              }}
            >
              Deliver real-time market insights, fast execution and a modern
              user experience.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
              }}
            >
              Create tools that help users learn, invest and make smarter
              financial decisions.
            </p>

            <p
              className="text-muted"
              style={{
                lineHeight: "2",
              }}
            >
              This is only the beginning of the TRADEX journey and we're
              building something bigger every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;