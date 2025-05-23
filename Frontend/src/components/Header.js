// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline"; // Importing user icon from Heroicons
import { useAuth } from "../utils/useAuth"; // Importing the useAuth hook

const Header = () => {
  const { isSignedIn, signIn, signOut } = useAuth(); // Access auth state from context

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black text-white p-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-semibold">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300">
            Logo
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="text-white hover:text-gray-300 relative group">
            <span className="transition-all duration-300">Home</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 relative group">
            <span className="transition-all duration-300">About</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link to="/products" className="text-white hover:text-gray-300 relative group">
            <span className="transition-all duration-300">Products</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 relative group">
            <span className="transition-all duration-300">Contact</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-300 relative group">
            <span className="transition-all duration-300">Cart</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Profile Icon or Login/Register Button */}
        <div className="flex items-center space-x-6">
          {isSignedIn ? (
            <Link to="/user" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
              <UserIcon className="w-6 h-6" />
              <span>Profile</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              className="bg-blue-500 text-white px-8 py-3 rounded-none hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
