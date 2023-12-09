import React from "react";
import { Link } from "react-router-dom";

import "../css/ArtistSignIn.scss";

const ArtistSignIn = () => {
  return (
    <div className="signIn">
      <div className="signInBox">

        <p>Artist Sign-In</p>

        {/* Uername*/}
        <div className="usernameField">
          <input type="text" id="username" name="username" placeholder="Username"/>
        </div>

        {/* Password */}
        <div className="passwordField">
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>

        {/* Sigin in Button*/}
        <div className="signinButton">
          <Link to="/Artist/signin"  className="customButton">
            Sign-in
          </Link>
        </div>

        {/*Back Button*/}
        <div className="backbutton">
          <Link to="/"  className="customButton">
            Back
          </Link>
        </div>

      </div>
    </div>
  );
};
export default ArtistSignIn;
