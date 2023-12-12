import React from "react";
import songIcon from "../Images/Graduation.jpeg";
import currentSong from "../Audio/Kanye West - Good Morning.mp3"
import { useState, useEffect, useRef } from 'react';

import{Slider} from '@mui/material';

import nextIcon from "../Images/NextIcon.png";
import previousIcon from "../Images/PreviousIcon.png";
import playIcon from "../Images/PlayIcon.png";
import pauseIcon from "../Images/PauseIcon.png";
import VolumeIcon from "../Images/VolumeIcon.png";

import "../css/Components/MusicPlayer.scss"
const  MusicPlayer = () => 
{ 
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [elapsed, setElapsed] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const togglePlay = () => 
  {
    if (!isPlaying) 
    {
      audioPlayer.current.play();
    } else 
    {
      audioPlayer.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => 
  {
    if (audioPlayer.current) 
    {
      audioPlayer.current.volume = volume / 100;
      const _duration = Math.floor(audioPlayer.current.duration);
      const _elapsed = Math.floor(audioPlayer.current.currentTime);
      setTimeRemaining(_duration);
      setElapsed(_elapsed);
    }

    const interval = setInterval(() => 
    {
      if (audioPlayer.current && !isScrubbing) 
      {
        const _duration = Math.floor(audioPlayer.current.duration);
        const _elapsed = Math.floor(audioPlayer.current.currentTime);
        setTimeRemaining(_duration);
        setElapsed(_elapsed);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [volume, isPlaying, isScrubbing]);

  const handleSliderChange = (event, value) => 
  {
    if (audioPlayer.current)
     {
      if (!isScrubbing) 
      {
        setIsScrubbing(true);
        audioPlayer.current.pause();
      }

      const newPosition = (value / 100) * timeRemaining;
      audioPlayer.current.currentTime = newPosition;
      setElapsed(newPosition);
    }
  };

  const handleSliderChangeCommitted = () => 
  {
    if (audioPlayer.current) 
    {
      setIsScrubbing(false);

      if (isPlaying) {
        audioPlayer.current.play();
      }
    }
  };


  function formatTime(time)
  {
    if(time && !isNaN(time))
    {
      const minutes = Math.floor(time/60) < 10 ? `0${Math.floor(time/60)}` : Math.floor(time/60);
      const seconds = Math.floor(time%60) < 10 ? `0${Math.floor(time%60)}` : Math.floor(time%60);
      return `${minutes}:${seconds }`;
    }
    else
    {
      return '00:00';
    }
  }



  return(
  <div className="musicPlayerBox">
    <audio src={currentSong} ref={audioPlayer}/>

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

        {/* Music Controls */} 
        <div className="musicControllers">

          {/* Previous Button */} 
          <button className="previousButton">
            <img src={previousIcon} alt=""/>
          </button>

          {/* Play Button */} 

          {!isPlaying
              ? <button className="pausePlay" onClick={togglePlay}>
                  <img src={playIcon} alt=""/>
                </button>

              : <button className="pausePlay" onClick={togglePlay}>
                  <img src={pauseIcon} alt=""/>
                </button>

          }

          {/* Next Button */} 
          <button className="nextButton">
            <img src={nextIcon} alt=""/>
          </button>
        </div>

        {/* Music bar */} 
        <div className="bottomMusicControls">
        <span>{formatTime(elapsed)}</span>
        <Slider
          className="musicSlider"
          value={(elapsed / timeRemaining) * 100}
          max={100}
          onChange={handleSliderChange}
          onChangeCommitted={handleSliderChangeCommitted}
        />
        <span>{formatTime(timeRemaining)}</span>
      </div>

       
      </div>
      
       {/* Volume control*/}
      <div className="VolumeControls">
        <img src={VolumeIcon} alt=""/>

        <Slider className="volumeSlider" 
          min = {0} max = {100} value = {volume}
          onChange={(e,v) => setVolume(v)}
        />

      </div>

    </div>
  </div>

  )
}

export default MusicPlayer