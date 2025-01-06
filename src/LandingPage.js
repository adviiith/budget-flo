import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Nb from "./Navbar";
import RotatingCards from "./RotatingCards";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div id="navbar">
          <Nb />
        </div>
        <div className="landing-header">
          <h1>Welcome to BudgetFlo</h1>
          <p>Manage your finances with ease and efficiency!</p>
        </div>
        <div>
          <Link to="/signup">
            <button className="getstarted-button">Get Started</button>
          </Link>
        </div>
      </div>
      <div id="rotatingcards">
        <RotatingCards />
      </div>
    </div>
  );
};

export default LandingPage;
