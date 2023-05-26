import React from "react";
import "./ReferralHome.css";
import { FaUsers } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

const ReferralHome = () => {
  return (
    <>
    <Breadcrumb/>
      <div className="container">
        <div className="container-left">
          <div className="inner-box">
            <div>
              <p className="text-ref">Referral Earning</p>
              <p className="value">₹ 2,500</p>
            </div>
            <div>
              <p className="text-ref">Total Referrals</p>
              <p className="value">7</p>
            </div>
            <div>
              <p className="text-ref">Wallet Balance</p>
              <p className="value">₹ 500</p>
            </div>
          </div>
          <div>
            <button className="withdraw-bal">Withdraw Balance</button>
          </div>
        </div>
        <div className="container-right">
          <p className="code-text">Your Referral Code </p>
          <div className="code">E D C H 5 4</div>
        </div>
      </div>
      <div className="steps">
        <p className="How-does-work">How does it work ?</p>
        <div className="step-container">
          <div className="groups">
            <div className="offer-icons-div">
              <FaUsers className="offer-icons" />
            </div>
            <div>
              <p className="offer-heading">Invite your Friends</p>
              <p className="offer-details">
                Share the link tutedude.com with your friends
              </p>
            </div>
          </div>
          <div className="groups">
            <div className="offer-icons-div">
              <FaUsers className="offer-icons" />
            </div>
            <div>
              <p className="offer-heading">Friend purchases any course</p>
              <p className="offer-details">
                Using your REFERRAL CODE in the payments page
              </p>
            </div>
          </div>
          <div className="groups">
            <div className="offer-icons-div">
              <FaUsers className="offer-icons" />
            </div>
            <div>
              <p className="offer-heading">You get ₹ 200 as referral money</p>
              <p className="offer-details">
                On total purchase the friend makes, into your wallet
              </p>
            </div>
          </div>
          <div className="groups">
            <div className="offer-icons-div">
              <FaUsers className="offer-icons" />
            </div>
            <div>
              <p className="offer-heading">Your Friend gets ₹ 200 Off </p>
              <p className="offer-details">
                On his overall fee on successful purchase using your referral
                code
              </p>
            </div>
          </div>
          <div className="groups">
            <div className="offer-icons-div">
              <FaUsers className="offer-icons" />
            </div>
            <div>
              <p className="offer-heading">Transfer money from wallet</p>
              <p className="offer-details">
                When the wallet balance reaches ₹200 or more, you can withdraw
                it
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="link">Friends Who Enrolled</p>
      <p className="link2">Terms & Conditions</p>
     <Link to="/referral-details"> <button className="next">Next Page</button></Link>
     
    </>
  );
};

export default ReferralHome;
