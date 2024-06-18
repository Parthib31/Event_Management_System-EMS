import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "../../styles/login.css"
// import { useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = () => {
    login(username, password);
    onClose();     
  };


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
      <label className="login-label">Username</label>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="login-label">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
