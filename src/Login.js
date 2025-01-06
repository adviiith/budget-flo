import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "./Navbar";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
      navigate("/tools");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onLogin();
      navigate("/tools");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="parent">
      <div>
        <Navbar />
      </div>
      <div className="auth-container">
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
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Login;
