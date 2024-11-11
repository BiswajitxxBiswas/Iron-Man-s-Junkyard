// src/components/UserDashBoard.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { AuthProvider } from "../context/AuthContext"; // Auth context to wrap content

const UserDashBoard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AuthProvider>
        {/* Sidebar */}
        <Sidebar className="w-64 bg-gray-800 text-white p-4" />

        {/* Main content area */}
        <div className="flex-1 p-6">
          {/* Content area will change based on the selected sidebar link */}
          <Outlet />
        </div>
      </AuthProvider>
    </div>
  );
};

export default UserDashBoard;
