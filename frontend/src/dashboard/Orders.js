import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    {
      stock: "RELIANCE",
      type: "BUY",
      qty: 10,
      price: "₹2,850",
      status: "Completed",
    },
    {
      stock: "TCS",
      type: "SELL",
      qty: 5,
      price: "₹4,120",
      status: "Completed",
    },
    {
      stock: "INFY",
      type: "BUY",
      qty: 8,
      price: "₹1,620",
      status: "Pending",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📋 Orders</h2>

        <Link to="/dashboard" className="btn btn-primary">
          New Order
        </Link>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Type</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.stock}</td>

                <td
                  style={{
                    color: order.type === "BUY" ? "#28a745" : "#dc3545",
                    fontWeight: "600",
                  }}
                >
                  {order.type}
                </td>

                <td>{order.qty}</td>
                <td>{order.price}</td>

                <td>
                  <span
                    className={`badge ${
                      order.status === "Completed"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="text-center py-5">
            <p>No orders found</p>

            <Link to="/dashboard" className="btn btn-primary">
              Place Order
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
