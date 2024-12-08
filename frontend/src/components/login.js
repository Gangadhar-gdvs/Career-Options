import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Import custom styles for Login
import Register from "./Register"; // Import Register form

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" or "success"
  const [isLogin, setIsLogin] = useState(true);
   // State to toggle between Login and Register forms
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        setMessageType("success");
        localStorage.setItem("authToken", result.token);
        setTimeout(() => navigate("/dashboard"), 1500); // Redirect after success
      } else {
        setMessage(result.message || "Login failed. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      setMessageType("error");
    }
  };

  // Toggle between Login and Register forms
  const toggleForm = (form) => {
    setIsLogin(form === 'login');
  };

  return (
    <div className="login-overlay">
    
    <div className="d-flex flex-column align-items-center justify-content-center ">
      {isLogin ? (
        // Login Form
        <div className="card login-card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-center  mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/care.ico`}
                alt="Icon"
                className="login-icon"
              />
              <h3 className="text fw-bold" style={{
                color:"#5483A0",
              }}>Sign in</h3>
            </div>

            {/* Display error or success message */}
            {message && (
              <div
                className={`alert ${messageType === "error" ? "alert-danger" : "alert-success"} text-center`}
                role="alert"
              >
                {message}
              </div>
            )}

            <form onSubmit={onSubmit}>
              <div className="mb-3 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />              
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faLock} className="me-2" />
                 <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={onChange}
                  required
                />
              </div>

              <button type="submit" className="btn" style={{
                  width: '120px',
                  margin: 'auto',
                  height: '40px',
                  display: 'block',
                  fontSize:'12px',
                  borderRadius: '20px',
                  backgroundColor: '#028653', color: 'white',
                  
                }}>
                LOGIN
              </button>
            </form>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
              <p className="mb-0">Don't have an account?</p>
              <button className="btn " style={{
                  width: '100px',
                 textAlign:'center',
                  height: '30px',
                  paddingBottom:"28px",
                  display: 'block',
                  fontSize:'12px',
                  borderRadius: '5px',
                  backgroundColor: '#5d5e5f5b', color: '#2c5d92',
                  
                }}
                  onClick={() => toggleForm('register')}>
                REGISTER
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Register Form
        <Register toggleModal={toggleForm} />
      )}
    </div>
    </div>
  );
}

export default Login;
