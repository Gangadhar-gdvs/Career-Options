import React, { useState } from 'react';
import './Header.css';
import Navbar from './Navbar';

function Header({ isLoggedIn, toggleLogin, onLogout }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="Header">
      <div className="header-logo">
        <img 
          src={`${process.env.PUBLIC_URL}/care.ico`} 
          alt="Icon" 
          style={{ width: '60px', height: '60px' }}
        />
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
      <div className="header-login">
        {!isLoggedIn ? (
          <button className="signup-btn" onClick={toggleLogin}>
            Sign In
          </button>
        ) : (
          <div>
            <div className="burger-menu" onClick={togglePanel}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        )}
      </div>

      {/* Side Panel */}
      {isPanelOpen && (
        <div className="top-panel top-panel-animation">
          <ul className="panel-menu">
            <li><div><img
              src={`${process.env.PUBLIC_URL}/BG1.png`} // Replace with your profile icon path
              alt="Profile"
              className="profile-icon"
            /></div>
            </li>
            <li>Explore</li>
            <li onClick={() => { onLogout(); togglePanel(); }}>Logout</li>
          </ul>
          <button onClick={togglePanel}>🗙</button>
        </div>
      )}
    </div>
  );
}

export default Header;
