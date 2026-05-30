import React from "react";

const watchlistData = [
  { name: "RELIANCE", price: "₹2,850", change: "+1.45%" },
  { name: "TCS", price: "₹4,120", change: "+0.82%" },
  { name: "INFY", price: "₹1,620", change: "-0.35%" },
  { name: "HDFCBANK", price: "₹1,780", change: "+1.10%" },
  { name: "ICICIBANK", price: "₹1,250", change: "+0.65%" },
  { name: "SBIN", price: "₹920", change: "-0.20%" },
  { name: "ADANIENT", price: "₹3,150", change: "+2.10%" },
  { name: "TATAMOTORS", price: "₹980", change: "+1.85%" },
  { name: "WIPRO", price: "₹560", change: "-0.45%" },
];

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container mb-3">
        <input type="text" placeholder="Search stocks..." className="search" />
        <span className="counts">9 / 50</span>
      </div>

      <h5
        style={{
          marginBottom: "20px",
          color: "#387ED1",
          fontWeight: "600",
        }}
      >
        Watchlist
      </h5>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {watchlistData.map((stock, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 10px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            <div>
              <strong>{stock.name}</strong>
            </div>

            <div style={{ textAlign: "right" }}>
              <div>{stock.price}</div>

              <small
                style={{
                  color: stock.change.includes("-") ? "#dc3545" : "#28a745",
                }}
              >
                {stock.change}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
