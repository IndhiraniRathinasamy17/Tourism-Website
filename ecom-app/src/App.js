import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, Navigate } from "react-router-dom";
import Place3 from "./React project/Place3";
import KeralaTemples from "./React project/KeralaTemples";
import KeralaAdventure from "./React project/KeralaAdventure";
import KeralaBeaches from "./React project/KeralaBeaches";
import KeralaFood from "./React project/KeralaFood";
import Padmanabaswamy from "./React project/Padmanabaswamy";
import Athirapally from "./React project/Athirapally";
import Varkala from "./React project/Varkala";
import Puttu from "./React project/Puttu";
import Login from "./React project/Login";
import PackageDetails from "./React project/PackageDetails";
import Logo from "./Logo.png";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ConditionalHeader isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className="body-content">
        <Routes>
          <Route path="/" element={<Place3 />} />
          <Route path="/login" element={<Login onLogin={setIsAuthenticated} />} />
          <Route path="/kerala/temples" element={<KeralaTemples />} />
          <Route path="/kerala/adventure" element={<KeralaAdventure />} />
          <Route path="/kerala/beaches" element={<KeralaBeaches />} />
          <Route path="/kerala/food" element={<KeralaFood />} />
          <Route path="/padmanabaswamy" element={<Padmanabaswamy />} />
          <Route path="/athirapally" element={<Athirapally />} />
          <Route path="/varkala" element={<Varkala />} />
          <Route path="/puttu" element={<Puttu />} />
          <Route path="/packages" element={isAuthenticated ? <PackageDetails /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

const ConditionalHeader = ({ isAuthenticated, setIsAuthenticated }) => {
  return <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
};

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
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
        {isAuthenticated && <Link to="/packages">Tour Packages</Link>}
      </nav>

      {!isAuthenticated ? (
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      ) : (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};
