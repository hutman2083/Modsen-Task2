import React from "react";
import "./styleBook.css";
import img from "./1669907840_3-pibig-info-p-monokuma-spraiti-oboi-3.png";

const LoadingIndicator = () => {
    return (
      <div className="loading-indicator-container">
        <div className="loading-indicator">
          <img src={img} alt="" />
        </div>
      </div>
    );
  };

export default LoadingIndicator;