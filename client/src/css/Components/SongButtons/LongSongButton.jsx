import React from "react";
import PlaylistIcon from "../../Images/Graduation.jpeg";

import "../../css/Components/SongButtons/LongSongButton.scss"
const  LongSongButton = () => 
{
  return(
    
    <div className="songContainer">
      <button className="imageAndInfo">
        <img src={PlaylistIcon} alt=""/>
        <div className="songInfo">
          <span className="mainText"> Good Morning  </span>
          <span className="subText"> By Kanye West</span>
        </div>
      </button>

      <span className="albumName">Graduation</span>

      <span className="songDuration">2:02</span>

    </div>
  )
}

export default LongSongButton