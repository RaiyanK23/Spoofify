import React from "react";
import UpdateIcon from "../../Images/UpdateIcon.png";

import "../../css/Components/SongButtons/ArtistAddSongOrPlaylistButton.scss"
const  PlaylistButton = ({ onClick }) => 
{
  return(  
    <button className="addButtonBox" onClick={onClick}>
      
        <img src={UpdateIcon} alt=""/>
        <span> Update Song/Album </span>

    </button>
  )
}

export default PlaylistButton