import React from "react";
import songIcon from "../Images/Graduation.jpeg";
import audioSrc from "../Audio/Kanye West - Good Morning.mp3"
import { useState } from 'react';

import{styled, Typography, Slider, Paper, Stack, Box} from '@mui/material';

import nextIcon from "../Images/NextIcon.png";
import previousIcon from "../Images/PreviousIcon.png";
import playIcon from "../Images/PlayIcon.png";
import pauseIcon from "../Images/PauseIcon.png";
import VolumeIcon from "../Images/VolumeIcon.png";

import "../css/Components/MusicPlayer.scss"
const  MusicPlayer = () => 
{ 
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => 
  {
    setIsPlaying(!isPlaying);
  };

  const togglePlayPause = () => 
  {
    setIsPlaying((prev) => !prev);
  };


  return(
  <div className="musicPlayerBox">

    <div className="imageAndInfo">
      {/* Song Image */}
      <img src={songIcon} alt=""/>

      {/* Song Text Information */}
      <div className="songInfo">
        <span className="mainText"> Good Morning  </span>
        <span className="subText"> Kanye West</span>
      </div>

    </div>

    <div className="musicControllerBox">
      <div  className="middleMusicControls">

        <div className="musicControllers">

          <button className="previousButton">
              <img src={previousIcon} alt=""/>
          </button>

          <button className="pausePlay">
              <img src={pauseIcon} alt=""/>
          </button>

          <button className="nextButton">
              <img src={nextIcon} alt=""/>
          </button>
        </div>
          
        <div  className="bottomMusicControls">
          <span> 00:00 </span>
          <Slider className="musicSlider"/>
          <span> 00:00</span>
        </div>
       
      </div>

      

       {/* Volume control*/}
      <div className="VolumeControls">
        <img src={VolumeIcon} alt=""/>
        <Slider className="volumeSlider"/>
      </div>

    </div>
  </div>

  )
}

export default MusicPlayer