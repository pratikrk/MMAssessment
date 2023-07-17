import React from "react";
import "./css/Card.css"
const Card = ({ imageSrc, heading, paragraph }) => {
        return (
            <div className="card">
            <img src={imageSrc} alt="" className="card-image" />
            <div className="card-content">
                <h2 className="card-heading text-dark">{heading}</h2>
                <p className="card-paragraph">{paragraph}</p>
            </div>
            </div>
  );
};

export default Card;


