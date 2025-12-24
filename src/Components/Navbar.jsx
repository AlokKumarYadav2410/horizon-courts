import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Horizon Courts</h1>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Coaches</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>
        <div className="btn mobile-btn">
          Book Now <i className="ri-arrow-right-up-long-line"></i>
        </div>
      </div>

      <div className="btn desktop-btn">
        Book Now <i className="ri-arrow-right-up-long-line"></i>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
      </div>
    </div>
  );
};

export default Navbar;
