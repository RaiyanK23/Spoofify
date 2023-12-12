import React, { useState } from "react";
import AddPlaylistIcon from "../Images/AddPlaylistIcon.png";

const CreatePlaylistButton = ({ onPlaylistCreate }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setPlaylistName("");
  };

  const handleConfirm = async () => {
    try {
      // Make a POST request to create a new playlist
      const response = await fetch('http://localhost:5000/api/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ PlaylistName: playlistName }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
        
        // Trigger the onPlaylistCreate callback to refresh the playlist data
        if (onPlaylistCreate) {
          onPlaylistCreate();
        }
      } else {
        const errorData = await response.json();
        console.error('Playlist creation failed:', errorData.error);
      }
  
      // Close the modal
      closeModal();
    } catch (error) {
      console.error('Error creating playlist:', error.message);
      // Handle the error as needed
    }
  };

  const handleKeyDown = (e) => {
    // Check if the pressed key is "Enter"
    if (e.key === "Enter") {
      // Prevent the default behavior (e.g., form submission)
      e.preventDefault();
      // Handle confirmation
      handleConfirm();
    }
  };

  return (
    <div>
      <button className="createPlaylistButton" onClick={openModal}>
        <img src={AddPlaylistIcon} alt="" />
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Enter playlist name:</p>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              onKeyDown={handleKeyDown} // Handle Enter key press
              autoFocus // Automatically focus the input field when the modal opens
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePlaylistButton;
