// src/context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

// Create a Context for authentication
const AuthContext = createContext();

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false); // initial state for auth

  const signIn = () => setIsSignedIn(true); // Set user as signed in
  const signOut = () => setIsSignedIn(false); // Set user as signed out

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
