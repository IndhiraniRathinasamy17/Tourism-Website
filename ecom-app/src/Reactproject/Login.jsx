import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Styles.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const BASE_URL = "https://tourism-website-1-3of3.onrender.com";

  const handleLogin = async(e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please enter email and password.",
      });
    } else {
      try {
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: data.message,
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        localStorage.setItem("isAuthenticated", "true");
        onLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="show-password">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword">Show Password</label>
              <p>
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
