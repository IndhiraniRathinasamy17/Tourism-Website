import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Styles.css";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        password,
      });
      alert(res.data.message);
    } catch (err) {
      alert("Error resetting password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
  <div className="login-box">
    <h2>Reset Password</h2>

    <label>New Password</label>
    <input
      type="password"
      placeholder="Enter new password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleSubmit}>
      Reset Password
    </button>
  </div>
</div>
    </form>
  );
}

export default ResetPassword;