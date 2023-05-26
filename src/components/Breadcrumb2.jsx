import React from "react";
import "./Navbar.css";
import { TfiAngleRight } from "react-icons/tfi";
const Breadcrumb2 = () => {
  return (
    <div className="breadcrumb">
      <p>
        UI/UX <TfiAngleRight className="right-angel-icon" /> Refer & Earn{" "}
        <TfiAngleRight className="right-angel-icon" /> Friends Referred
      </p>
    </div>
  );
};

export default Breadcrumb2;
