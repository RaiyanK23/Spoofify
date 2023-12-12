import React from "react";
import "../../css/Components/SongButtons/PlaylistButtons.scss";

const PlaylistButton = ({ onClick, playlistName }) => {
  return (
    <button className="playlistButton" onClick={onClick}>
      <span>{playlistName}</span>
    </button>
  );
};

export default PlaylistButton;
