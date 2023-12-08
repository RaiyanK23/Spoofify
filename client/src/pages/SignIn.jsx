import React from "react";
import { Link } from "react-router-dom";

import "../css/SignIn.scss";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signInBox">

        <p>Sign-In</p>

        {/* User Siginin */}
        <div className="userButton">
          <label htmlFor="username">Are you a user</label>
          <Link to="/user/signin"  className="customButton">
            Sign-in Here
          </Link>
        </div>

        {/* Artist Siginin */}
        <div className="artistButton">
          <label htmlFor="username">Are you an Artist</label>
          <Link to="/artist/signin"  className="customButton">
            Sign-in Here
          </Link>
        </div>

        {/*Sign up link */}
        <div className="signUpLink">
          <Link to="/signup" >Sign Up Don't have an account?</Link>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
