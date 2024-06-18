import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Demo user list
const demoUsers = [
  { username: 'student', password: 'password', role: 'student' },
  { username: 'admin', password: 'password', role: 'admin' }
];

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to store current user
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user login
  const login = (username, password) => {
    // Find user in demoUsers list
    const user = demoUsers.find(user => user.username === username && user.password === password);
    if (user) {
      // Set currentUser if user found
      setCurrentUser(user);
    } else {
      alert("No user found");
    }
  };

  // Function to handle user registration
  const register = (username, password) => {
    // Check if username already exists
    if (!demoUsers.some(user => user.username === username)) {
      // Add new user to demoUsers list
      const newUser = { username, password, role: 'student' }; // For demo, always assign 'student' role
      demoUsers.push(newUser);
      // Automatically login the new user
      setCurrentUser(newUser);
      console.log(newUser);
    } else {
      // Handle username already exists (or other error)
      alert("User already exist. Sign in.")
    }
  };

  // Function to handle user logout
  const logout = () => {
    // Clear currentUser after logout
    setCurrentUser(null);
  };

  // Provide authentication context value to children components
  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
