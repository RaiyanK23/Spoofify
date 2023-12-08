import React from "react";
import { Link } from "react-router-dom";

import "../css/SignIn.scss";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signInBox">
      <p>Artist Sign-In</p>
        {/* Add your sign-in form elements here */}
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
