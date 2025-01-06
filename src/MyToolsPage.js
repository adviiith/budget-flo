import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MyToolsPage.css";
import { Navigate } from "react-router-dom";
import CanBar from "./CanBar";

const MyToolsPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      console.error("onLogout function is not available");
    }
  };

  return (
    <div>
      <div>
        <CanBar />
      </div>
      <div className="tools-page">
        <h1>My Tools</h1>
        <p>Select a tool to get started:</p>
        <div className="tools-grid">
          <button
            onClick={() => navigate("/budgetflo")}
            className="tool-button"
          >
            BudgetFlo
          </button>
          <button className="tool-button" disabled>
            Coming Soon!
          </button>
        </div>
        <Link to="/" onClick={handleLogout}>
          <button className="logout-button">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default MyToolsPage;
