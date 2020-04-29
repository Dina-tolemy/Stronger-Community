import React from "react";
import "./style.css";
function UserCard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12  col-md-6  col-lg-4">
          <div className="card userCard">
            <div className="content">
              <ul>
                <li>
                  <strong>{props.name}</strong> <span className="remove">𝘅</span>
                </li>
                <li>
                  <strong>{props.details}</strong>
                </li>
                <li>{props.isChecked}</li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
