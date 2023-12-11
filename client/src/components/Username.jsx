import React from "react";
import Logo from "../Images/Logo.png";

import "../css/Components/Username.scss"

/*Make a call to the DB to get currently logged in user info*/
const  Username = () => 
{
  return(
    <div className="username">
      Welcome Username

      {/* Logout button */}
      <button className="logoutButton">
          <u>Logout</u>
      </button>
    </div>
  )
}

export default Username