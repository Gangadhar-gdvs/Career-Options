import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faKey } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Add custom styles here

function Register({ toggleModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://career-options.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(result.message);
        setError("");
      } else {
        setError(result.message);
        setSuccess("");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="register-overlay">
      <div className="register-container">
        <form onSubmit={onSubmit} className="p-4  shadow bg-white">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-center md-4">
            <img
              src={`${process.env.PUBLIC_URL}/care.ico`}
              alt="Icon"
              style={{ width: "40px", height: "40px" }}
            />
            <h3 className="text fw-bold" style={{ color: "#5483A0" }}>
              Sign Up
            </h3>
          </div>

          {/* Error and Success Messages */}
          {(error || success) && (
            <div
              className={`alert ${error ? "alert-danger" : "alert-success"} text-center`}
            >
              {error || success}
            </div>
          )}

          {/* Name Input */}
          <div className="mb-3 d-flex justify-content-center align-items-center">
           
              <FontAwesomeIcon icon={faUser} className="me-2" /> 
           
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <input
              type="email"
              name="email"
               placeholder="Enter Email"
              value={formData.email}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faLock} className="me-2" /> 
            <input
              type="password"
              name="password"
               placeholder="Enter Password"
              value={formData.password}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-3 d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faKey} className="me-2" /> 
            <input
              type="password"
              name="confirmPassword"
               placeholder="Re-Enter Password"
              value={formData.confirmPassword}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn"
              style={{
                width: '120px',
                margin: 'auto',
                height: '40px',
                display: 'block',
                fontSize:'14px',
                borderRadius: '20px',
                backgroundColor: '#028653', color: 'white',
                
              }}>
              REGISTER
            </button>
          </div>

          {/* Login Link */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
            <p className="mb-0"> Already have an account?{" "}</p>
             
              <button
                type="button"
                className="btn "
                style={{
                  width: '100px',
                 textAlign:'center',
                  height: '30px',
                  paddingBottom:"28px",
                  display: 'block',
                  fontSize:'12px',
                  borderRadius: '5px',
                  backgroundColor: '#5d5e5f5b', color: '#2c5d92',
                  
                }}
                onClick={() => toggleModal("login")}
              >
                LOGIN
              </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
