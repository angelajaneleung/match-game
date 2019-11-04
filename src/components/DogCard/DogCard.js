// sets up reusable component for DogCard
import React from "react";
import "./DogCard.css";

// pass the image into each card
const DogCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
    </div>

);

export default DogCard;