import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main"; // We’ll define Main below

export default function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
