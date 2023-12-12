import React from "react";
import { useState, useEffect } from "react";
import "../../css/Components/ArtistComponents/ArtistAddSongComponent.scss"

import Username from "../../components/Username.jsx"

import ArtistRectanglePlaylistButton from "../SongButtons/ArtistRectanglePlaylistButton.jsx"
import ArtistAddSongOrPlaylistButton from "../SongButtons/ArtistAddSongOrPlaylistButton.jsx"

const  ArtistHomeComponent = ({handleNavigation}) => 
{
  return(
   <div className="ArtistAddSongComponent">
      {/* Header */}
      <div className="ArtistHeaderBox">
          <Username/>
      </div>

      {/* Artist Catalog Area */}
      <div className="catalogArea">
      
        <div className="Title">
          <header>
            Add Your Song
          </header>
        </div>

       

        <div className="form">

          {/* Track name and BPM*/}
          <div className="TrackNameAndBPM">
            <div className="field">
              <label htmlFor="trackName">Track name</label>
              <input/>
            </div>

            <div className="field">
              <label htmlFor="trackBPM">Track BPM</label>
              <input/>
            </div>
          </div>

          {/* Track Genre*/}
          <div className="TrackGenreBox">
            <div className="selectField">
              <label htmlFor="accountType">Track Genre</label>
              <select>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Hip-hop/Rap">Hip-hop/Rap</option>
                <option value="Country">Country</option>
                <option value="R&B">R&B</option>
                <option value="Electronic">Electronic</option>
                <option value="Jazz">Jazz </option>
                <option value="Classical">Classical</option>
                <option value="Folk">Folk</option>
                <option value="Metal">Metal</option>
                <option value="Punk">Punk</option>
                <option value="EDM">EDM</option>
                <option value="Techno">Techno</option>
                <option value="House">House</option>
                <option value="Dubstep">Dubstep</option>
                <option value="Ambient">Ambient</option>
              </select>
            </div>
          
          </div>

          {/* Track Uploading*/}
          <div className="TrackUploading">

            <div className="field">
              <label htmlFor="firstName">Upload Track</label>
              <input type="file"  id="fileInput" class="fileInput"/>
            </div>

            <div className="field">
              <label htmlFor="firstName">Upload Track Image</label>
              <input type="file"  id="fileInput" class="fileInput"/>
            </div>
          </div>
            
        </div>

        {/* Add Song Button*/}
        <button className="customButton" onClick={() => handleNavigation("home")}>
          Add Song
        </button>
      </div>
       
   </div>
  )
}

export default ArtistHomeComponent