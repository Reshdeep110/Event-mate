import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationBell from "./NotificationBell";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🎪 EventHub
        </Link>

        {/* Hamburger icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu links */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`nav-link ${
              location.pathname === "/events" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            Events
          </Link>
          <Link
            to="/my-tickets"
            className={`nav-link ${
              location.pathname === "/my-tickets" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            My Tickets
          </Link>

          <NotificationBell />

          <Link
            to="/profile"
            className={`nav-link ${
              location.pathname === "/profile" ? "active" : ""
            }`}
            onClick={handleLinkClick}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
