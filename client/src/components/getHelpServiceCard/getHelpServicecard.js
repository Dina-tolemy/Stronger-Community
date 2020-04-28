import React from "react";
import "./style.css";
function UserCard(props) {
  return (
    <div className="card userCard">
      <div className="content">
        <ul>
          <li>
        <strong>{props.name}</strong>
        </li>
        <li>
        <strong>{props.details}</strong>
        </li>
        </ul>
        <span className="remove">𝘅</span>
      </div>
    </div>
  );
}

export default UserCard;
