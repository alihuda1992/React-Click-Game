import React from "react";
import "./FriendCard.css";

const FriendCard = props => {
  console.log("returned", props)
  return (
  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        
      </ul>
    </div>
      
  </div>
 )
};

export default FriendCard;