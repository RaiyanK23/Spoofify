import React, { useState } from "react";
import axios from "axios";
import "../../css/Components/ArtistComponents/ArtistAddAlbumComponent.scss";
import Username from "../../components/Username.jsx";

const RemoveAlbumComponent = ({ handleNavigation }) => {
  const [formData, setFormData] = useState({
    albumName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRemoveAlbum = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/addAlbum/${formData.albumName}`);

      console.log(response.data.message);
    } catch (error) {
      console.error("Error removing album:", error.message);
    }

    handleNavigation("home");
  };

  return (
    <div className="ArtistAddAlbumComponent">
      {/* Header */}
      <div className="ArtistHeaderBox">
        <Username />
      </div>

      {/* Artist Catalog Area */}
      <div className="catalogArea">
        <div className="Title">
          <header>Remove Album</header>
        </div>

        <div className="form">
          {/* Album name */}
          <div className="TrackName">
            <div className="field">
              <label htmlFor="albumName">Album Name</label>
              <input
                type="text"
                name="albumName"
                value={formData.albumName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Remove Album Button*/}
        <button className="customButton" onClick={handleRemoveAlbum}>
          Remove Album
        </button>
      </div>
    </div>
  );
};

export default RemoveAlbumComponent;
