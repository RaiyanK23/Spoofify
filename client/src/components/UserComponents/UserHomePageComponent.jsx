import React from "react";
import "../../css/Components/UserComponents/UserHomePageComponent.scss"
import PlaylistButton from "../../components/PlaylistButton.jsx"
import RectanglePlaylistButton from "../../components/RectanglePlaylistButton.jsx"


const  UserHomeComponent = () => 
{
  return(
   <div className="userHomeComponent">
        {/* Header */}
        <div className="userHeaderBox">
            <div className="username">
                Welcome Username
            </div>

            {/* Logout button */}
            <button className="logoutButton">
               <u>Logout</u>
            </button>

        </div>

        {/* Favorite Playlists Area */}
        <div className="favoritePlaylistArea">
            <header>
                Your Favorite Playlists
            </header>

            <div className="favoriteAreaBox">
                <PlaylistButton/>
                <PlaylistButton/>
                <PlaylistButton/>
                <PlaylistButton/>
                <PlaylistButton/>
                <PlaylistButton/>
            </div>

        </div>

        {/* Recommend Playlists Area */}
        <div className="recommendedPlaylistArea">
            <header>
                Recommended Playlists 
            </header>

            <div className="RecommendedAreaBox">
                <RectanglePlaylistButton/>
                <RectanglePlaylistButton/>
                <RectanglePlaylistButton/>
                <RectanglePlaylistButton/>
                <RectanglePlaylistButton/>
                <RectanglePlaylistButton/>
            </div>
        </div>

   </div>
  )
}

export default UserHomeComponent