import React from "react";
import {Link} from "react-router-dom"

import SearchIcon from "../../Images/SearchIcon.png";
import HomeIcon from "../../Images/HomeIcon.png";
import PlaylistIcon from "../../Images/PlaylistIcon.png";
import AddPlaylistIcon from "../../Images/AddPlaylistIcon.png";

import "../../css/UserPagesCSS/UserHome.scss"
import MusicPlayer from "../../components/MusicPlayer.jsx"
import PlaylistButton from "../../components/PlaylistButton.jsx"

const  UserHome = () => 
{
  return(
    <div className="userHome">
      
      <div className="window">

        {/* Search Home and Playlist area */}
        <div className="searchHomeAndPlaylist">
         
          {/* Search and Home Buttons*/}
          <div className="searchAndHomeButtons">
            {/* Search Button*/}
            <button className="searchButton">
              <img src={SearchIcon} alt=""/>
               Search
            </button>

            {/* Home Button*/}
            <button className="homeButton">
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
              <PlaylistButton/>
              <PlaylistButton/>
              <PlaylistButton/>
              <PlaylistButton/>


            </div>

          </div>
        
        </div>

        {/* Main Screen area */}
        <div className="homePage">
          <p>homePage </p>
        </div>

      </div>

      <MusicPlayer/>
    </div>
  )
}

export default UserHome