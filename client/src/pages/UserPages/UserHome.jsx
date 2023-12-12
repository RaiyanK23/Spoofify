import React, { useState, useEffect } from "react";
import axios from 'axios';
import SearchIcon from "../../Images/SearchIcon.png";
import HomeIcon from "../../Images/HomeIcon.png";
import PlaylistIcon from "../../Images/PlaylistIcon.png";
import CreatePlaylistButton from "../../components/CreatePlaylistButton";
import MusicPlayer from "../../components/MusicPlayer.jsx";
import PlaylistButton from "../../components/SongButtons/PlaylistButton.jsx";
import UserHomeComponent from "../../components/UserComponents/UserHomePageComponent.jsx";
import UserSearchComponent from "../../components/UserComponents/UserSearchPageComponent.jsx";
import UserPlaylistPageComponent from "../../components/UserComponents/UserPlaylistPageComponent.jsx";
import "../../css/UserPagesCSS/UserHome.scss";

const UserHome = () => {
  const [currentComponent, setCurrentComponent] = useState("home");
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/playlists');
        setPlaylists(response.data.playlists);
      } catch (error) {
        console.error('Error fetching playlists:', error.message);
      }
    };

    fetchPlaylists();
  }, []);

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  const handlePlaylistButtonClick = () => {
    setCurrentComponent("playlist");
  };

  return (
    <div className="userHome">
      <div className="window">
        <div className="searchHomeAndPlaylist">
          <div className="searchAndHomeButtons">
            <button className="searchButton" onClick={() => handleButtonClick("search")}>
              <img src={SearchIcon} alt="" />
              Search
            </button>
            <button className="homeButton" onClick={() => handleButtonClick("home")}>
              <img src={HomeIcon} alt="" />
              Home
            </button>
          </div>
          <div className="playlists">
            <div className="playlistHeader">
              <header>
                <img src={PlaylistIcon} alt="" />
                Your Playlists
              </header>
              <CreatePlaylistButton />
            </div>
            <div className="listOfPlaylist">
              {playlists.map((playlist) => (
                <PlaylistButton
                  key={playlist.PlaylistSongsID}
                  onClick={() => handlePlaylistButtonClick()}
                  playlistName={playlist.PlaylistName}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="homePage">
          {currentComponent === "home" ? (
            <UserHomeComponent />
          ) : currentComponent === "search" ? (
            <UserSearchComponent />
          ) : (
            <UserPlaylistPageComponent />
          )}
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default UserHome;
