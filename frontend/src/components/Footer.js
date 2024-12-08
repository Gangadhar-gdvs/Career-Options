import React from 'react';
import './Footer.css';
function Footer({ footerRef }) {
  return (
    <footer ref={footerRef}  className="footer-container">
      <div className="footer-content">
        <div className="contact-section">
          <h3 className="section-title">Contact Us 📞</h3>
          <p className="section-description">Have questions? We're here to help!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">✉️</span>
              <span className="text">support@careercompass.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span className="text">+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <span className="icon">🏢</span>
              <span className="text">123 Career Lane, Future City, TC 12345</span>
            </div>
          </div>
        </div>
        
        <div className="social-media">
          <h4 className="social-title">Connect With Us 🌐</h4>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <span className="icon">👍</span> Facebook
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <span className="icon">🐦</span> Twitter
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <span className="icon">💼</span> LinkedIn
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <span className="icon">📸</span> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2023 CareerCompass. All rights reserved. 🚀
      </div>
    </footer>
  );
}

export default Footer;