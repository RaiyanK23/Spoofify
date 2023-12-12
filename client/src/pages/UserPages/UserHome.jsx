
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from 'axios';

import SearchIcon from "../../Images/SearchIcon.png";
import HomeIcon from "../../Images/HomeIcon.png";
import PlaylistIcon from "../../Images/PlaylistIcon.png";
import AddPlaylistIcon from "../../Images/AddPlaylistIcon.png";

import "../../css/UserPagesCSS/UserHome.scss"
import MusicPlayer from "../../components/MusicPlayer.jsx"
import PlaylistButton from "../../components/SongButtons/PlaylistButton.jsx"

import UserHomeComponent from "../../components/UserComponents/UserHomePageComponent.jsx"
import UserSearchComponent from "../../components/UserComponents/UserSearchPageComponent.jsx"
import UserPlaylistPageComponent from "../../components/UserComponents/UserPlaylistPageComponent.jsx"

const  UserHome = () => 
{

  const [currentComponent, setCurrentComponent] = useState("home");

  const handleButtonClick = (component) => 
  {
    setCurrentComponent(component);
  };

  const handlePlaylistButtonClick = () => 
  {
    setCurrentComponent("playlist");
  };

  return(
    <div className="userHome">
      
      <div className="window">

        {/* Search Home and Playlist area */}
        <div className="searchHomeAndPlaylist">
         
          {/* Search and Home Buttons*/}
          <div className="searchAndHomeButtons">
            {/* Search Button*/}
            <button className="searchButton"  onClick={() => handleButtonClick("search")}>
              <img src={SearchIcon} alt=""/>
               Search
            </button>

            {/* Home Button*/}
            <button className="homeButton" onClick={() => handleButtonClick("home")}>
              <img src={HomeIcon} alt=""/>
               Home
            </button>

          </div>
          
          {/* Playlists area */}
          <div className="playlists">
            <div className="playlistHeader">
              <header>
                <img src={PlaylistIcon} alt=""/>
                Your Playlists 
              </header>

              <button className="createPlaylistButton">
                <img src={AddPlaylistIcon} alt=""/>
              </button>

            </div>

            <div className="listOfPlaylist">
              <PlaylistButton onClick={handlePlaylistButtonClick} />
              <PlaylistButton onClick={handlePlaylistButtonClick} />
              <PlaylistButton onClick={handlePlaylistButtonClick} />
              <PlaylistButton onClick={handlePlaylistButtonClick} />
            </div>

          </div>
        
        </div>

        {/* Main Screen area */}
        <div className="homePage">
          {currentComponent === "home" ? (<UserHomeComponent />) :
          currentComponent === "search" ? (<UserSearchComponent />) : 
          (<UserPlaylistPageComponent />)}
        </div>

      </div>

      <MusicPlayer/>
    </div>
  )
}

export default UserHome