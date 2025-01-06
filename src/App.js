// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import SignUp from "./SignUp";
import MyToolsPage from "./MyToolsPage";
import PrivateRoute from "./PrivateRoute";
import { auth } from "./firebase";
import BT from "./BT";
import ContactUs from "./ContactUs";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const onLogin = () => {
    setUser(true);
  };

  const onLogout = () => {
    auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/tools"
          element={
            <PrivateRoute user={user}>
              <MyToolsPage onLogout={onLogout} />
            </PrivateRoute>
          }
        />
        <Route path="/budgetflo" element={<BT />} />
      </Routes>
    </Router>
  );
};

export default App;
