import React from "react";
import { Link } from "react-router-dom";

import "../../css/UserPagesCSS/UserSignIn.scss";

const UserSignIn = () => {
  return (
    <div className="userSignIn">
      <div className="userSignInBox">

        <p>User Sign-In</p>

        {/* Username*/}
        <div className="usernameField">
          <input type="text" id="username" name="username" placeholder="Username"/>
        </div>

        {/* Password */}
        <div className="passwordField">
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>

        {/* Sigin in Button*/}
        <div className="signInButton">
          <Link to="/User/signin"  className="customButton">
            Sign-in
          </Link>
        </div>

        {/*Back Button*/}
        <div className="backButton">
          <Link to="/"  className="customButton">
            Back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UserSignIn;
