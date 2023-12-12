import React from "react";
import AddImage from "../../Images/AddImage.png";

import "../../css/Components/SongButtons/ArtistAddSongOrPlaylistButton.scss"
const  PlaylistButton = ({ onClick }) => 
{
  return(  
    <button className="addButtonBox" onClick={onClick}>
      
        <img src={AddImage} alt=""/>
        <span> Add Song / Album </span>

    </button>
  )
}

export default PlaylistButton