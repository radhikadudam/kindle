import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    console.log("Logging in with", { email, password });
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        console.log("login successful")
        navigate("/first")
      }
      else {
        console.log(response.text())
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button onClick={handleLogin} className="login-button">Sign In</button>
          <p className="signup-text">
            Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}