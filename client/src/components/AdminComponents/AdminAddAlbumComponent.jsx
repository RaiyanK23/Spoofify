import React from "react";
import { useState, useEffect } from "react";
import "../../css/Components/ArtistComponents/ArtistAddAlbumComponent.scss"

import Username from "../../components/Username.jsx"

const  ArtistAlbumComponent = ({handleNavigation}) => 
{
  return(
   <div className="ArtistAddAlbumComponent">
      {/* Header */}
      <div className="ArtistHeaderBox">
          <Username/>
      </div>

      {/* Artist Catalog Area */}
      <div className="catalogArea">
      
        <div className="Title">
          <header>
            Add Your Album
          </header>
        </div>

       

        <div className="form">

          {/* Track name and BPM*/}
          <div className="TrackName">
            <div className="field">
              <label htmlFor="trackName">Album Name</label>
              <input/>
            </div>
          </div>

          {/* Track Uploading*/}
          <div className="AlbumUploading">

            <div className="field">
              <label htmlFor="firstName">Upload Songs</label>
              <input type="file"  id="fileInput" class="fileInput"/>
            </div>

            <div className="field">
              <label htmlFor="firstName">Upload Album Image</label>
              <input type="file"  id="fileInput" class="fileInput"/>
            </div>
          </div>
            
        </div>

        {/* Add Song Button*/}
        <button className="customButton" onClick={() => handleNavigation("home")}>
          Add Album
        </button>
      </div>
       
   </div>
  )
}

export default ArtistAlbumComponent