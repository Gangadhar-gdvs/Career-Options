import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Register';
import Home from './components/Home';
import Career from './components/Career';
import Jobs from './components/jobs';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/career" element={<Career />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      
      {/* Footer is displayed on all pages */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
