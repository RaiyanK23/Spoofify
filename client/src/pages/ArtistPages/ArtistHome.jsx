
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
import ArtistAddSongComponent from "../../components/ArtistComponents/ArtistAddSongComponent.jsx"
import ArtistAddAlbumComponent from "../../components/ArtistComponents/ArtistAddAlbumComponent.jsx"
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
          
        </div>

        {/* Main Screen area */}
        <div className="homePage">
          {currentComponent === "home" ? (<ArtistHomeComponent handleNavigation={handleButtonClick}/>) :
          currentComponent === "addSong" ? (<ArtistAddSongComponent handleNavigation={handleButtonClick} />) : 
          currentComponent === "addAlbum" ? (<ArtistAddAlbumComponent handleNavigation={handleButtonClick} />) : 
          (<ArtistPlaylistPageComponent />)}
        </div>

      </div>

      <MusicPlayer/>
    </div>
  )
}

export default ArtistHome