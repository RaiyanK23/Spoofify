import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../css/ArtistPagesCSS/ArtistSignIn.scss";

const ArtistSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Check if email and password are provided
    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }

    try {
      // Fetch the login route with email and password
      const response = await fetch('http://localhost:5000/api/artistAuth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Login successful
        console.log(result.message);
        
        // Redirect to home or perform other actions
        navigate('artist/home');
      } else {
        // Login failed
        console.error(result.error);
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert("Internal Server Error during login.");
    }
  };

  return (
    <div className="artistSignIn">
      <div className="artistSignInBox">

        <p>Artist Sign-In</p>

        {/* Email */}
        <div className="usernameField">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="passwordField">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Sign-in Button */}
        <div className="signInButton">
          <button className="customButton" onClick={handleSignIn}>
            Sign-in
          </button>
        </div>

        {/* Back Button */}
        <div className="backButton">
          <Link to="/" className="customButton">
            Back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ArtistSignIn;
