import React from "react";
import "./css/SmallCard.css";

const SmallCard = ({ imageSrc, subheading }) => {
  return (
    <div className="small-card">
      <img src={imageSrc} alt="" className="small-card-image" />
      <h4 className="small-card-subheading">{subheading}</h4>
    </div>
  );
};

export default SmallCard;
