// src/components/DealerHeader.js
import React from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline"; // Importing user icon from Heroicons

const DealerHeader = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black text-white p-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Dashboard Title */}
        <div className="text-3xl font-semibold">
          <Link to="/dealer" className="text-white hover:text-gray-300 transition-colors duration-300">
            Dealer Dashboard
          </Link>
        </div>

        {/* Dealer Options */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link
            to="/dealer"
            className="text-white hover:text-gray-300 relative group"
          >
            <span className="transition-all duration-300">Upload Products</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>

          <Link
            to="/dealer/manage-orders"
            className="text-white hover:text-gray-300 relative group"
          >
            <span className="transition-all duration-300">Manage Orders</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>

          <Link
            to="/dealer/manage-products"
            className="text-white hover:text-gray-300 relative group"
          >
            <span className="transition-all duration-300">Manage Products</span>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Profile Icon */}
        <div className="flex items-center space-x-6">
          <Link
            to="/dealer/profile"
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300"
          >
            <UserIcon className="w-6 h-6" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DealerHeader;
