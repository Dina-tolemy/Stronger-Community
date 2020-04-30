import React from "react";
import "./style.css";
function UserCard(props) {
  return (
   
        <div className="col-sm-12  col-md-6  col-lg-4">
          <div className="card userCard">
            <div className="content">
            <span className="remove" style={{ cursor: 'pointer'}} onClick={() =>props.deleteService(props.id)} >𝘅</span>
              <ul style={{color: props.isChecked ? "lightgrey" : "teal" }}>
                <li>
                  <strong>{props.name}</strong> 
                </li>
                <li>
                  {props.details}
                </li> 
                <li>{props.isChecked} </li>
              </ul>
             
            </div>
          </div>
        </div>
  );
}

export default UserCard;
