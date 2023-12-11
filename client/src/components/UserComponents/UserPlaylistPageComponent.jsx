import React from "react";
import "../../css/Components/UserComponents/UserPlaylistPageComponent.scss"

import PlaylistPic from "../../Images/Graduation.jpeg";

import LongSongButton from "../SongButtons/LongSongButton.jsx"
import Username from "../../components/Username.jsx"

const  UserPlaylistComponent = () => 
{
  return(
   <div className="userPlaylistComponent">
        {/* Header */}
        <div className="userHeaderBox">

            <div className="playlistInformation">
                <img src={PlaylistPic} alt=""/>

                <div className="playlistTexts">
                    <span className="mainText"><b>Liked Song</b></span>
                    <span className="subText">Playlist made by you</span>
                </div>
                
            </div>
        
            <Username/>

        </div>

        {/* Search Results Area */}
        <div className="playlistContentsArea">
            <div className="playlistRowInfo">
                <span>Title</span>
                <span>Album</span>
                <span>Duration</span>
            </div>

            <div className="divider"></div>

            <div className="playlistContents">
                <LongSongButton/>
                <LongSongButton/>
                <LongSongButton/>
                <LongSongButton/>
                <LongSongButton/>

   
            </div>
        </div>

   </div>
  )
}

export default UserPlaylistComponent