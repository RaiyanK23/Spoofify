import React from "react";
import PlaylistIcon from "../Images/Graduation.jpeg";

import "../css/Components/PlaylistButtons.scss"
const  PlaylistButton = () => 
{
  return(
    
    <button className="playlistButton">
        <img src={PlaylistIcon} alt=""/>
        <span> Graduation </span>
    </button>
  )
}

export default PlaylistButton