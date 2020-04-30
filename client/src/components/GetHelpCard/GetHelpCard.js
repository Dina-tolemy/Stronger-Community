import React from "react";
import "./style.css";

function GetHelpCard(props) {
  return (
    <div className="col-sm-12  col-md-6  col-lg-4">
      <div className="card allvullCard">
        <div className="content">
          <ul>
            <li id="liName">
              <strong>Name: </strong>
              {props.name}
            </li>
            <li id="liSuburb">
              <strong>Suburb: </strong>
              {props.suburb}
            </li>
            <li id="liPhone">
              <strong>Phone: </strong>
              {props.phone}
            </li>
            <li id="liEmail">
              <strong>Email: </strong>
              {props.email}
            </li>
            <li id="liService">
              <strong>Required services: </strong>
            
            {props.services}
          
              <p><strong>{props.services.name}</strong></p>
              <p>{props.services.details}</p>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GetHelpCard;
