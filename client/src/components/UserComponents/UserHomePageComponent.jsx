import React from "react";
import "../../css/Components/UserComponents/UserHomePageComponent.scss"
import PlaylistButton from "../SongButtons/PlaylistButton.jsx"
import RectanglePlaylistButton from "../SongButtons/RectanglePlaylistButton.jsx"
import Username from "../../components/Username.jsx"


const  UserHomeComponent = () => 
{
  return(
   <div className="userHomeComponent">
        {/* Header */}
        <div className="userHeaderBox">
            <Username/>
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