import { useState } from "react";
import axios from "axios";
import "./Styles.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      alert(res.data.message);
    } catch (err) {
      alert("Error sending email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
  <div className="login-box">
    <h2>Forgot Password</h2>

    <label>Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      onChange={(e) => setEmail(e.target.value)}
    />

    <button onClick={handleSubmit}>
      Send Reset Link
    </button>
  </div>
</div>
    </form>
  );
}

export default ForgotPassword;