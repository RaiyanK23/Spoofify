import React from "react";
import Graduation from "../../Images/Graduation.jpeg";
import RemoveIcon from "../../Images/RemoveIcon.png";

import "../../css/Components/SongButtons/ArtistRectanglePlaylistButton.scss"
const  PlaylistButton = ({ onClick }) => 
{
  return(  
    <button className="rectanglePlaylistButton" onClick={onClick}>
        <img src={Graduation} alt=""/>
        <span> Graduation </span>

    </button>
  )
}

export default PlaylistButton