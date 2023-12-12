
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import SearchIcon from "../../Images/SearchIcon.png";
import HomeIcon from "../../Images/HomeIcon.png";
import PlaylistIcon from "../../Images/PlaylistIcon.png";
import AddPlaylistIcon from "../../Images/AddPlaylistIcon.png";

import "../../css/ArtistPagesCSS/ArtistHome.scss"
import MusicPlayer from "../../components/MusicPlayer.jsx"
import PlaylistButton from "../../components/SongButtons/PlaylistButton.jsx"

import ArtistHomeComponent from "../../components/ArtistComponents/ArtistHomePageComponent.jsx"
import ArtistSearchComponent from "../../components/ArtistComponents/ArtistSearchPageComponent.jsx"
import ArtistPlaylistPageComponent from "../../components/ArtistComponents/ArtistPlaylistPageComponent.jsx"

const  ArtistHome = () => 
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
    <div className="ArtistHome">
      
      <div className="ArtistWindow">

        {/*Playlist area */}
        <div className="searchHomeAndPlaylist">
         
          {/* Home Button*/}
          <div className="homeButtonContainer">
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
          {currentComponent === "home" ? (<ArtistHomeComponent />) :
          currentComponent === "search" ? (<ArtistSearchComponent />) : 
          (<ArtistPlaylistPageComponent />)}
        </div>

      </div>

      <MusicPlayer/>
    </div>
  )
}

export default ArtistHome