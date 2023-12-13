import React from "react";
import PlaylistIcon from "../../Images/Graduation.jpeg";

import "../../css/Components/SongButtons/PlaylistButtons.scss"
const  PlaylistButton = ({ onClick }) => 
{
  return(
    
    <button className="playlistButton" onClick={onClick}>
        <img src={PlaylistIcon} alt=""/>
        <span> Graduation </span>
    </button>
  )
}

export default PlaylistButton