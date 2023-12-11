import React from "react";
import {Link} from "react-router-dom"

import "../../css/UserPagesCSS/UserHome.scss"
import MusicPlayer from "../../components/MusicPlayer.jsx"

const  UserHome = () => 
{
  return(
    <div className="userHome">
      
      <div className="window">
        <p>Hey hey</p>
      </div>

      <MusicPlayer/>
    </div>
  )
}

export default UserHome