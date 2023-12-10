import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/UserPagesCSS/UserSignIn.scss";

const UserSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Check if email and password are provided
    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      // Fetch the login route with email and password
      const response = await fetch('http://localhost:5000/api/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Login successful
        console.log(result.message);
        // Redirect to home if AccountType is "Admin"
        if (result.user.AccountType === 'User') {
          navigate('/'); // Replace with your admin home page route
        } else {
          // Redirect to user home or perform other actions
        }
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
    <div className="userSignIn">
      <div className="userSignInBox">

        <p>User Sign-In</p>

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

        {/* Sign-in Button*/}
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

export default UserSignIn;
