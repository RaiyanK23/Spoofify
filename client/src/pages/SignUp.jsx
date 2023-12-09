import React from "react";
import { Link } from "react-router-dom";

import "../css/LoginPagesCSS/SignUp.scss";

const SignUp = () => 
{
  return (
    <div className="signUp">
      <div className="signUpBox">

        <p>Sign-Up</p>

        {/* First name last Name */}
        <div  className="firstAndLastName">

          {/* First name*/}
          <div className="field">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          {/* Last name*/}
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>

        </div>

        {/* Account type*/}
        <div className="selectField">
          <label htmlFor="accountType">Account type</label>

          <select id="dropdown" name="dropdown">
            <option value="option1">User</option>
            <option value="option2">Artist</option>
          </select>
        </div>

        {/* Email Address*/}
        <div className="field">
          <label htmlFor="emailAddress" >Email Address</label>
          <input type="text" id="emailAddress" name="emailAddress" placeholder="name@domain.com"/>
        </div>

        {/* Username */}
         <div className="field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        {/* Password */}
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
        </div>

        {/*Sign up button*/}
        <div className="signUpButton">
          <Link to="/"  className="customButton">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
