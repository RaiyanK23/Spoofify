import React from "react";
import Graduation from "../../Images/Graduation.jpeg";
import RemoveIcon from "../../Images/RemoveIcon.png";

import "../../css/Components/SongButtons/ArtistRectanglePlaylistButton.scss"
const  PlaylistButton = () => 
{
  return(  
    <button className="rectanglePlaylistButton">
        <img src={Graduation} alt=""/>
        <span> Graduation </span>

        <button className="DeleteButton">
          <img src={RemoveIcon} alt=""/>
          <span> Delete </span>
        </button>

    </button>
  )
}

export default PlaylistButton