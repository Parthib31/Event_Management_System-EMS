import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "../../styles/register.css"
import { useNavigate } from "react-router-dom";

const Registration = ({ onClose }) => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Perform registration logic
    register(username, password);
    onClose(); 
    // navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <form className="registration-form">
        <label className="registration-label">Username</label>
        <input
          className="registration-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="registration-label">Password</label>
        <input
          className="registration-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegistration}>Register</button>
      </form>
    </div>
  );
};

export default Registration;
