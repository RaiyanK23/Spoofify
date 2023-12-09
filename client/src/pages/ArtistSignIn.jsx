import React from "react";
import { Link } from "react-router-dom";

import "../css/ArtistPagesCSS/ArtistSignIn.scss";

const ArtistSignIn = () => {
  return (
    <div className="artistSignIn">
      <div className="artistSignInBox">

        <p>Artist Sign-In</p>

        {/* Username*/}
        <div className="usernameField">
          <input type="text" id="username" name="username" placeholder="Username"/>
        </div>

        {/* Password */}
        <div className="passwordField">
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>

        {/* Sign in Button*/}
        <div className="signInButton">
          <Link to="/Artist/signin"  className="customButton">
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
export default ArtistSignIn;
