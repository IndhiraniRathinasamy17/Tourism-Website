import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export default function Login({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName === "Indhi" && password === "1715") {
      onLogin(true);
      navigate("/packages");
    } else {
      setError("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <div className="show-password">
              <input type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
              <label htmlFor="showPassword">Show Password</label>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
