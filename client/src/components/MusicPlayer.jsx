import React from "react";
import songIcon from "../Images/Graduation.jpeg";
import audioSrc from "../Audio/Kanye West - Good Morning.mp3"
import { useState } from 'react';

import "../css/Components/MusicPlayer.scss"
const  MusicPlayer = () => 
{ 
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => 
  {
    setIsPlaying(!isPlaying);
  };


  return(
  <div className="musicPlayerBox">

    <div className="imageAndInfo">
      {/* Song Image */}
      <img src={songIcon} alt=""/>

      {/* Song Text Infomation */}
      <div className="songInfo">
        <span className="mainText"> Good Morning  </span>
        <span className="subText"> Kanye West</span>
      </div>

    </div>

    <div className="musicController">
     
    </div>



  </div>
  )
}

export default MusicPlayer