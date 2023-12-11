import React from "react";
import Logo from "../Images/Logo.png";

import "../css/Components/Header.scss"

/*Make a call to the DB to get currently logged in user info*/
const  Header = () => 
{
  return(
   <div className="userheaderBox">
     <header>
      <img src={Logo} alt=""/>
      <span> <b>Spoofify </b> </span>
    </header>
   </div>
  )
}

export default Header