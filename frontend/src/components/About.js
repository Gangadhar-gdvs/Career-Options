import React from 'react';
import './About.css';
import jeevan from '../images/jeevan.jpg';
import chandra from "../images/chandra.jpg"
import yaswanth from "../images/yaswanth.jpg"
import gangadhar from "../images/gangadhar.jpg"
import preethi from "../images/preethi.jpg"
import deepika from "../images/deepika.jpg"
import sravani from "../images/sravani.jpg"
function About({ contactRef }) {
  const teamMembers = [
    { name: 'R Jeevan', photo: jeevan },
    { name: 'K Chandra', photo: chandra },
    { name: 'A Yashwanth Reddy', photo: yaswanth },
    { name: 'G Gangadhar', photo: gangadhar },
    { name: 'G Preethi', photo: preethi },
    { name: 'N Deepika', photo: deepika},
    { name: 'V Sravani', photo: sravani },
  ];

  return (
    <div ref={contactRef} className="about-container">
      <div className="about-content">
        <h1 className="about-title">
          About Us <span className="wave">👋</span>
        </h1>
        <p className="fade-in">
          Welcome to CareerCare 🧭, your exciting guide in navigating the world of career opportunities! 
          We're on a mission to empower you to reach for the stars 🌟 in your professional journey.
        </p>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="team-photo" 
              />
              <p className="team-name">{member.name}</p>
            </div>
          ))}
        </div>

        <p className="slide-in">At CareerCompass, we believe in:</p>
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
  );
}

export default About;
