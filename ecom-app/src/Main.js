import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Make sure react-icons is installed
import {
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

import Place3 from "./Reactproject/Place3";
import KeralaTemples from "./Reactproject/KeralaTemples";
import KeralaAdventure from "./Reactproject/KeralaAdventure";
import KeralaBeaches from "./Reactproject/KeralaBeaches";
import KeralaFood from "./Reactproject/KeralaFood";
import Athirapally from "./Adventures/Athirapally";
import Varkala from "./Beaches/Varkala";
import Puttu from "./FamousFoods/Puttu";
import Login from "./Reactproject/Login";
import Signup from "./Reactproject/Signup";
import PackageDetails from "./Package/PackageDetails";
import BookTravel from "./Reactproject/BookTravel";
import PackageBookingForm from "./Package/PackageBookingForm";
import ForgotPassword from "./Reactproject/ForgotPassword";
import ResetPassword from "./Reactproject/ResetPassword";
import Logo from "./Logo.png";
import {
  Padmatemple,
  Arthunkal,
  Azhimalashiva,
  Chottanikara,
  Guruvayur,
  Sabarimala,
  Santacruz,
} from "./Spirituals";


export default function Main() {
  const navigate = useNavigate();

  // Load authentication from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Save authentication state to localStorage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    const intended = sessionStorage.getItem("intendedPath") || "/packages";
    sessionStorage.removeItem("intendedPath");
    navigate(intended);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

      <div className="body-content">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Place3 />} />
          <Route path="/kerala/temples" element={<KeralaTemples />} />
          <Route path="/padmanabaswamytemple" element={<Padmatemple />} />
          <Route path="/arthunkal" element={<Arthunkal />} />
          <Route path="/azhimalashiva" element={<Azhimalashiva />} />
          <Route path="/chottanikara" element={<Chottanikara />} />
          <Route path="/guruvayur" element={<Guruvayur />} />
          <Route path="/sabarimala" element={<Sabarimala />} />
          <Route path="/santacruz" element={<Santacruz />} />

          <Route path="/kerala/adventure" element={<KeralaAdventure />} />
          <Route path="/kerala/beaches" element={<KeralaBeaches />} />
          <Route path="/kerala/food" element={<KeralaFood />} />
          <Route path="/athirapally" element={<Athirapally />} />
          <Route path="/varkala" element={<Varkala />} />
          <Route path="/puttu" element={<Puttu />} />
          <Route path="/packages" element={<PackageDetails isAuthenticated={isAuthenticated} />} />

          {/* Authentication */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route path="/booktravel" element={<BookTravel />} />
          <Route
            path="/booking"
            element={isAuthenticated ? <PackageBookingForm /> : <LoginRedirect />}
          />
        </Routes>
      </div>
    </>
  );
}

function LoginRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    sessionStorage.setItem("intendedPath", "/booking");
    navigate("/login");
  }, [navigate]);
  return null;
}

function Header({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="header">
      <img src={Logo} alt="Vacation Vibes Logo" className="logo" />
      <h1>Tourist Places In Kerala</h1>

      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/kerala/temples">Spiritual</Link>
        <Link to="/kerala/adventure">Adventure</Link>
        <Link to="/kerala/beaches">Beaches</Link>
        <Link to="/kerala/food">Famous Foods</Link>
        <Link to="/packages">Tour Packages</Link>
      </nav>

      {/* Profile/Login Dropdown */}
      <div className="profile-dropdown">
        <FaUserCircle size={35} className="profile-icon" />
        <div className="dropdown-content">
          {!isAuthenticated ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/profile">My Profile</Link>
              <Link to="/bookings">My Bookings</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/help">Help & Support</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}