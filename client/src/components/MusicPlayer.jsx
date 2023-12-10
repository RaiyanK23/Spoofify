import React from "react";
import Logo from "../Images/Logo.png";

import "../css/Components/MusicPlayer.scss"
const  Header = () => 
{
  return(
    <div className="musicPlayerBox">

    <header>
      <img src={Logo} alt=""/>
      <span> <b>Play Song </b> </span>
    </header>

    </div>
  )
}

export default Header