import React from "react";
import { useState, useEffect } from "react";
import "../../css/Components/AdminComponents/AdminHomePageComponent.scss";
import PlaylistButton from "../SongButtons/PlaylistButton.jsx";

import SearchIcon from "../../Images/SearchIcon.png";

import Username from "../../components/Username.jsx";

import ArtistRectanglePlaylistButton from "../SongButtons/ArtistRectanglePlaylistButton.jsx";
import ArtistAddSongOrPlaylistButton from "../SongButtons/ArtistAddSongOrPlaylistButton.jsx";
import RemoveSongOrPlaylistButton from "../SongButtons/RemoveSongOrPlaylistButton.jsx";
import UpdateSongOrPlaylistButton from "../SongButtons/UpdateSongOrPlaylistButton.jsx";

const  ArtistHomeComponent = ({handleNavigation}) => 
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

  /* Remove album/song Dialog */
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const handleOpenRemoveDialog = () => 
  {
    setShowRemoveDialog(true);
  };

  const handleCloseRemoveDialog = () => 
  {
    setShowRemoveDialog(false);
  };

  /* Update album/song Dialog */
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const handleOpenUpdateDialog = () => 
  {
    setShowUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => 
  {
    setShowUpdateDialog(false);
  };



  return(
   <div className="AdminHomeComponent">
        {/* Header */}
        <div className="AdminHeaderBox">

          <div className="searchButton">
            <img src={SearchIcon} alt=""/>
            <input placeholder="Search"></input>
          </div>

          <Username/>
        </div>

        {/* Artist Catalog Area */}
        <div className="catalogArea">
            <header>
              Search Results
            </header>

            <div className="RecommendedAreaBox">
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistRectanglePlaylistButton onClick={() => handleNavigation("viewSong")}/>
                <ArtistAddSongOrPlaylistButton onClick={handleOpenAddDialog}/>
                <RemoveSongOrPlaylistButton onClick={handleOpenRemoveDialog}/>
                <UpdateSongOrPlaylistButton onClick={handleOpenUpdateDialog}/>
            </div>
        </div>

        {/* Add album/ song Dialog */}
        {showAddDialog && (
          <div className="dialogBox">
            {/* Title*/}
            <span>Add a Song or Album</span>

            {/* Choice buttons*/}
            <div className="ControlButtons">
                <button className="customButton" onClick={() => handleNavigation("addSong")}>
                    Song
                </button>

                <button className="customButton"  onClick={() => handleNavigation("addAlbum")}>
                    Album
                </button>

            </div>
            
            {/* Exit buttons*/}
            <button className="customButton" onClick={handleCloseAddDialog}>
                Close
            </button>

          </div>
        )}


        {/* Remove album/song Dialog */}
        {showRemoveDialog && (
          <div className="dialogBox">
            {/* Title*/}
            <span>Remove a Song or Album</span>

            {/* Choice buttons*/}
            <div className="ControlButtons">
                <button className="customButton" onClick={() => handleNavigation("removeSong")}>
                    Song
                </button>

                <button className="customButton"  onClick={() => handleNavigation("removeAlbum")}>
                    Album
                </button>

            </div>
            
            {/* Exit buttons*/}
            <button className="customButton" onClick={handleCloseRemoveDialog}>
                Close
            </button>

          </div>
        )}


        {/* Update album/song Dialog */}
        {showUpdateDialog && (
          <div className="dialogBox">
            {/* Title*/}
            <span>Update a Song or Album</span>

            {/* Choice buttons*/}
            <div className="ControlButtons">
                <button className="customButton" onClick={() => handleNavigation("updateSong")}>
                  Song
                </button>

                <button className="customButton"  onClick={() => handleNavigation("updateAlbum")}>
                  Album
                </button>

            </div>
            
            {/* Exit buttons*/}
            <button className="customButton" onClick={handleCloseRemoveDialog}>
                Close
            </button>

          </div>
        )}
   </div>
  )
}

export default ArtistHomeComponent