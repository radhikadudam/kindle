import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

// const url = process.env.REACT_APP_URL
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering with", { name, email, password });
  
    try {
      const response = await fetch(`https://kindle-production-5bff.up.railway.app/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password })  // ✅ FIXED
      });
  
      if (response.ok) {
        console.log("registered successfully");
        navigate("/login");
      } else {
        const errorData = await response.text(); // ⬅️ parse raw response for debugging
        console.error("Signup failed:", errorData);
      }
    } catch (err) {
      console.error("Network or server error:", err.message);
    }
  };
  

  return (
    <div className="register-container">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="register-card">
          <h2 className="register-title">Register</h2>
          <div className="input-group">
            <User className="input-icon" />
            <input name="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register-input"
            />
          </div>
          <div className="input-group">
            <Mail className="input-icon" />
            <input name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
            />
          </div>
          <div className="input-group">
            <Lock className="input-icon" />
            <input name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
            />
          </div>
          <button onClick={handleRegister} className="register-button">Sign Up</button>
          <p className="login-text">
            Already have an account? <Link to="/login" className="login-link">Login</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
