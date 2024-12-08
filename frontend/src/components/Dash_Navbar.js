import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/care.ico"; 
import profileIcon from "../images/avatar.jpg";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("Dropdown state:", !dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">Career Care</h1>
      </div>
      
      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        {/* <Link to="/" className="nav-link">Home</Link> */}
        <div className="profile-container" onClick={toggleDropdown}>
          <img src={profileIcon} alt="Profile" className="profile-avatar" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              {/* <Link to="/profile" className="dropdown-item">
                <i className="fas fa-user-circle"></i> Show Profile
              </Link> */}
              <Link to="/" className="dropdown-item">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
