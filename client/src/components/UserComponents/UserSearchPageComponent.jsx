import React, { useState } from "react";
import axios from "axios";
import "../../css/Components/UserComponents/UserSearchComponent.scss";
import SearchIcon from "../../Images/SearchIcon.png";
import RectanglePlaylistButton from "../SongButtons/RectanglePlaylistButton.jsx";
import Username from "../../components/Username.jsx";

const UserSearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search/${searchTerm}`);
      setSearchResults(response.data.searchResults);
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };

  return (
    <div className="userSearchComponent">
      {/* Header */}
      <div className="userHeaderBox">
        <div className="searchButton">
          <img src={SearchIcon} alt="" />
          <input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onBlur={handleSearch}
          />
        </div>
        <Username />
      </div>

      {/* Search Results Area */}
      <div className="searchResultsArea">
        <header>Search Results</header>

        <div className="searchResults">
          {searchResults.map((result, index) => (
            <RectanglePlaylistButton key={index} name={result.name} type={result.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSearchComponent;
