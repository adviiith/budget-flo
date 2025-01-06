import React from "react";
import { Link } from "react-router-dom";
import "./CanBar.css";

const CanBar = ({ user, handleLogout }) => {
  return (
    <nav className="canbar">
      <div className="canbar-left">
        <Link to="/tools" className="canbar-logo">
          BudgetFlo
        </Link>
      </div>
      <div className="canbar-right">
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </nav>
  );
};

export default CanBar;
