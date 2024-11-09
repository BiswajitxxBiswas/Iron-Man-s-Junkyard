import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Copyright Text */}
        <div className="text-lg font-medium text-center md:text-left">
          <p>&copy; 2024 Ironman Junkyard. All Rights Reserved.</p>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
