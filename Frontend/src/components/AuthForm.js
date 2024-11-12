import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const AuthForm = () => {
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/IhyDl3L_CaM?autoplay=1&loop=1&mute=1&playlist=IhyDl3L_CaM&controls=0&showinfo=0&modestbranding=1";
  const [isLogin, setIsLogin] = useState(true);  // Determines if user is on login or signup form
  const [isCustomer, setIsCustomer] = useState(true); // Determines if it's customer or seller
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/signin", {
        email,
        password,
      });
      console.log("Login successful", response.data);
      signIn();
      navigate(isCustomer ? "/" : "/dealer");
    } catch (error) {
      console.error("Error while signing in --> ", error);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const endpoint = isCustomer 
        ? "http://localhost:5000/user/signup" 
        : "http://localhost:5000/sdealer/signup"; // Use different API for seller signup
  
      const response = await axios.post(endpoint, {
        name,
        email,
        password,
      });
  
      console.log("Signup successful", response.data);
      navigate(isCustomer ? "/" : "/dealer");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background video */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
        src={youtubeEmbedUrl}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; loop; muted; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        style={{ pointerEvents: "none" }}
      ></iframe>

      {/* Form container */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md mx-auto transform transition-all duration-300">
          {isLogin ? (
            // Login form
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
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 bg-opacity-90 text-white rounded"
                >
                  Login as {isCustomer ? "Customer" : "Seller"}
                </button>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  type="button"
                  onClick={() => setIsCustomer(true)}
                  className="text-blue-300 hover:underline"
                >
                  Login as Customer
                </button>
                <button
                  type="button"
                  onClick={() => setIsCustomer(false)}
                  className="text-blue-300 hover:underline"
                >
                  Login as Seller
                </button>
              </div>
            </form>
          ) : (
            // Register form
            <form onSubmit={handleSignup} className="space-y-6">
              <h1 className="text-2xl font-semibold text-center text-white">
                Register
              </h1>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
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
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-600 bg-opacity-90 text-white rounded"
                >
                  Register as {isCustomer ? "Customer" : "Seller"}
                </button>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  type="button"
                  onClick={() => setIsCustomer(true)}
                  className="text-blue-300 hover:underline"
                >
                  Register as Customer
                </button>
                <button
                  type="button"
                  onClick={() => setIsCustomer(false)}
                  className="text-blue-300 hover:underline"
                >
                  Register as Seller
                </button>
              </div>
            </form>
          )}

          <div className="text-center mt-4 text-white">
            {isLogin ? (
              <>
                <p>Don't have an account?</p>
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-300 hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <p>Already have an account?</p>
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-300 hover:underline"
                >
                  Login
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
