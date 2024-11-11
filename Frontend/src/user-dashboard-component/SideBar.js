import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { UserIcon, ShoppingCartIcon, CogIcon, SunIcon, MoonIcon, CreditCardIcon } from "@heroicons/react/24/outline"; // Heroicons import

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } w-64 p-6 backdrop-blur-lg shadow-lg flex flex-col`}
    >
      {/* Profile icon instead of Dashboard title */}
      <div className="flex justify-center items-center mb-10">
        <img
          src="./prefil.png" // Replace with actual profile picture URL
          alt="Profile"
          className="rounded-full w-16 h-16 object-cover border-2 border-indigo-500"
        />
      </div>

      <nav className="flex flex-col space-y-6">
        <div className="group hover:bg-purple-200 rounded-lg p-2">
          <Link
            to="/user/profile" // Use Link for navigation
            className="flex items-center space-x-4 text-lg text-indigo-500 group-hover:text-indigo-800 transition-all"
          >
            <UserIcon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-800 transition-transform transform group-hover:scale-110" />
            <span>Profile</span>
          </Link>
        </div>

        <div className="group hover:bg-purple-200 rounded-lg p-2">
          <Link
            to="/user/cart" // Use Link for navigation
            className="flex items-center space-x-4 text-lg text-indigo-500 group-hover:text-indigo-800 transition-all"
          >
            <ShoppingCartIcon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-800 transition-transform transform group-hover:scale-110" />
            <span>Cart</span>
          </Link>
        </div>

        <div className="group hover:bg-purple-200 rounded-lg p-2">
          <Link
            to="/user/payment" // Use Link for navigation
            className="flex items-center space-x-4 text-lg text-indigo-500 group-hover:text-indigo-800 transition-all"
          >
            <CreditCardIcon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-800 transition-transform transform group-hover:scale-110" />
            <span>Saved Credit / Debit Cards</span>
          </Link>
        </div>

        {/* Purchase History Section */}
        <div className="group hover:bg-purple-200 rounded-lg p-2">
          <Link
            to="/user/purchase-history" // Use Link for navigation
            className="flex items-center space-x-4 text-lg text-indigo-500 group-hover:text-indigo-800 transition-all"
          >
            <ShoppingCartIcon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-800 transition-transform transform group-hover:scale-110" />
            <span>Purchase History</span>
          </Link>
        </div>

        <div className="group hover:bg-purple-200 rounded-lg p-2">
          <Link
            to="/user/settings" // Use Link for navigation
            className="flex items-center space-x-4 text-lg text-indigo-500 group-hover:text-indigo-800 transition-all"
          >
            <CogIcon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-800 transition-transform transform group-hover:scale-110" />
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      <div className="mt-auto flex flex-col space-y-6">
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 text-lg hover:text-indigo-500 transition-all"
        >
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-300" />
          ) : (
            <MoonIcon className="w-6 h-6 text-yellow-300" />
          )}
          <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>

        <button
          onClick={() => alert("Logging out...")}
          className="flex items-center space-x-2 text-lg text-red-500 hover:text-red-400 transition-all"
        >
          <CogIcon className="w-6 h-6 text-red-500 transition-transform transform hover:scale-110" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
