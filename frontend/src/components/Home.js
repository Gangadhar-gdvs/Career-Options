import React, { useRef, useState ,useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Qoutecard.css';
import './Home.css';
import logo from '../images/child.png'
import logo1 from '../images/personal-development.png'
import logo2 from '../images/graduation-cap.png'
import logo3 from '../images/collaboration.png'
import About from './About';
import SignIn from './login';
import SignUp from './Register';
import Roadmap from './Roadmap'
function Home() {
  const footerRef = useRef(null);
  const contactRef=useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [animationClass, setAnimationClass] = useState('fade-in');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setShowLogin(false);
    setShowSignup(false)
  };
  
  const closeOverlay = () => {
    setShowLogin(false);
    setShowSignup(false); // Close both overlays
  };

  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignup(false); // Hide signup if login is opened
  };

  const toggleSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // Hide login if signup is opened
  };

  const toggleModal = (type) => {
    if (type) {
      setAnimationClass(''); // Clear animation class first
      setTimeout(() => setAnimationClass('fade-in'), 10); // Reapply animation class with delay
      setIsSignIn(type === 'signin');
    }
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove login status
  };

  return (
    <div className="home-container">
      <Navbar toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} onLogout={handleLogout} footerRef={footerRef} contactRef={contactRef}/>
      {/* {showLogin && (
        <div className="overlay overlay-animation">
          <div className="close-btn" onClick={closeOverlay}>🗙</div>
          <SignIn toggleSignup={toggleSignup} onLoginSuccess={handleLoginSuccess}/>
        </div>
      )}
      {showSignup && (
        <div className="overlay overlay-animation">
          <div className="close-btn" onClick={closeOverlay}>🗙</div>
          <SignUp toggleLogin={toggleLogin} />
        </div>
      )} */}
      <div className="home-content">
        <div className="content-overlay">
        <div className="quote-card">
      <p className="quote-text">
        `𝑻𝒉𝒆 𝒃𝒆𝒔𝒕 𝒘𝒂𝒚 𝒕𝒐 𝒑𝒓𝒆𝒅𝒊𝒄𝒕 𝒚𝒐𝒖𝒓 𝒇𝒖𝒕𝒖𝒓𝒆 𝒊𝒔 𝒕𝒐 𝒄𝒓𝒆𝒂𝒕𝒆 𝒊𝒕 .` <br/><p style={{fontSize:'20px'}}>-ᴀʙʀᴀʜᴀᴍ ʟɪɴᴄᴏʟɴ</p>
      </p>
          <button className="get-started-btn" onClick={() => toggleModal('signin')}>
           
          </button>
          </div>
        </div>
      </div>

    
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="card-container">
          <div className="info-card">
            <img src={logo} alt="Personalized Guidance" width={50}  height={50}/>
            <p>Personalized career guidance based on your qualifications</p>
          </div>
          <div className="info-card">
            <img src={logo1} alt="Career Options" />
            <p>Extensive list of career options</p>
          </div>
          <div className="info-card">
            <img src={logo2} alt="Education Paths" />
            <p>Detailed paths for higher education</p>
          </div>
          <div className="info-card">
            <img src={logo3} alt="Support and Updates" />
            <p>Continuous support and updates</p>
          </div>
        </div>
      </section>
      <Roadmap />
      
      <About  contactRef={contactRef}/>
      <Footer footerRef={footerRef} />

      {isModalOpen && (
        <div className="modal-overlay " onClick={() => toggleModal('')}>
          <div className={`modal-content ${animationClass}`} onClick={(e) => e.stopPropagation()}>
          {isSignIn ? (
              <SignIn toggleModal={toggleModal} toggleSignup={toggleSignup} onLoginSuccess={handleLoginSuccess}/>
            ) : (
              <SignUp toggleModal={toggleModal} toggleLogin={toggleLogin}/>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
