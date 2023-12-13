import React, { useState } from "react";
import axios from "axios";
import "../../css/Components/ArtistComponents/ArtistAddSongComponent.scss";
import Username from "../../components/Username.jsx";

const RemoveSongComponent = ({ handleNavigation }) => {
  const [formData, setFormData] = useState({
    trackName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRemoveSong = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/addSong/${formData.trackName}`);

      console.log(response.data.message);
    } catch (error) {
      console.error("Error removing song:", error.message);
    }

    handleNavigation("home");
  };

  return (
    <div className="ArtistAddSongComponent">
      {/* Header */}
      <div className="ArtistHeaderBox">
        <Username />
      </div>

      {/* Artist Catalog Area */}
      <div className="catalogArea">
        <div className="Title">
          <header>Remove Song</header>
        </div>

        <div className="form">
          {/* Track name */}
          <div className="TrackNameAndBPM">
            <div className="field">
              <label htmlFor="trackName">Track name</label>
              <input
                type="text"
                name="trackName"
                value={formData.trackName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Remove Song Button*/}
        <button className="customButton" onClick={handleRemoveSong}>
          Remove Song
        </button>
      </div>
    </div>
  );
};

export default RemoveSongComponent;
