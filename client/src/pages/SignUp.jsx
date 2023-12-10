import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../css/LoginPagesCSS/SignUp.scss";

const SignUp = () => 
{
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    accountType: 'User', // Set a default value, or let the user choose
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.emailAddress,
        accountType: formData.accountType,
        password: formData.password,
      });
  
      console.log(response.data);
  
      // If sign-up is successful, navigate to the home page
      navigate('/');
    } catch (error) {
      console.error('Error during signup:', error.message);
      // Handle the error as needed
    }
  };
  

  return (
    <div className="signUp">
      <div className="signUpBox">
        <p>Sign-Up</p>

        {/* First name last Name */}
        <div className="firstAndLastName">
          {/* First name*/}
          <div className="field">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          {/* Last name*/}
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Account type*/}
        <div className="selectField">
          <label htmlFor="accountType">Account type</label>
          <select
            id="dropdown"
            name="accountType"
            value={formData.accountType}
            onChange={handleInputChange}
          >
            <option value="User">User</option>
            <option value="Artist">Artist</option>
          </select>
        </div>

        {/* Email Address*/}
        <div className="field">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            placeholder="name@domain.com"
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Username */}
        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        {/* Password */}
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password" // Use type="password" for password fields
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        {/* Sign up button */}
        <div className="signUpButton">
          <button onClick={handleSignUp} className="customButton">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
