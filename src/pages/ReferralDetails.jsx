import React from "react";
import Breadcrumb2 from "../components/Breadcrumb2";
import "./ReferralDetails.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReferralDetails = () => {
  return (
    <>
      <Breadcrumb2 />
      <Link to="/">
        <p className="goback">
          {" "}
          <AiOutlineArrowLeft />
          go back
        </p>
      </Link>

      <div className="ref-code-bal">
        <div className="ref-code">
          <p className="ref-text">Your Referral Code</p>
          <button className="ref-btn">EDCH54</button>
        </div>
        <div className="bal">
          <p className="wallet">Wallet Balance</p>
          <p className="price">₹ 500</p>
        </div>
      </div>
      <br />
      <br />
      <div>
        <p className="frnd">
          Friends who enrolled <span>(3)</span>{" "}
        </p>
        <br />
        <div className="frnd-div">
          <div className="child-div"></div>
          <div className="child-div"></div>
          <div className="child-div"></div>
        </div>
      </div>
      <p className="Tc">Terms & Conditions</p>
    </>
  );
};

export default ReferralDetails;
