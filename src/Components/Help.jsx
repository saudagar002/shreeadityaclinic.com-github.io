import React from "react";
import "../Style/Help.css";

function Help() {
  return (
    <div className="hlo">
      <h3>__ Smyle Big Smyle XL - __</h3>
      <h1>HELP US TO HELP YOU!</h1>

      <div className="abs">
        <div className="icon-container">
          <div className="icon-wrapper">
            {/* <i className="fa-solid fa-tooth"></i> */}
            <i className="fa-regular fa-face-smile"></i>

            <p className="icon-text">i,m in pain </p>
            <div className="one">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>

        <div className="icon-container">
          <div className="icon-wrapper">
            <i className="fa-regular fa-face-smile"></i>
            <p className="icon-text"> Better Smile </p>
            <div className="one">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>

        <div className="icon-container">
          <div className="icon-wrapper">
            {/* <i className="fa-solid fa-tooth"></i> */}
            <i className="fa-solid fa-teeth"></i>
            <p className="icon-text"> Cavity free </p>
            <div className="one">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>

        <div className="icon-container">
          <div className="icon-wrapper">
            {/* <i className="fa-solid fa-tooth"></i> */}
            <i className="fa-solid fa-face-grimace"></i>
            <p className="icon-text">Smile</p>
            <div className="one">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>

        <div className="icon-container">
          <div className="icon-wrapper">
            {/* <i className="fa-solid fa-tooth"></i> */}
            <i className="fa-solid fa-face-grimace"></i>

            <p className="icon-text">Face </p>
            <div className="one">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>

        {/* Repeat the above structure as needed */}
      </div>
    </div>
  );
}

export default Help;
