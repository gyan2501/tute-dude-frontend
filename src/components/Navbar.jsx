import React from "react";
import "./Navbar.css";
import { TfiAngleDown } from 'react-icons/tfi'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
      <div className="logo">
        <img
          src="https://s3-ap-south-1.amazonaws.com/internshala-uploads-new/google_logo/5ec529134d4ac1589979411.png"
          alt="logo"
        />
      </div></Link>
      <div className="menu">
        <p className="assingment">My Assignment</p>
        <p className="mentor">Chat with Mentor</p>
        <p className="profile-text"> <BiUserCircle className="usericon"/> ProfileName <TfiAngleDown className="angel-icon" /></p>

        <button className="profile-button">ProfileName <TfiAngleDown className="angel-icon-btn"/></button>
      </div>
    </div>
  );
};

export default Navbar;
