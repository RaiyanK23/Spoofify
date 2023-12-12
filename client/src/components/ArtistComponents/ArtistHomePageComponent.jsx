import React from "react";
import { useState, useEffect } from "react";
import "../../css/Components/ArtistComponents/ArtistHomePageComponent.scss"
import PlaylistButton from "../SongButtons/PlaylistButton.jsx"

import Username from "../../components/Username.jsx"

import ArtistRectanglePlaylistButton from "../SongButtons/ArtistRectanglePlaylistButton.jsx"
import ArtistAddSongOrPlaylistButton from "../SongButtons/ArtistAddSongOrPlaylistButton.jsx"

const  ArtistHomeComponent = () => 
{
    
  /*Add Song or playlist dialog box */
  const [showAddDialog, setShowAddDialog] = useState(false);
  const handleOpenAddDialog = () => 
  {
    setShowAddDialog(true);
  };

  const handleCloseAddDialog = () => 
  {
    setShowAddDialog(false);
  };



  return(
   <div className="ArtistHomeComponent">
        {/* Header */}
        <div className="ArtistHeaderBox">
            <Username/>
        </div>

        {/* Artist Catalog Area */}
        <div className="catalogArea">
            <header>
                Your Catalog 
            </header>

            <div className="RecommendedAreaBox">
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistRectanglePlaylistButton/>
                <ArtistAddSongOrPlaylistButton onClick={handleOpenAddDialog}/>
            </div>
        </div>

        {/* Add album/ song Dialog */}
        {showAddDialog && (
          <div className="dialogBox">
            {/* Title*/}
            <span>Add a Song or Album</span>

            {/* Choice buttons*/}
            <div className="ControlButtons">
                <button className="customButton">
                    Song
                </button>

                <button className="customButton">
                    Album
                </button>

            </div>
            
            {/* Exit buttons*/}
            <button className="customButton" onClick={handleCloseAddDialog}>
                Close
            </button>

          </div>
        )}
   </div>
  )
}

export default ArtistHomeComponent