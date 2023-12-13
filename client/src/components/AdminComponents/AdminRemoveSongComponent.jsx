import React, { useState } from "react";
import axios from "axios";
import "../../css/Components/ArtistComponents/ArtistAddSongComponent.scss";
import Username from "../../components/Username.jsx";

const ArtistHomeComponent = ({ handleNavigation }) => {
  const [formData, setFormData] = useState({
    trackName: "",
    trackBPM: "",
    trackGenre: "Pop", // Default value, you can change it based on your default selection logic
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddSong = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/addSong", {
        TrackName: formData.trackName,
        BPM: formData.trackBPM,
        TrackGenre: formData.trackGenre,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding song:", error.message);
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
          {/* Track name and BPM*/}
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
            <div className="field">

            </div>
          </div>
        </div>

        {/* Add Song Button*/}
        <button className="customButton" onClick={handleAddSong}>
          Remove Song
        </button>
      </div>
    </div>
  );
};

export default ArtistHomeComponent;
