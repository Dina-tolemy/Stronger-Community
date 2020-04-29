import React from "react";
import "./style.css";

function GetHelpCard(props) {
  return (
   
    <div className="col-sm-12  col-md-6  col-lg-4">
    <div className="card allvullCard">
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong>{props.suburb}</strong>
          </li>
          <li>
            <strong>{props.phone}</strong>
          </li>
          <li>
            <strong> {props.email}</strong>
          </li>
          <li>
            <strong>Required services</strong>
          </li>
            <li>{props.services}</li>
        </ul>
        </div>
      </div>
      </div>
  );
}

export default GetHelpCard;
