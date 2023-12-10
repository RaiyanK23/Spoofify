import React from "react";
import Logo from "../Images/Logo.png";

import "../css/Components/Header.scss"
const  Header = () => 
{
  return(
   <div className="headerBox">
     <header>
      <img src={Logo} alt=""/>
      <span> <b>Spoofify </b> </span>
    </header>
   </div>
  )
}

export default Header