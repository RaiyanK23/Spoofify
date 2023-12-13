import React from "react";
import RemoveImage from "../../Images/RemoveImage.png";

import "../../css/Components/SongButtons/ArtistAddSongOrPlaylistButton.scss"
const  PlaylistButton = ({ onClick }) => 
{
  return(  
    <button className="addButtonBox" onClick={onClick}>
      
        <img src={RemoveImage} alt=""/>
        <span> Remove Song/Album </span>

    </button>
  )
}

export default PlaylistButton