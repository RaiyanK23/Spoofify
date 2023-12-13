
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import SearchIcon from "../../Images/SearchIcon.png";
import HomeIcon from "../../Images/HomeIcon.png";
import PlaylistIcon from "../../Images/PlaylistIcon.png";
import AddPlaylistIcon from "../../Images/AddPlaylistIcon.png";

import "../../css/ArtistPagesCSS/ArtistHome.scss"
import MusicPlayer from "../../components/MusicPlayer.jsx"
import PlaylistButton from "../../components/SongButtons/PlaylistButton.jsx"

import AdminHomeComponent from "../../components/AdminComponents/AdminHomePageComponent.jsx"
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
    <div className="AdminHome">
      
      <div className="AdminWindow">

        {/*Playlist area */}
        <div className="searchHomeAndPlaylist">
         
          {/* Home Button*/}
          <div className="homeButtonContainer">
            <button className="homeButton" onClick={() => handleButtonClick("home")}>
              <img src={HomeIcon} alt=""/>
               Admin Home
            </button>
          </div>
          
        </div>

        {/* Main Screen area */}
        <div className="homePage">
          {currentComponent === "home" ? (<AdminHomeComponent handleNavigation={handleButtonClick}/>) :
          currentComponent === "addSong" ? (<ArtistAddSongComponent handleNavigation={handleButtonClick} />) : 
          currentComponent === "addAlbum" ? (<ArtistAddAlbumComponent handleNavigation={handleButtonClick} />) : 
          currentComponent === "viewSong" ? (<ArtistPlaylistPageComponent handleNavigation={handleButtonClick} />) : 
          (<AdminHomeComponent />)}
        </div>

      </div>

      <MusicPlayer/>
    </div>
  )
}

export default ArtistHome