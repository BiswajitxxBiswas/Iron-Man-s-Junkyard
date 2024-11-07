import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/IhyDl3L_CaM?autoplay=1&loop=1&mute=1&playlist=IhyDl3L_CaM&controls=0&showinfo=0&modestbranding=1";
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setIsActive(!isActive);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      console.log("Login successful", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error while signing in --> ", error);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });
      console.log("Signup successful", response.data);
      navigate("/auth");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background video with blur */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
        src={youtubeEmbedUrl}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; loop; muted; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: "none" }}
      ></iframe>

      {/* Blurred and semi-transparent form container */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md mx-auto transform transition-all duration-300">
          {isActive ? (
            <form onSubmit={handleSignup} className="space-y-6">
              <h1 className="text-2xl font-semibold text-center text-white">
                Register
              </h1>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full p-3 bg-white bg-opacity-50 border border-gray-300 rounded text-white placeholder-white"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-3 bg-white bg-opacity-50 border border-gray-300 rounded text-white placeholder-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 bg-white bg-opacity-50 border border-gray-300 rounded text-white placeholder-white"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 bg-opacity-90 text-white rounded"
              >
                Register
              </button>
              <p className="text-center text-white">
                or register with social platforms
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                 className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-google text-red-600 text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-meta text-blue-700 text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-github text-gray-800 text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-linkedin-square text-blue-600 text-2xl"></i>
                </a>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              <h1 className="text-2xl font-semibold text-center text-white">
                Login
              </h1>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-3 bg-white bg-opacity-50 border border-gray-300 rounded text-white placeholder-white"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 bg-white bg-opacity-50 border border-gray-300 rounded text-white placeholder-white"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 bg-opacity-90 text-white rounded"
              >
                Login
              </button>
              <p className="text-center text-white">
                or login with social platforms
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-google text-red-600 text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-meta text-blue-700 text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-github text-gray-800 text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg shadow-lg hover:bg-white transition-colors duration-300 transform hover:scale-105"
                >
                  <i className="bx bxl-linkedin-square text-blue-600 text-2xl"></i>
                </a>
              </div>
            </form>
          )}

          <div className="text-center mt-4 text-white">
            {isActive ? (
              <>
                <p>Already have an account?</p>
                <button
                  onClick={toggleForm}
                  className="text-blue-300 hover:underline"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <p>Don't have an account?</p>
                <button
                  onClick={toggleForm}
                  className="text-blue-300 hover:underline"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
