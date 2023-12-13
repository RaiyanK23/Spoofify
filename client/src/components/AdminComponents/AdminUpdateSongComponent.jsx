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
          <header>Update Song</header>
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
              <label htmlFor="trackBPM">Track BPM</label>
              <input
                type="text"
                name="trackBPM"
                value={formData.trackBPM}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Track Genre*/}
          <div className="TrackGenreBox">
            <div className="selectField">
              <label htmlFor="trackGenre">Track Genre</label>
              <select
                id="dropdown"
                name="trackGenre"  // Ensure that this matches the property name in your state
                value={formData.trackGenre}
                onChange={handleInputChange}
              >
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Hip-hop/Rap">Hip-hop/Rap</option>
                <option value="Country">Country</option>
                <option value="R&B">R&B</option>
                <option value="Electronic">Electronic</option>
                <option value="Jazz">Jazz</option>
                <option value="Classical">Classical</option>
                <option value="Folk">Folk</option>
                <option value="Metal">Metal</option>
                <option value="Punk">Punk</option>
                <option value="EDM">EDM</option>
                <option value="Techno">Techno</option>
                <option value="House">House</option>
                <option value="Dubstep">Dubstep</option>
                <option value="Ambient">Ambient</option>
                {/* Add other genre options */}
              </select>
            </div>
          </div>

          {/* Track Uploading*/}
        </div>

        {/* Add Song Button*/}
        <button className="customButton" onClick={handleAddSong}>
          Update Song
        </button>
      </div>
    </div>
  );
};

export default ArtistHomeComponent;
