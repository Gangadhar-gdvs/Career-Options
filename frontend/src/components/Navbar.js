import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/care.ico"; // Ensure the logo image exists
 // Import the SignInOverlay component

function Navbar({ footerRef, contactRef ,isLoggedIn, toggleLogin, onLogout}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // State to manage the SignIn overlay
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  }; 

  const scrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn); // Toggle the visibility of the SignIn overlay
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h1 className="navbar-title">Career Care</h1>
        </div>
        <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <button onClick={scrollToContact} className="nav-link about-btn">
            About Us
          </button>
          <button onClick={scrollToFooter} className="nav-link about-btn">
            Contact
          </button>
         
        </div>
        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      
    </>
  );
}

export default Navbar;
