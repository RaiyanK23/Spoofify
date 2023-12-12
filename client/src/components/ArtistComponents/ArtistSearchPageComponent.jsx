import React from "react";
import "../../css/Components/UserComponents/UserSearchComponent.scss"

import SearchIcon from "../../Images/SearchIcon.png";

import PlaylistButton from "../SongButtons/PlaylistButton.jsx"
import RectanglePlaylistButton from "../SongButtons/RectanglePlaylistButton.jsx"
import Username from "../../components/Username.jsx"

const  UserSearchComponent = () => 
{
  return(
   <div className="userSearchComponent">
        {/* Header */}
        <div className="userHeaderBox">

            <div className="searchButton">
                <img src={SearchIcon} alt=""/>
                <input placeholder="Search"></input>
            </div>
        
            <Username/>

        </div>

        {/* Search Results Area */}
        <div className="searchResultsArea">
            <header>
                Search Results
            </header>

            <div className="searchResults">
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

export default UserSearchComponent