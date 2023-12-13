import React from "react";
import PlaylistIcon from "../../Images/Graduation.jpeg";
import "../../css/Components/SongButtons/RectanglePlaylistButton.scss";

const RectanglePlaylistButton = ({ name, type }) => {
  return (
    <button className="rectanglePlaylistButton">
      <img src={PlaylistIcon} alt="" />
      <span>{name}</span>
      <span className="type">{type}</span>
    </button>
  );
};

export default RectanglePlaylistButton;
