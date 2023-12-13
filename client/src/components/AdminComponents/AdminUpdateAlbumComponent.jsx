import React, { useState } from "react";
import axios from "axios";
import "../../css/Components/ArtistComponents/ArtistAddAlbumComponent.scss";
import Username from "../../components/Username.jsx";

const ArtistAlbumComponent = ({ handleNavigation }) => {
  const [formData, setFormData] = useState({
    existingAlbumName: "",
    newAlbumName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdateAlbum = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/addAlbum/${formData.existingAlbumName}`,
        {
          newAlbumName: formData.newAlbumName,
        }
      );

      console.log(response.data.message);
    } catch (error) {
      console.error("Error updating album:", error.message);
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
          <header>Update Your Album</header>
        </div>

        <div className="form">
          {/* Album names */}
          <div className="AlbumNames">
            <div className="field">
              <label htmlFor="existingAlbumName">Existing Album Name</label>
              <input
                type="text"
                name="existingAlbumName"
                value={formData.existingAlbumName}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="newAlbumName">New Album Name</label>
              <input
                type="text"
                name="newAlbumName"
                value={formData.newAlbumName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Update Album Button*/}
        <button className="customButton" onClick={handleUpdateAlbum}>
          Update Album
        </button>
      </div>
    </div>
  );
};

export default ArtistAlbumComponent;
