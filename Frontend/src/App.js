import React, { useState } from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';
import ironVideo from './iron.mkv';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import About from './About';
import axios from 'axios';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [menuActive, setMenuActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/signin", {
        email,
        password,
      });
      console.log("Login successful", response);
      // signIn();     // newLine
      // navigate("/");
    } catch (error) {
      console.error("Error while signing in --> ", error);
    }
  };

  
  

  return (
    <Router>
      <div>
        <video className="background-video" autoPlay muted loop>
          <source src={ironVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <header>
          <h2 className="logo">Logo</h2>
          <nav className={`navigation ${menuActive ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            
            <Link to="/about">About</Link> 
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <button className="btnLogin-popup" onClick={handleLoginClick}>Login</button>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
        </header>

        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Login/Register page route */}
          <Route
            path="/login"
            element={
              <div className={`container ${isActive ? 'active' : ''}`}>
                <div className="form-box login">
                  <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                      <input type="text" placeholder="Username" required onChange={(e) =>setEmail(e.target.value)} />
                      <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                      <input type="password" placeholder="Password" required 
                      onChange={(e) =>setPassword(e.target.value)}/>
                      <i className="bx bx-lock-alt"></i>
                    </div>
                    <div className="forgot-link">
                      <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <p>or login with social platforms</p>
                    <div className="social-icons">
                      <a href="#"><i className="bx bxl-google"></i></a>
                      <a href="#"><i className="bx bxl-meta"></i></a>
                    </div>
                  </form>
                </div>

                <div className="form-box register">
                  <form>
                    <div className="input-box">
                      <input type="text" placeholder="E-mail" required onChange={(e) =>setname(e.target.value)} />
                      <i className="bx bxs-gmail"></i>
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Username" required onChange={(e) =>setEmail(e.target.value)} />
                      <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                      <input type="password" placeholder="Password" required 
                      onChange={(e) =>setPassword(e.target.value)}/>
                      <i className="bx bx-lock-alt"></i>
                    </div>
                    <Link to="/">
                      <button type="button" className="registration-btn">Register</button>
                    </Link>
                    <h1>Register as</h1>
                    <Link to="/register/scrap">
                      <button type="button" className="scrap-btn">Scrap Dealer</button>
                    </Link>
                  </form>
                </div>

                <div className="toggle-box">
                  <div className="toggle-panel toggle-left">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account?</p>
                    <button className="btn register-btn" onClick={handleRegisterClick}>Register</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                    <h1>Welcome Back!</h1>
                    <p>Already have an account?</p>
                    <button className="btn login-btn" onClick={handleLoginClick}>Login</button>
                  </div>
                </div>
              </div>
            }
          />

          <Route path="/register/:type" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
