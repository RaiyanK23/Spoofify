import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/Logo.png";
import axios from 'axios';

import "../css/Components/Username.scss"

const Username = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  const handleLogout = async () => {
    try {
      // Make a POST request to the logout endpoint
      const response = await axios.post('http://localhost:5000/api/logout', null, {
        withCredentials: true,
      });


      if (response.status === 200) {
        // Logout successful, redirect to '/'
        navigate('/');
      } else {
        console.error('Logout failed:', response.data.error);
        // Handle logout failure if needed
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle logout error if needed
    }
  };

  const getUserInfo = async () => {
    try {
      // Make a GET request to the userinfo endpoint
      const response = await axios.get('http://localhost:5000/api/userInfo', {
        withCredentials: true, // Include cookies with the request
      });

      if (response.status === 200) {
        // Set user information in state
        setUserInfo(response.data.userInfo);
      } else {
        console.error('Error fetching user information:', response.data.error);
        // Handle error if needed
      }
    } catch (error) {
      console.error('Error during user information fetch:', error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    // Fetch user information when the component mounts
    getUserInfo();
  }, []);

  return (
    <div className="username">
      {userInfo ? `Welcome ${userInfo.Fname} ${userInfo.Lname}` : 'Loading...'}

      {/* Logout button */}
      <button className="logoutButton" onClick={handleLogout}>
        <u>Logout</u>
      </button>
    </div>
  );
}

export default Username;
