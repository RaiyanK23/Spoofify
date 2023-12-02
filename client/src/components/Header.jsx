import React from "react";
import Logo from "../Images/Logo.png";

import "../css/Header.scss"
const  Header = () => 
{
  return(
    <header>
      <img src={Logo} alt=""/>
      <span> <b>Spoofify </b> </span>
    </header>
  )
}

export default Header