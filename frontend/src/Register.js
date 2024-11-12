import React, {  useRef,useState } from 'react';
import './App.css'; // Assuming you put your styles in App.css or a similar file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';


function Register() {
  const containerRef = useRef(null);
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [name, setname] = useState("");

    const HomeClick = () => {
        if (containerRef.current) {
          containerRef.current.classList.remove('active');
        }
      };
      const handleSignup = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/user/signup", {
            name,
            email,
            
          });
          console.log("Signup successful", response.data);
        //   navigate("/auth");
        } catch (error) {
          console.error("Error signing up:", error);
        }
      };
  return (
    <div>
      <video className="background-video" autoPlay muted loop>
        <source src="iron.mkv" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="register-navigation">
          {/* Use Link component for navigation */}
          <Link to="/" onClick={HomeClick}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
          <button className="btnLogin-popup" onClick={() => window.location.href = 'index.html'}>Login</button>
        </nav>
        <div className="register-menu-icon" onClick={() => toggleMenu1()}>
          <i className='bx bx-menu'></i>
        </div>
      </header>

      <section className="register-container">
        <h1>Registration</h1>
        <form action="#" className="form" onSubmit={handleSignup}>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required onChange={(e) =>setname(e.target.value)}/>
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required onChange={(e) =>setEmail(e.target.value)}/>
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter phone number" required />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
          </div>

          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" defaultChecked />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>

          <div className="input-box address">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required />
            <input type="text" placeholder="Enter street address line 2" required />
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="column">
              <input type="text" placeholder="Enter your region" required />
              <input type="number" placeholder="Enter postal code" required />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

// Optional: If you need to implement the toggleMenu1 function (which you referenced in the HTML):
function toggleMenu1() {
  const regNav = document.querySelector('.register-navigation');
  regNav.classList.toggle('active');
}

export default Register;
