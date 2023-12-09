import React from "react";
import { Link } from "react-router-dom";

import "../css/SignUp.scss";

const SignUp = () => 
{
  return (
    <div className="signIn">
      <div className="signInBox">
      <p>Sign-Up</p>
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

export default SignUp;
