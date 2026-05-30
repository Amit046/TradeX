import React from "react";

function CreateTicket() {
  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.7",
    color: "#555",
    fontWeight: "500",
    fontSize: "15px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    height: "100%",
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">How can we help you today?</h1>
          <p className="text-muted fs-5">
            Browse support topics and find answers instantly.
          </p>
        </div>

        {/* Trading */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div style={cardStyle}>
            <h4 className="fw-bold mb-3">📈 Trading & Orders</h4>

            <a href="" style={linkStyle}>
              Place a trade
            </a>
            <br />
            <a href="" style={linkStyle}>
              Order status
            </a>
            <br />
            <a href="" style={linkStyle}>
              Intraday trading
            </a>
            <br />
            <a href="" style={linkStyle}>
              F&O trading
            </a>
            <br />
            <a href="" style={linkStyle}>
              Market orders
            </a>
            <br />
            <a href="" style={linkStyle}>
              Order rejection issues
            </a>
          </div>
        </div>

        {/* Account */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div style={cardStyle}>
            <h4 className="fw-bold mb-3">👤 Account & KYC</h4>

            <a href="" style={linkStyle}>
              Open account
            </a>
            <br />
            <a href="" style={linkStyle}>
              Complete KYC
            </a>
            <br />
            <a href="" style={linkStyle}>
              Update PAN
            </a>
            <br />
            <a href="" style={linkStyle}>
              Update mobile number
            </a>
            <br />
            <a href="" style={linkStyle}>
              Bank account linking
            </a>
            <br />
            <a href="" style={linkStyle}>
              Profile updates
            </a>
          </div>
        </div>

        {/* Funds */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div style={cardStyle}>
            <h4 className="fw-bold mb-3">💰 Funds & Withdrawals</h4>

            <a href="" style={linkStyle}>
              Add funds
            </a>
            <br />
            <a href="" style={linkStyle}>
              Withdraw funds
            </a>
            <br />
            <a href="" style={linkStyle}>
              UPI deposits
            </a>
            <br />
            <a href="" style={linkStyle}>
              Bank transfer issues
            </a>
            <br />
            <a href="" style={linkStyle}>
              Failed transactions
            </a>
            <br />
            <a href="" style={linkStyle}>
              Payment history
            </a>
          </div>
        </div>

        {/* Portfolio */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div style={cardStyle}>
            <h4 className="fw-bold mb-3">📊 Portfolio & Investments</h4>

            <a href="" style={linkStyle}>
              Portfolio tracking
            </a>
            <br />
            <a href="" style={linkStyle}>
              Holdings
            </a>
            <br />
            <a href="" style={linkStyle}>
              P&L reports
            </a>
            <br />
            <a href="" style={linkStyle}>
              Watchlists
            </a>
            <br />
            <a href="" style={linkStyle}>
              Mutual funds
            </a>
            <br />
            <a href="" style={linkStyle}>
              Investment insights
            </a>
          </div>
        </div>

        {/* Security */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div style={cardStyle}>
            <h4 className="fw-bold mb-3">🔒 Security & Privacy</h4>

            <a href="" style={linkStyle}>
              Login issues
            </a>
            <br />
            <a href="" style={linkStyle}>
              Password reset
            </a>
            <br />
            <a href="" style={linkStyle}>
              Two-factor authentication
            </a>
            <br />
            <a href="" style={linkStyle}>
              Device management
            </a>
            <br />
            <a href="" style={linkStyle}>
              Suspicious activity
            </a>
            <br />
            <a href="" style={linkStyle}>
              Account protection
            </a>
          </div>
        </div>

        {/* Tradex */}

        <div className="col-lg-4 col-md-6 mb-4">
          <div style={cardStyle}>
            <h4 className="fw-bold mb-3">🤖 TRADEX Features</h4>

            <a href="" style={linkStyle}>
              AI market insights
            </a>
            <br />
            <a href="" style={linkStyle}>
              Analytics dashboard
            </a>
            <br />
            <a href="" style={linkStyle}>
              API access
            </a>
            <br />
            <a href="" style={linkStyle}>
              Trading tools
            </a>
            <br />
            <a href="" style={linkStyle}>
              Feature requests
            </a>
            <br />
            <a href="" style={linkStyle}>
              Platform feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
