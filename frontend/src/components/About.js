import React, { useState } from 'react';
import './About.css';

function About( {contactRef}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={contactRef} className="about-container">
      <div className="about-content">
        <h1 className="about-title">
          About Us <span className="wave">👋</span>
        </h1>
        <div className="about-description">
          <p className="fade-in">
            Welcome to CareerCare 🧭, your exciting guide in navigating the world of career opportunities! 
            We're on a mission to empower you to reach for the stars 🌟 in your professional journey.
          </p>
          {/* <div className="image-container">
          <div className="team-info" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="team-column">
              <p>R Jeevan</p>
              <p>K Chandra</p>
              <p>A Yashwanth Reddy</p>
            </div>
            <div className="team-column">
              <p>G Gangadhar</p>
              <p>G Preethi</p>
              <p>N Deepika</p>
              <p>V Sravani</p>
            </div>
          </div>


            {/* <img 
              src="/placeholder.svg?height=200&width=300" 
              alt="Team of diverse professionals" 
              className="team-image"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            /> */}
            {/* {isHovered && <div className="image-overlay">Our Awesome Team!</div>}
          </div> */}
          <p className="slide-in">
            At CareerCompass, we believe in:
          </p>
          <ul className="feature-list">
            <li className="bounce-in">🚀 Launching careers that inspire</li>
            <li className="bounce-in">🎓 Illuminating paths for continuous learning</li>
            <li className="bounce-in">💼 Connecting talents with dream opportunities</li>
            <li className="bounce-in">🌈 Celebrating diversity in career choices</li>
          </ul>
          <p className="typing-effect">
            Ready to embark on an exciting career adventure? Let's get started! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;