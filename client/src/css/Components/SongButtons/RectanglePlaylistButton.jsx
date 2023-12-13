import React from "react";
import PlaylistIcon from "../../Images/Graduation.jpeg";

import "../../css/Components/SongButtons/RectanglePlaylistButton.scss"
const  PlaylistButton = () => 
{
  return(
    
    <button className="rectanglePlaylistButton">
        <img src={PlaylistIcon} alt=""/>
        <span> Graduation </span>
    </button>
  )
}

export default PlaylistButton