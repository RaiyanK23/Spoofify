import React, { useState } from "react";
import axios from "axios";
import "../../css/Components/ArtistComponents/ArtistAddAlbumComponent.scss";
import Username from "../../components/Username.jsx";

const ArtistAlbumComponent = ({ handleNavigation }) => {
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

  const handleAddAlbum = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/addAlbum", {
        AlbumName: formData.albumName,
      });

      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding album:", error.message);
    }
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
          <header>Add Your Album</header>
        </div>

        <div className="form">
          {/* Album Name */}
          <div className="AlbumName">
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

          {/* Album Uploading */}
          <div className="AlbumUploading">
            <div className="field">
              <label htmlFor="songs">Upload Songs</label>
              <input type="file" id="fileInput" className="fileInput" />
            </div>

            <div className="field">
              <label htmlFor="albumImage">Upload Album Image</label>
              <input type="file" id="fileInput" className="fileInput" />
            </div>
          </div>
        </div>

        {/* Add Album Button */}
        <button className="customButton" onClick={handleAddAlbum}>
          Add Album
        </button>
      </div>
    </div>
  );
};

export default ArtistAlbumComponent;
