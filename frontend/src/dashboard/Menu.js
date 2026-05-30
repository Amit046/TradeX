import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* Logo */}

      <Link to="/">
        <img
          src="/media/logo.png"
          alt="TRADEX"
          style={{
            width: "45px",
            cursor: "pointer",
          }}
        />
      </Link>

      <div className="menus">
        <ul>
          {/* Home */}

          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={menuClass}>Home</p>
            </Link>
          </li>

          {/* Dashboard */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          {/* Orders */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          {/* Holdings */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          {/* Positions */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          {/* Funds */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          {/* Apps */}

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile */}

        <div
          className="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div className="avatar">A</div>
          <p className="username">Amit</p>
        </div>

        {/* Dropdown */}

        {isProfileDropdownOpen && (
          <div
            style={{
              marginTop: "10px",
              padding: "12px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                margin: "0 0 10px 0",
                fontWeight: "600",
              }}
            >
              TRADEX User
            </p>

            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#387ED1",
                fontWeight: "600",
              }}
            >
              ← Back to Website
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
